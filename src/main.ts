import './styles/default.scss'

import { createApp } from 'vue'
//Components
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetifyConfig'
import {i18n} from './plugins/i18nConfig'

// Import DS
import dsContainer from './DS/ds-container.vue'
import dsQuote from './DS/ds-quote.vue'
import dsCard from './DS/ds-card.vue'
import dsOverride from './DS/ds-override.vue'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)

app.component('ds-container', dsContainer)
app.component('ds-quote', dsQuote)
app.component('ds-card', dsCard)
app.component('ds-override', dsOverride)

app.mount('#app')
