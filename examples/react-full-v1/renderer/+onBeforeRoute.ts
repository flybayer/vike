// LA_TEMP

import type { Config, PageContextServer } from 'vike/types'

const onBeforeRoute: Config['onBeforeRoute'] = (
  pageContext: PageContextServer
): {
  pageContext: Partial<Vike.PageContext>
} => {
  // LA_TEMP:
  let urlWithoutLocale = pageContext.urlOriginal
  let locale = 'en'
  if (urlWithoutLocale.startsWith('/fr')) {
    urlWithoutLocale = urlWithoutLocale.slice(3)
    locale = 'fr'
  }

  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`. We can then use https://vike.dev/pageContext-anywhere to access pageContext.locale in any React/Vue component.
      locale,
      // We overwrite the original URL
      urlOriginal: urlWithoutLocale
    }
  }
}
export default onBeforeRoute

declare global {
  namespace Vike {
    interface PageContext {
      urlOriginal: string
    }
  }
}
