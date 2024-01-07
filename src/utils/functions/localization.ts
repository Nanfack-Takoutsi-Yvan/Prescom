import { marked } from 'marked'
import DOMPurify from 'dompurify'
import RemoveMarkdown from 'remove-markdown'
import { LOCAL_STORAGE_LANGUAGE_KEY } from '../constant'
import { isBrowser } from './utils'

export const getDefaultLanguage = (locales: string[]) => {
  const localStorageLanguage = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)
  return localStorageLanguage || navigator.language.split('-')[0] in locales
    ? navigator.language.split('-')[0]
    : 'en'
}

export const capitalize = (text: string) =>
  text
    .split(' ')
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')

export const purifyText = (text: string) => {
  if (!text) return ''
  if (isBrowser()) {
    return DOMPurify.sanitize(RemoveMarkdown(text))
  }
  return RemoveMarkdown(text)
}

export const formatHTMLText = (text?: string) => {
  if (!text) return ''

  if (isBrowser()) {
    return DOMPurify.sanitize(marked.parse(text))
  }

  return marked.parse(text)
}
