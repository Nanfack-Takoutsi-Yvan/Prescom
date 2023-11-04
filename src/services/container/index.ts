import LocalizationService from './localization'

class Container {
  public localization: LocalizationService

  constructor() {
    this.localization = new LocalizationService()
  }
}

export default new Container()
