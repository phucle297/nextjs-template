import { MultipleLanguageInterface } from 'data/multiple-langue-type'
import { useRouter } from 'next/router'

const useTrans = () => {
  const { locale } = useRouter()
  if (locale == 'vi') {
    const oke: keyof MultipleLanguageInterface = 'vi'
    return oke
  }
  if (locale == 'en') {
    const oke: keyof MultipleLanguageInterface = 'en'
    return oke
  }
  const defaultLocale: keyof MultipleLanguageInterface = 'vi'
  return defaultLocale
}

export default useTrans
