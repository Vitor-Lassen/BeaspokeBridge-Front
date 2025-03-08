// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import collors from 'vuetify/util/colors'

const vuetify = createVuetify({
  components,
  directives,
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
          secondary: '#eb312a',
          accent: collors.shades.black,
          error: collors.red.accent3,
          info: collors.teal.lighten1,
          success: collors.green.lighten1,
          warning: collors.amber.base
        }
      }
    }
  }
})


export default vuetify

