class Multilingual {
    constructor() {
        this.pageLang
        this.browserLang
        this.locale
        this.langdata = {
            "languages": {
                "en": {
                    "strings": {
                        "link": "coffee in the morning",
                        "href": "../coffee-in-the-morning/index.html"
                    }
                },
                "es": {
                    "strings": {
                        "link": "café por la mañana",
                        "href": "../cafe-por-la-manana/index.html"
                    }
                }
            }
        }
        this.events()

    }
    events() {
        this.setLanguage()
    }
    setLanguage() {
        document.addEventListener('DOMContentLoaded', () => {
            this.browserLang = navigator.language.substr(0, 2)
            this.locale = Intl.getCanonicalLocales(this.browserLang)
            console.log('browserLang: ' + this.browserLang)
            console.log('locale: ' + this.locale)
            this.applyStrings()
        })
    }
    applyStrings() {
        let textElements = document.querySelectorAll(`[data-key]`)
        textElements.forEach(element => {
            let key = element.getAttribute('data-key')
            if (key) {
                element.textContent = this.langdata.languages[this.browserLang].strings[key]
                element.setAttribute('href', this.langdata.languages[this.browserLang].strings['href'])
            }
        })
    }

}
export default Multilingual

/*class Multilingual {
  constructor() {
      this.langdata = {
          "languages": {
              "en": {
                  "strings": {
                      "link": "coffee in the morning"
                  }
              },
              "es": {
                  "strings": {
                      "link": "café por la mañana"
                  }
              }
          }
      }
      this.events()

  }
  events() {
      this.setLanguage()
  }
  setLanguage() {
      document.addEventListener('DOMContentLoaded', () => {
          let zones = document.querySelectorAll('html [lang]')
          this.applyStrings(zones)
          let language = this.findLocaleMatch()
          console.log('language: ' + language)
          let container = document.querySelector(`html [lang*=${language}]`)
          console.log('container: ' + container)
          container.classList.add('lang-match')
      })
  }
  applyStrings(containers) {
      containers.forEach(container => {
          console.log('zone: ' + container.className)
              // Find all elements with a data-key
          let locale = container.getAttribute('lang')
          container.querySelectorAll(`[data-key]`).forEach(element => {
              let key = element.getAttribute('data-key')
              let lang = locale.substr(0, 2)
              console.log('locale: ' + locale)
              console.log('lang: ' + lang)
              console.log('key: ' + key)
              if (key) {
                  element.textContent = this.langdata.languages[lang].strings[key]
              }
          })
      })
  }
  findLocaleMatch() {
      let keys = Object.keys(this.langdata.languages)
      let locales = Intl.getCanonicalLocales(keys)
      let lang = navigator.language
      console.log('navigator: ' + lang)
      let locale = Intl.getCanonicalLocales(lang)
      console.log('locale : ' + locale)
      let langMatch = document.documentElement.getAttribute('lang')
      locales = locales.filter(l => locale == l)
      langMatch = (locales.lenght > 0) ? locales[0] : langMatch
      return langMatch
  }
}
export default Multilingual*/