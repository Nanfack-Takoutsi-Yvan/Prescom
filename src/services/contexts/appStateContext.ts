import { createContext, useContext } from 'react'

export const AppStateContext = createContext<AppContextProps>({
  locale: '',
  locales: [],
  setLocale: () => null
})

export const getAppContext = () => useContext(AppStateContext)
