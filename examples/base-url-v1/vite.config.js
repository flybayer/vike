import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'

export default {
  base: '/some/base-url',
  plugins: [react(), ssr({ prerender: true })]
}
