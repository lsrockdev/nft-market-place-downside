import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/custom.css'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faFilter, faExternalLinkAlt);

createApp(App).use(store).use(router).use(vClickOutside).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
