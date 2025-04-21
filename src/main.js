import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
app.use(createPinia()); // Piniaをグローバル登録