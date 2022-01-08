import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/custom.css'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTelegramPlane, faDiscord, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

library.add(faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faFacebookF, faTelegramPlane, faDiscord, faTwitter, faMediumM, faMoon, faSun, faCopyright);

createApp(App).use(store).use(router).use(vClickOutside).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
