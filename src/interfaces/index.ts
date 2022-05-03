export interface ILicense {
  name: string;
  url: string;
}

export interface IPhonetic {
  text: string;
  audio: string;
}

interface ISynAnton {
  synonyms: string[];
  antonyms: string[];
}

export interface IDefinition extends ISynAnton {
  definition: string;
  example: string;
}

export interface IMeaning extends ISynAnton {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IApiWordRequest {
  word: string;
  phonetic?: string;
  origin?: string;
  phonetics: IPhonetic[];
  license: ILicense;
  meanings: IMeaning[];
  sourceUrls?: string[];
}
