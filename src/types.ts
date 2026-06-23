/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WordPhoneme {
  symbol: string;         // e.g. "θ", "ɔː", "t"
  type: 'vowel' | 'consonant';
  label: string;          // e.g. "Âm xát răng môi", "Nguyên âm tròn môi ngắn"
  mouthShapeId: string;   // maps to a MouthShapeDesign
  description: string;    // Vietnamese step-by-step instructions
  commonErrors: string;   // Common errors for Vietnamese speakers
  remedy: string;         // How to correct this error
}

export interface ExampleSentence {
  english: string;
  vietnamese: string;
  ipa: string;
}

export interface WordDetailsType {
  word: string;
  ipa: string;
  meaning: string;
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
  phonemes: WordPhoneme[];
  example: ExampleSentence;
}

export interface MouthShapeDetails {
  id: string;
  name: string;
  engName: string;
  lipsDesc: string;
  jawDesc: string;
  tongueDesc: string;
}
