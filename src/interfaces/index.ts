export interface ILicense {
  name: string;
  url: string;
}

export interface IPhonetic {
  text: string;
  audio: string;
}

export interface IDefinition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IApiWordRequest {
  word: string;
  phonetic?: string;
  phonetics: IPhonetic[];
  license: ILicense;
  meanings: Meaning[];
  sourceUrls?: string[];
}
