/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WordDetailsType } from '../types';

export const CATEGORIES = [
  {
    id: 'vowels',
    name: 'Nguyên âm dễ nhầm lẫn',
    description: 'Tập trung vào sự khác biệt giữa nguyên âm dài/ngắn, dẹt môi hay tròn môi.',
    words: ['sheep', 'cat', 'bird', 'father', 'dog']
  },
  {
    id: 'consonants',
    name: 'Phụ âm gió & Phụ âm khó',
    description: 'Các phụ âm ma sát, đặt lưỡi kẹp răng hoặc chạm răng môi đặc trưng tiếng Anh.',
    words: ['think', 'vowel', 'choose', 'hello']
  },
  {
    id: 'daily',
    name: 'Từ vựng giao tiếp phổ biến',
    description: 'Các từ quen thuộc giúp bạn luyện cơ miệng nhuần nhuyễn khi nói hằng ngày.',
    words: ['beautiful', 'family', 'english', 'thank']
  }
];

export const FALLBACK_WORDS: Record<string, WordDetailsType> = {
  sheep: {
    word: 'sheep',
    ipa: '/ʃiːp/',
    meaning: 'con cừu',
    partOfSpeech: 'noun',
    synonyms: ['lamb', 'ewe', 'ram'],
    antonyms: [],
    example: {
      english: 'There is a white sheep eating grass.',
      vietnamese: 'Có một chú cừu trắng đang ăn cỏ.',
      ipa: '/ðeə(r) ɪz ə waɪt ʃiːp ˈiːtɪŋ ɡrɑːs/'
    },
    phonemes: [
      {
        symbol: 'ʃ',
        type: 'consonant',
        label: 'Phụ âm xát tích cực (Âm sờ nặng)',
        mouthShapeId: 'sibilant-teeth-closed',
        description: 'Hai hàm răng khép gần chạm nhau nhưng không khít. Hai khóe môi hơi khép vào và đẩy hai môi cong tròn ra phía trước. Đầu lưỡi hướng về phía nướu răng trên nhưng không chạm, tạo khe hẹp để luồng hơi thoát ra phát thành âm "sh".',
        commonErrors: 'Phát âm nhẹ như chữ "s" tiếng Việt (xinh đẹp) hoặc không chu môi.',
        remedy: 'Chu tròn lip và đẩy hơi thật mạnh, tạo tiếng xì xát đặc trưng (như khi đang ra hiệu im lặng "suỵt").'
      },
      {
        symbol: 'iː',
        type: 'vowel',
        label: 'Nguyên âm đơn dài (i dài)',
        mouthShapeId: 'smiling-spread',
        description: 'Khóe miệng mở rộng sang hai bên như đang nở nụ cười tươi. Lưỡi nâng cao về phía vòm miệng trước, đầu lưỡi chạm mặt trong răng dưới. Hàm dưới hơi nâng lên, phát âm kéo dài lực căng.',
        commonErrors: 'Phát âm quá ngắn, giống âm "i" tiếng Việt thông thường dẫn đến nhầm sang từ "ship" (con tàu).',
        remedy: 'Cố ý cười bẹt miệng hết cỡ sang hai bên và duy trì âm thanh khoảng 1-1.5 giây.'
      },
      {
        symbol: 'p',
        type: 'consonant',
        label: 'Phụ âm vô thanh bật hơi (Âm p)',
        mouthShapeId: 'closed-lips',
        description: 'Khép chặt hai môi lại để chặn luồng hơi từ phổi đi lên nén lại phía sau môi. Sau đó đột ngột mở môi bộc phát luồng khí ra ngoài mà không rung dây thanh quản.',
        commonErrors: 'Phát âm yếu, không bật hơi, hoặc rung dây thanh quản biến thành âm "b", hoặc bỏ qua không phát âm đuôi (ending sound).',
        remedy: 'Đặt một tờ giấy mỏng trước miệng khoảng 5cm. Khi bật phát âm /p/, tờ giấy phải bay hoặc rung mạnh do luồng hơi thoát ra.'
      }
    ]
  },
  think: {
    word: 'think',
    ipa: '/θɪŋk/',
    meaning: 'suy nghĩ, nghĩ rằng',
    partOfSpeech: 'verb',
    synonyms: ['ponder', 'consider', 'reflect', 'believe'],
    antonyms: ['ignore', 'neglect'],
    example: {
      english: 'I think that is a wonderful idea.',
      vietnamese: 'Tôi nghĩ đó là một ý tưởng tuyệt vời.',
      ipa: '/aɪ θɪŋk ðæt ɪz ə ˈwʌndəfl aɪˈdɪə/'
    },
    phonemes: [
      {
        symbol: 'θ',
        type: 'consonant',
        label: 'Phụ âm ma sát răng - lưỡi vô thanh (th thổi)',
        mouthShapeId: 'tongue-between-teeth',
        description: 'Đặt đầu lưỡi nhẹ nhàng giữa mặt nhai của răng cửa hàm trên và hàm dưới (hoặc chạm vào rìa dưới răng cửa trên). Sau đó thổi luồng hơi ra khe hẹp giữa răng cửa trên và lưỡi, không rung dây thanh quản.',
        commonErrors: 'Người Việt thường đọc thành âm "th" (thờ của tiếng Việt, rụt lưỡi vào) hoặc âm "t" hay "s".',
        remedy: 'Hơi thè đầu lưỡi ra ngoài vượt qua 2 răng cửa một chút trước khi thổi hơi. Nhìn gương để thấy rõ đầu lưỡi lộ ra.'
      },
      {
        symbol: 'ɪ',
        type: 'vowel',
        label: 'Nguyên âm đơn ngắn (i ngắn)',
        mouthShapeId: 'neutral-relaxed',
        description: 'Khẩu hình miệng mở tự nhiên, khoảng cách giữa xương hàm hẹp hơn âm /iː/. Lưỡi thấp hơn và lùi về phía sau một chút so với /iː/. Cơ môi và má thả lỏng hoàn toàn. Âm phát ra dứt khoát dứt âm.',
        commonErrors: 'Đọc bẹt miệng căng kéo thành "i" dài hoặc đọc thành âm "ê" hẳn.',
        remedy: 'Thả lỏng toàn bộ cơ mặt, mở miệng nhẹ, phát một âm ở giữa "i" và "ê" thật nhanh dứt khoát.'
      },
      {
        symbol: 'ŋ',
        type: 'consonant',
        label: 'Phụ âm mũi ngạc mềm (Âm ngờ)',
        mouthShapeId: 'velar-contact',
        description: 'Nâng phần sau của lưỡi (cuống lưỡi) tiếp xúc với ngạc mềm (vòm miệng mềm phía sau) để chặn khí hoàn toàn qua khoang miệng. Hạ ngạc mềm xuống để luồng hơi thoát ra ngoài hoàn toàn bằng đường mũi.',
        commonErrors: 'Đọc rõ âm "ngờ" như tiếng Việt ở cuối từ (thanh âm bị kéo dài vô nghĩa).',
        remedy: 'Giữ phần lưỡi chặn ngạc để tạo âm ngân mũi nhẹ, chặn luồng khí lại trước khi chuyển sang âm tiếp theo.'
      },
      {
        symbol: 'k',
        type: 'consonant',
        label: 'Phụ âm vô thanh bật hơi ngạc mềm (Âm c/k)',
        mouthShapeId: 'velar-contact',
        description: 'Nâng cuống lưỡi chạm vào ngạc mềm chắn luồng hơi từ phổi lên. Sau đó hạ nhanh lưỡi xuống để luồng hơi nén được giải phóng đột ngột tạo ra âm xì hơi vô thanh không rung thanh quản.',
        commonErrors: 'Nhầm lẫn thành âm "cờ" tiếng Việt không bật hơi hoặc quên phát âm ở đuôi.',
        remedy: 'Ép khí ở phần vòm họng gỗ ra một tiếng nổ nhẹ khô khốc như tiếng khạc nhẹ không dây thanh.'
      }
    ]
  },
  vowel: {
    word: 'vowel',
    ipa: '/ˈvaʊ.əl/',
    meaning: 'nguyên âm',
    partOfSpeech: 'noun',
    synonyms: ['vocalic sound'],
    antonyms: ['consonant'],
    example: {
      english: 'English has five primary vowel letters.',
      vietnamese: 'Tiếng Anh có năm chữ cái nguyên âm chính.',
      ipa: '/ˈɪŋɡlɪʃ hæz faɪv ˈpraɪməri ˈvaʊəl ˈletəz/'
    },
    phonemes: [
      {
        symbol: 'v',
        type: 'consonant',
        label: 'Phụ âm xát răng môi hữu thanh (Âm v)',
        mouthShapeId: 'teeth-on-lip',
        description: 'Răng cửa hàm trên chạm nhẹ vào phần trong của môi dưới. Ép không khí từ phổi qua khe hẹp giữa răng và môi dưới, đồng thời rung dây thanh quản tạo tiếng xát có cao độ.',
        commonErrors: 'Phát âm giống chữ "v" tiếng Việt (không rít gió) hoặc nhầm sang phụ âm "b".',
        remedy: 'Cảm nhận độ rung của môi dưới khi đẩy hơi, môi bên dưới sẽ hơi tê nhẹ vì luồng khí ma sát rung.'
      },
      {
        symbol: 'aʊ',
        type: 'vowel',
        label: 'Nguyên âm đôi chuyển tiếp rộng - tròn (ao)',
        mouthShapeId: 'open-wide',
        description: 'Bắt đầu ở tư thế âm /a/ (miệng mở rộng đứng thẳng, lưỡi phẳng thấp) sau đó chuyển thật mượt sang tư thế /ʊ/ (phần hàm thu nhỏ miệng thu tròn lại chu về phía trước).',
        commonErrors: 'Phát âm thành âm "ao" của tiếng Việt phẳng dẹt miệng rụt lưỡi.',
        remedy: 'Bắt đầu từ âm "a" thật rộng sau đó kết thúc bằng việc thu nhỏ môi tròn như chữ "u" dứt khoát.'
      },
      {
        symbol: 'ə',
        type: 'vowel',
        label: 'Nguyên âm trung hòa (âm Schwa / ơ)',
        mouthShapeId: 'neutral-relaxed',
        description: 'Khẩu hình miệng thả lỏng hoàn toàn. Môi hơi hé mở nhẹ cực kỳ relaxed. Lưỡi để tự nhiên giữa khoang miệng, không nâng lên không ấn xuống. Đây là âm lười phổ biến nhất tiếng Anh.',
        commonErrors: 'Cố phát âm thành "ơ" quá rõ ràng hoặc căng cơ má.',
        remedy: 'Hãy tưởng tượng bạn đang mệt mỏi thốt ra tiếng "ơ" nhẹ nhàng, ngắn nhất có thể.'
      },
      {
        symbol: 'l',
        type: 'consonant',
        label: 'Phụ âm lướt bên hữu thanh (Âm l)',
        mouthShapeId: 'alveolar-ridge-contact',
        description: 'Ấn hẳn đầu lưỡi chặt lên phần nướu phía sau răng cửa hàm trên (alveolar ridge). Luồng hơi sẽ uốn cong lách dọc qua hai bên mép lưỡi đi ra ngoài trong khi dây thanh rung.',
        commonErrors: 'Bỏ qua không phát âm "l" ở cuối từ (dark-L) hoặc nhầm lẫn thành "n".',
        remedy: 'Khi kết thúc từ, giữ vững đầu lưỡi dính chặt vào nướu răng cửa trên khoảng nửa giây để tạo tiếng ù nhẹ đặc trưng của dark-L.'
      }
    ]
  },
  cat: {
    word: 'cat',
    ipa: '/kæt/',
    meaning: 'con mèo',
    partOfSpeech: 'noun',
    synonyms: ['feline', 'kitty'],
    antonyms: [],
    example: {
      english: 'My cat is sleeping on the table.',
      vietnamese: 'Con mèo của tôi đang ngủ trên bàn.',
      ipa: '/maɪ kæt ɪz ˈsliːpɪŋ ɒn ðə ˈteɪbl/'
    },
    phonemes: [
      {
        symbol: 'k',
        type: 'consonant',
        label: 'Phụ âm vô thanh bật hơi ngạc mềm',
        mouthShapeId: 'velar-contact',
        description: 'Nâng cuống lưỡi chạm vào ngạc mềm phía sau làm chặn luồng hơi. Hạ lưỡi xuống thật nhanh để giải phóng luồng hơi vô thanh sắc bén.',
        commonErrors: 'Đọc nhẹ giống chữ "c" trong tiếng Việt hoặc bỏ âm.',
        remedy: 'Ép khí ở cổ họng rít mạnh hơi ra ngoài mà không rung dây thanh quản.'
      },
      {
        symbol: 'æ',
        type: 'vowel',
        label: 'Nguyên âm đơn ngắn bẹt (a bẹt / a bướm)',
        mouthShapeId: 'open-wide',
        description: 'Há miệng thật to theo chiều dọc, đồng thời khóe miệng kéo dẹt căng sang hai bên. Đè thấp lưỡi phẳng xuống sát hàm dưới, đầu lưỡi sát mặt sau răng cửa dưới. Âm phát ra nửa "a" nửa "e".',
        commonErrors: 'Cứ phát âm thành âm "e" tiếng Việt hoặc âm "a" thuần túy.',
        remedy: 'Hãy giả vờ như bạn đang há to miệng khám họng và thử nói chữ "e". Kết quả sẽ ra một âm /æ/ cực chuẩn.'
      },
      {
        symbol: 't',
        type: 'consonant',
        label: 'Phụ âm vô thanh bật hơi đầu lưỡi (Âm t)',
        mouthShapeId: 'alveolar-ridge-contact',
        description: 'Đặt toàn bộ đầu lưỡi áp sát chặt vào phần nướu răng cửa trên chặn hoàn toàn luồng hơi. Tích luồng khí và giật đầu lưỡi nẩy xuống phóng hơi ra ngoài thật giòn giã.',
        commonErrors: 'Đọc thành âm "tờ" tiếng Việt có âm "ơ" đi kèm hoặc quên phát ending sound.',
        remedy: 'Chỉ giải phóng hơi ma sát nổ nhẹ xì qua kẽ răng, không thêm nguyên âm "ơ" đằng sau.'
      }
    ]
  },
  bird: {
    word: 'bird',
    ipa: '/bɜːd/',
    meaning: 'con chim',
    partOfSpeech: 'noun',
    synonyms: ['avian', 'fowl'],
    antonyms: [],
    example: {
      english: 'A small bird is singing on the tree branch.',
      vietnamese: 'Một chú chim nhỏ đang hót trên cành cây.',
      ipa: '/ə smɔːl bɜːd ɪz ˈsɪŋɪŋ ɒn ðə triː brɑːntʃ/'
    },
    phonemes: [
      {
        symbol: 'b',
        type: 'consonant',
        label: 'Phụ âm tắc hai môi hữu thanh (Âm b)',
        mouthShapeId: 'closed-lips',
        description: 'Khép chặt hai môi chặn dòng khí, đồng thời rung dây thanh quản ngay khi mở miệng đột ngột để phát âm bật ra mạnh mẽ.',
        commonErrors: 'Đọc nhẹ giống b tiếng Việt thả lỏng không chịu ép môi tích khí.',
        remedy: 'Mím mội chặt nén khí khoảng 0.1 giây rồi nói chữ "b" thật dõng dạc rung cổ họng.'
      },
      {
        symbol: 'ɜː',
        type: 'vowel',
        label: 'Nguyên âm đơn dài trung tâm (ơ dài cong lưỡi)',
        mouthShapeId: 'neutral-relaxed',
        description: 'Miệng hé mở rất nhẹ thả lỏng trung hòa. Lưỡi hơi nâng lên một chút ở giữa miệng, trong giọng Mỹ (Rhotic) phần đầu lưỡi uốn cong thu nhẹ về phía sau hoặc cuộn lên trên.',
        commonErrors: 'Người Việt hay đọc thành âm "ơ" ngắn phẳng dẹt hoặc âm "â" bị gằn giọng.',
        remedy: 'Phát âm "ơ" kéo dài kết hợp thu lưỡi rụt lại tạo độ sâu âm vang từ cuống họng ấm áp.'
      },
      {
        symbol: 'd',
        type: 'consonant',
        label: 'Phụ âm tắc nướu hữu thanh (Âm d)',
        mouthShapeId: 'alveolar-ridge-contact',
        description: 'Đầu lưỡi chạm nướu hàm trên chặn hoàn toàn luồng hơi, dây thanh rung động, giật lưỡi giải phóng luồng khí bật ra nhẹ sâu lắng.',
        commonErrors: 'Đọc thành âm "đờ" trong tiếng Việt bộc phát tự do hoặc quên mất âm đuôi.',
        remedy: 'Giữ chặt đầu lưỡi trên nướu ép hơi phát tiếng nổ trầm nhẹ đầy nội lực.'
      }
    ]
  },
  choose: {
    word: 'choose',
    ipa: '/tʃuːz/',
    meaning: 'lựa chọn, chọn',
    partOfSpeech: 'verb',
    synonyms: ['select', 'pick', 'prefer', 'opt'],
    antonyms: ['reject', 'refuse'],
    example: {
      english: 'You can choose any book you like.',
      vietnamese: 'Bạn có thể chọn bất kỳ cuốn sách nào bạn thích.',
      ipa: '/juː kæn tʃuːz ˈeni bʊk juː laɪk/'
    },
    phonemes: [
      {
        symbol: 'tʃ',
        type: 'consonant',
        label: 'Phụ âm tắc - xát tích cực vô thanh (ch)',
        mouthShapeId: 'sibilant-teeth-closed',
        description: 'Dạng kết hợp: Đặt đầu lưỡi lên nướu răng cửa trên giống âm /t/ chặn hơi, đồng thời chu môi cong ra phía trước giống âm /ʃ/. Sau đó giật lưỡi lùi ra giải tỏa hơi phóng ra tiếng rít dứt khoát vô thanh.',
        commonErrors: 'Đọc nhẹ giống âm "ch" trong tiếng Việt (không chu tròn môi tròn tiếng, hơi yếu).',
        remedy: 'Phải chu môi dẩu nhẹ ra ngoài như đang dỗi dằn, nén khí bật hơi thật mạnh ra ngoài.'
      },
      {
        symbol: 'uː',
        type: 'vowel',
        label: 'Nguyên âm đơn dòng sau đóng (u dài)',
        mouthShapeId: 'rounded-pursed',
        description: 'Khép nhỏ viền môi lại hình tròn nhỏ căng hơi nhô ra phía trước hết cỡ như đang huýt sáo. Mặt sau của lưỡi nâng cao về phía vòm họng mềm, phát âm sâu dài trong khoang họng.',
        commonErrors: 'Đọc thành chữ "u" dẹt thả lỏng của tiếng Việt.',
        remedy: 'Chu môi hết cỡ sao cho lỗ tròn giữa hai môi nhỏ như một đầu ống hút nước.'
      },
      {
        symbol: 'z',
        type: 'consonant',
        label: 'Phụ âm ma sát hữu thanh sibilant (Âm z)',
        mouthShapeId: 'sibilant-teeth-closed',
        description: 'Đặt hai hàm răng gần sát nhau ghì khít hơi, lưỡi nâng cao hướng sát nướu răng trên tạo khe hẹp. Thổi hơi bộc phát liên tục nén giữa hai kẽ răng cửa đồng thời rung cổ họng phát âm vo ve.',
        commonErrors: 'Hay đọc nhầm thành tiếng sụt hơi /s/ vô thanh hoặc đọc thành âm "dờ" tiếng Việt.',
        remedy: 'Tạo âm xì dẹt nhưng cổ họng phải rung rền lên như tiếng con ong mật đang bay sát tai.'
      }
    ]
  },
  father: {
    word: 'father',
    ipa: '/ˈfɑːðə(r)/',
    meaning: 'cha, bố',
    partOfSpeech: 'noun',
    synonyms: ['dad', 'papa', 'sire'],
    antonyms: ['mother'],
    example: {
      english: 'My father is a high school teacher.',
      vietnamese: 'Bố tôi là giáo viên trung học phổ thông.',
      ipa: '/maɪ ˈfɑːðə(r) ɪz ə haɪ skuːl ˈtiːtʃə(r)/'
    },
    phonemes: [
      {
        symbol: 'f',
        type: 'consonant',
        label: 'Phụ âm tiếp xát răng môi vô thanh (Âm f)',
        mouthShapeId: 'teeth-on-lip',
        description: 'Răng cửa trên cắn nhẹ nhàng mép trong của môi dưới. Đẩy gió vô thanh thoát xì rít qua kẽ răng không rung dây thanh.',
        commonErrors: 'Phát âm yếu như chữ "ph" tiếng Việt dẹt hoặc không rít gió.',
        remedy: 'Cắn nhấn môi chắc một xíu rồi dùng lực hơi từ bụng thổi luồng gió giòn dã ra ngoài.'
      },
      {
        symbol: 'ɑː',
        type: 'vowel',
        label: 'Nguyên âm đơn mở rộng dòng sau (a dài)',
        mouthShapeId: 'open-wide',
        description: 'Hạ hàm dưới xuống tối đa mở rộng họng thẳng. Lưỡi đè thấp bẹp lùi về phía sát đáy vòm họng. Phát âm "a" kéo dài trầm và ấm từ sâu trong cổ họng.',
        commonErrors: 'Há hàm quá bé khiến âm dẹt lại thành "a" thường.',
        remedy: 'Cố há to miệng thẳng như khi bác sĩ yêu cầu nói "Aaaa" dẹp hẳn cuống lưỡi xuống.'
      },
      {
        symbol: 'ð',
        type: 'consonant',
        label: 'Phụ âm ma sát răng lưỡi hữu thanh (th rung)',
        mouthShapeId: 'tongue-between-teeth',
        description: 'Đặt đầu lưỡi kẹp giữa răng dưới và răng trên. Thổi hơi đồng thời rung mạnh dây thanh quản luồng khí len qua rìa lưỡi bập bùng.',
        commonErrors: 'Người Việt hay phát âm thành chữ "đ" hoặc "d" (dờ).',
        remedy: 'Phải thè đầu lưỡi ra và ép chặt khe răng rồi mới rung rung thanh quản giật nhẹ lưỡi vào.'
      },
      {
        symbol: 'ə',
        type: 'vowel',
        label: 'Nguyên âm Schwa trung hòa ngắn',
        mouthShapeId: 'neutral-relaxed',
        description: 'Thả lỏng hoàn toàn miệng mở hé, phát ra âm ơ cực kỳ nhanh mảnh không trọng âm.',
        commonErrors: 'Căng cơ phát âm quá nặng thành "ơ" dài.',
        remedy: 'Phát âm ơ lướt siêu nhẹ lướt qua luôn.'
      }
    ]
  },
  beautiful: {
    word: 'beautiful',
    ipa: '/ˈbjuːtɪfl/',
    meaning: 'đẹp, xinh đẹp',
    partOfSpeech: 'adjective',
    synonyms: ['gorgeous', 'pretty', 'lovely', 'attractive'],
    antonyms: ['ugly', 'plain'],
    example: {
      english: 'She has a very beautiful voice.',
      vietnamese: 'Cô ấy có một giọng hát rất hay.',
      ipa: '/ʃiː hæz ə ˈveri ˈbjuːtɪfl vɔɪs/'
    },
    phonemes: [
      {
        symbol: 'b',
        type: 'consonant',
        label: 'Phụ âm tắc hai môi hữu thanh',
        mouthShapeId: 'closed-lips',
        description: 'Mím chặt hai môi tụ bộc hơi từ phổi, mở bung môi ra đồng thời khởi động rung dây thanh.',
        commonErrors: 'Đọc hời hợt giống b tiếng Việt.',
        remedy: 'Chủ động ép hai làn môi nén hơi giật giòn rộn.'
      },
      {
        symbol: 'j',
        type: 'consonant',
        label: 'Phụ âm tiếp cận ngạc cứng (Âm d/y bẹt)',
        mouthShapeId: 'smiling-spread',
        description: 'Cười căng môi bẹt sang hai bên, lưỡi đưa lên rất sát ngạc cứng đầu rìa lưỡi hướng răng trên. Lướt thật nhanh sang âm tiếp theo tạo hiệu ứng trượt "i-u".',
        commonErrors: 'Coi như âm câm hoặc đọc hẳn thành chữ "d" gắt tiếng Việt.',
        remedy: 'Bắt đầu giống âm "i" dẹt rồi trượt cực kì mượt mà sang nguyên âm u kế bên.'
      },
      {
        symbol: 'uː',
        type: 'vowel',
        label: 'Nguyên âm đơn u dài tròn môi',
        mouthShapeId: 'rounded-pursed',
        description: 'Môi chụm tròn nhô căng ra phía trước, vỗ hơi kéo dài ấm vùng vòm sau họng.',
        commonErrors: 'Chu môi không đủ sâu khiến âm phát ra nông cạn.',
        remedy: 'Giữ môi thật tròn bóng nhỏ căng bóng ra đằng trước.'
      },
      {
        symbol: 't',
        type: 'consonant',
        label: 'Phụ âm t bật hơi đầu lưỡi',
        mouthShapeId: 'alveolar-ridge-contact',
        description: 'Ấn đầu lưỡi nướu trên giật nổ luồng gió vô thanh dứt xì giòn dã.',
        commonErrors: 'Đọc rõ chữ t có phụ âm phụ.',
        remedy: 'Giật lưỡi lách khe răng phát hơi khô.'
      },
      {
        symbol: 'ɪ',
        type: 'vowel',
        label: 'Nguyên âm ngắn lười i ngắn',
        mouthShapeId: 'neutral-relaxed',
        description: 'Thả lỏng toàn hàm, hé nhẹ bớt bẹt cơ môi dứt khoát âm nhanh gọn.',
        commonErrors: 'Quá căng cơ môi thành i kéo dài.',
        remedy: 'Thả xụi má miệng hé vừa phát ra âm lùng bùng nhạt.'
      },
      {
        symbol: 'f',
        type: 'consonant',
        label: 'Phụ âm xát răng môi vô thanh',
        mouthShapeId: 'teeth-on-lip',
        description: 'Răng trên cắn hờ môi dưới thổi luồng gió ma sát bay giấy ra ngoài.',
        commonErrors: 'Quên rít gió thành âm ph phẳng tiếng Việt.',
        remedy: 'Chạm nhẹ kẽ răng và môi xì xì tiếng gió dứt.'
      },
      {
        symbol: 'l',
        type: 'consonant',
        label: 'Phụ âm lướt bên dính nướu răng cửa',
        mouthShapeId: 'alveolar-ridge-contact',
        description: 'Dính chặt đầu lưỡi trên nướu răng trên tạo tiền âm ngân trầm sâu nhẹ.',
        commonErrors: 'Bỏ hoàn toàn âm l khiến chữ cuối biến mất cực dở.',
        remedy: 'Khi kết thúc âm f lập tức đá đầu lưỡi lên áp sát trần nướu răng trên tạo tiếng ù mờ.'
      }
    ]
  }
};
