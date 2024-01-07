/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react'
import container from '../container/index'
import { getDefaultLanguage } from '../../utils/functions/localization'
import { LOCAL_STORAGE_LANGUAGE_KEY } from '../../utils/constant'

export const useLocalization = (
  currentLocale: string,
  setLocale: (value: string) => void
) => {
  const [content, setContent] = useState<AppPagesContent>()
  const [navItems, setNavItems] = useState<NavItem[]>([])

  const allLocalizedContent = container.localization.getTranslations()
  const locales = Object.keys(allLocalizedContent)

  useEffect(() => {
    if (!currentLocale) {
      const usedLocale = getDefaultLanguage(locales)
      setLocale(usedLocale)
    } else {
      const translations = allLocalizedContent[currentLocale]
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, currentLocale)
      setContent(translations[window.location.pathname])
      setNavItems(
        Object.keys(translations).map((key) => ({
          uri: key,
          name: translations[key].name,
          subPages: translations[key].subPages.length
            ? translations[key].subPages.map((subPages) => ({
                title: subPages.title
              }))
            : undefined
        }))
      )
    }
  }, [currentLocale])

  return {
    content,
    locales,
    navItems
  }
}
