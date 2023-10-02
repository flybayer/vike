import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'

const root = __dirname

export default {
  build: {
    outDir: `${root}/../../examples/react-full-v1/dist/nested`
  },
  plugins: [
    ssr({
      prerender: {
        partial: true // LA_TEMP
      }
    }),
    mdx(),
    react()
  ]
} as UserConfig
