import { createI18n } from "vue-i18n";
import cpt from '../locales/pt.json';
import cen from '../locales/en.json';

import { pt as vpt, en as ven} from 'vuetify/locale'

const pt = {...vpt, ...cpt};
const en = {...ven, ...cen};
const messages = { pt, en};
const locale = {
  locale: "pt",
  messages: messages,
}

const i18n = createI18n(locale);

export { i18n , locale}
