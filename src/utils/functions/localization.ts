/* eslint-disable import/prefer-default-export */
import { LOCALSTORAGE_LANGUAGE_KEY } from '../constant'

export const getDefaultLangage = (locales: string[]) => {
  const localStorageLanguage = localStorage.getItem(LOCALSTORAGE_LANGUAGE_KEY)
  return localStorageLanguage || navigator.language.split('-')[0] in locales
    ? navigator.language.split('-')[0]
    : 'en'
}
