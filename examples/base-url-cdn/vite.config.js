import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'

export default {
  plugins: [
    react(),
    ssr({
      baseAssets: 'http://localhost:8080/cdn/'
    })
  ]
}
