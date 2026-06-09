import './style.css'

import router from './router'

import{createPinia} from 'pinia'
app.App = createApp(App)
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
