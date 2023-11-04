import LocalizationService from './localisation'

class Container {
  public localization: LocalizationService

  constructor() {
    this.localization = new LocalizationService()
  }
}

export default new Container()
