// LA_TEMP
// https://vike.dev/onPrerenderStart

import type { Config, PageContextServer } from 'vike/types'

// We only need this for pre-rendered apps https://vike.dev/pre-rendering
const onPrerenderStart: Config['onPrerenderStart'] = (prerenderContext: {
  pageContexts: PageContextServer[]
}): { prerenderContext: { pageContexts: PageContextServer[] } } => {
  const pageContexts: PageContextServer[] = []
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    const LA_TEMP_locales = ['fr']
    LA_TEMP_locales.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext
      if (urlOriginal === '/markdown') {
        urlOriginal = `/${locale}${pageContext.urlOriginal}`
        console.log('LA_TEMP: urlOriginal', urlOriginal)
        pageContexts.push({
          ...pageContext,
          urlOriginal,
          // Set pageContext.locale
          locale
        })
      }
    })
  })
  return {
    prerenderContext: {
      pageContexts
    }
  }
}
export default onPrerenderStart

declare global {
  namespace Vike {
    interface PageContext {
      locale: string
    }
  }
}
