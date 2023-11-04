import container from '../container/index'

/* eslint-disable import/prefer-default-export */
export const useLocale = () => {
  container.localization.getTranslations()
}
