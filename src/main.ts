import './assets/main.css'

import { createApp } from 'vue'
//Components
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetifyConfig'
import {i18n} from './plugins/i18nConfig'


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
