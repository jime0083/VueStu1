import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)          // ← ここで app を作成
const pinia = createPinia()         // ← Pinia を作成
app.use(pinia)                      // ← Pinia を Vue アプリに登録
app.mount('#app')                  // ← 最後にマウント
