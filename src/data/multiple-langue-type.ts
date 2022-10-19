export interface MultipleLanguageInterface {
  vi: string
  en: string
}

export interface AccessMultipleLanguageInterface {
  vi: keyof MultipleLanguageInterface
  en: keyof MultipleLanguageInterface
}
