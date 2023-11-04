import { createContext, useContext } from 'react'

export const AppStateContext = createContext<AppContextProps>({
  content: [],
  locale: '',
  locales: [],
  setLocale: () => null
})

export const getAppContext = () => useContext(AppStateContext)
