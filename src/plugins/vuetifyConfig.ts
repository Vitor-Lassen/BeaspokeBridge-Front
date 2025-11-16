// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css';
import collors from 'vuetify/util/colors'
import {locale} from './i18nConfig'
import {VMaskInput} from 'vuetify/labs/VMaskInput'

const vuetify = createVuetify({
  components:{
    ...components,
    VMaskInput
  },
  directives,
  locale: locale,
  defaults:{
    VBtn:{
      rounded: 'xl',
      activeColor: 'secondary',
    },
    VTextField:{
      rounded: 'xl',
      variant: 'outlined',

    },
    VMaskInput:{
      rounded: 'xl',
      variant: 'outlined',
    },
    VTextarea:{
      rounded: 'xl',
      variant: 'outlined',
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme:{
    themes:{
      light:{
        dark: false,
        colors:{
          primary: '#00274D',
          secondary: '#D70034',
          accent: collors.shades.black,
          error: collors.red.accent3,
          info: collors.teal.lighten1,
          success: collors.green.lighten1,
          warning: collors.amber.base,
          'on-surface': '#00274D'
        }
      }
    }
  }
})


export default vuetify

