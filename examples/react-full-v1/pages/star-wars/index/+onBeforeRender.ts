// https://vike.dev/onBeforeRender

import type { Hook, HookParam, HookReturnTypeAsync } from 'vike/types'
import { filterMoviesData, getStarWarsMovies, getTitle } from './getStarWarsMovies'

const onBeforeRender: Hook<'onBeforeRender'> = async (
  pageContext: HookParam<'onBeforeRender', 0>
): HookReturnTypeAsync<'onBeforeRender'> => {
  await sleep(700) // Simulate slow network
  const movies = await getStarWarsMovies()
  debugger // LA_TEMP
  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        movies: filterMoviesData(movies)
      },
      // The page's <title>
      title: getTitle(movies)
    }
  }
}
export default onBeforeRender

function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}
