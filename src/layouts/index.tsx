/* eslint-disable react/jsx-no-undef */
import * as React from 'react'
import { type PageProps } from 'gatsby'
import useCursor from '../services/hooks/cursor'
import Navbar from '../components/ui/navbar/navbar'
import { useLocalization } from '../services/hooks/localization'
import { AppStateContext } from '../services/contexts/appStateContext'
import './index.module.scss'

const MainLayout: React.FC<PageProps> = ({ children }) => {
  const [locale, setLocale] = React.useState<string>('')

  useCursor()
  const { content, locales } = useLocalization(locale, setLocale)

  const value = React.useMemo<AppContextProps>(
    () => ({
      locale,
      locales,
      content,
      setLocale
    }),
    [locale, locales, content, setLocale]
  )

  return (
    <AppStateContext.Provider value={value}>
      <main>
        <Navbar />
        {children}
      </main>
    </AppStateContext.Provider>
  )
}

export default MainLayout
