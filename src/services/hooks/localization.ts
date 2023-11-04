/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react'
import container from '../container/index'
import { getDefaultLangage } from '../../utils/functions/localization'
import { LOCALSTORAGE_LANGUAGE_KEY } from '../../utils/constant'

export const useLocalization = (
  currentLocale: string,
  setLocale: (value: string) => void
) => {
  const [content, setContent] = useState<AppPagesContent[]>()

  const allLocalizedContent = container.localization.getTranslations()
  const locales = Object.keys(allLocalizedContent)

  useEffect(() => {
    if (!currentLocale) {
      const usedLocale = getDefaultLangage(locales)
      setLocale(usedLocale)
    } else {
      localStorage.setItem(LOCALSTORAGE_LANGUAGE_KEY, currentLocale)
      setContent(allLocalizedContent[currentLocale])
    }
  }, [currentLocale])

  return {
    content,
    locales
  }
}
