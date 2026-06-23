/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Lazy-initialize Gemini API client to prevent crashes on startup if key is missing
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error('GEMINI_API_KEY is not configured yet. Please configure it in the Secrets panel.');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST API for Word IPA & Mouth Shape details
app.post('/api/word-details', async (req, res) => {
  try {
    const { word } = req.body;
    if (!word || typeof word !== 'string') {
      res.status(400).json({ error: 'Từ tiếng Anh nhập vào không hợp lệ.' });
      return;
    }

    const cleanWord = word.trim().toLowerCase();

    // Initialize Gemini and query
    const ai = getAI();
    const prompt = `Phân tích từ tiếng Anh "${cleanWord}" chi tiết về cách phát âm, khẩu hình miệng của từng âm vị tạo nên từ đó, ngữ nghĩa tiếng Việt, từ đồng nghĩa và trái nghĩa.
Trả về dữ liệu JSON chính xác theo cấu trúc sau. TẤT CẢ các mô tả mô tả, nhãn, gợi ý lỗi, giải pháp phải viết bằng tiếng Việt tự nhiên, chính xác, sư phạm và dễ thực hành.

Cấu trúc JSON yêu cầu:
{
  "word": "${cleanWord}",
  "ipa": "phiên âm nước Anh / US của từ, ví dụ: /ʃiːp/",
  "meaning": "nghĩa tiếng Việt ngắn gọn, ví dụ: 'con cừu'",
  "partOfSpeech": "từ loại (noun, verb, adjective, adverb, preposition...)",
  "synonyms": ["mảng từ đồng nghĩa tiếng Anh thường dùng, từ 1-4 từ"],
  "antonyms": ["mảng từ trái nghĩa tiếng Anh thường dùng, từ 1-4 từ"],
  "example": {
    "english": "Ví dụ câu tiếng Anh chứa từ này",
    "vietnamese": "Dịch câu ví dụ sang tiếng Việt",
    "ipa": "Phiên âm IPA cho cả câu ví dụ"
  },
  "phonemes": [
    {
      "symbol": "kí tự IPA của âm vị cụ thể, ví dụ 'ʃ'",
      "type": "vowel" hoặc "consonant",
      "label": "Tên tiếng Việt âm vị, ví dụ 'Phụ âm xát vô thanh'",
      "mouthShapeId": "Chỉ chọn 1 trong các giá trị chính xác sau: 'sibilant-teeth-closed', 'smiling-spread', 'closed-lips', 'tongue-between-teeth', 'neutral-relaxed', 'velar-contact', 'teeth-on-lip', 'open-wide', 'rounded-pursed', 'alveolar-ridge-contact'",
      "description": "Hướng dẫn chi tiết từng bước đặt môi, lưỡi, răng, luồng hơi bằng tiếng Việt để phát âm chuẩn",
      "commonErrors": "Lỗi sai phổ biến của người Việt (ví dụ: không bật hơi, đọc nhẹ như s thường...)",
      "remedy": "Mẹo, phương pháp cụ thể luyện tập để sửa lỗi sai này"
    }
  ]
}

Hãy chia từ "${cleanWord}" thành các âm vị (phonemes) chính đại diện cho cách phát âm thực tế của nó (ví dụ sheep gồm 'ʃ', 'iː', 'p'). Mỗi âm vị gán một mouthShapeId phù hợp nhất trong mảng được cung cấp ở trên. Không được chế ra mouthShapeId ngoài danh sách đó.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          required: ['word', 'ipa', 'meaning', 'partOfSpeech', 'synonyms', 'antonyms', 'example', 'phonemes'],
          properties: {
            word: { type: Type.STRING },
            ipa: { type: Type.STRING },
            meaning: { type: Type.STRING },
            partOfSpeech: { type: Type.STRING },
            synonyms: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            antonyms: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            example: {
              type: Type.OBJECT,
              required: ['english', 'vietnamese', 'ipa'],
              properties: {
                english: { type: Type.STRING },
                vietnamese: { type: Type.STRING },
                ipa: { type: Type.STRING }
              }
            },
            phonemes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ['symbol', 'type', 'label', 'mouthShapeId', 'description', 'commonErrors', 'remedy'],
                properties: {
                  symbol: { type: Type.STRING },
                  type: { type: Type.STRING },
                  label: { type: Type.STRING },
                  mouthShapeId: { type: Type.STRING },
                  description: { type: Type.STRING },
                  commonErrors: { type: Type.STRING },
                  remedy: { type: Type.STRING }
                }
              }
            }
          }
        },
        temperature: 0.2
      }
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error('Mô hình Gemini không trả về kết quả.');
    }

    const data = JSON.parse(textOutput.trim());
    res.json(data);
  } catch (error: any) {
    console.error('Lỗi khi phân tích từ:', error);
    res.status(500).json({
      error: error.message || 'Có lỗi xảy ra khi gọi dịch vụ AI tư vấn khẩu hình miệng.'
    });
  }
});

// Configure Vite or Static Assets Server based on environment
const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

if (!isProd) {
  // Use Vite Dev Server in Middleware mode
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);
  console.log(`[DEV] Dev server is starting with Vite middleware on http://localhost:${PORT}`);
} else {
  // Serve built static assets in Production
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  console.log(`[PROD] Production server serving build assets on http://localhost:${PORT}`);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
