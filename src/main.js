import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
loadFonts()
const app = createApp(App);
app.use(router)
app.use(VueSweetalert2)
app.use(store)
app.use(vuetify)
app.mount('#app')




