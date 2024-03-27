import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import VueEasyLightbox from 'vue-easy-lightbox'

const app = createApp(App)

app.config.globalProperties.elasticMailUsername = 'ivan.lozhkin2020@gmail.com'
app.config.globalProperties.elasticMailKey = 'A5D4AD06D307152DBF54FAEB41E75780B5C9'

app.use(VueEasyLightbox)

app.mount('#app')
