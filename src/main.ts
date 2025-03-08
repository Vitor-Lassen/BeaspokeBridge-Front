import './assets/main.css'

import { createApp } from 'vue'
//Components
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetifyConfig'




const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
