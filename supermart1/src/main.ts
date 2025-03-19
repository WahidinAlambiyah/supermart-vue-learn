import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Global CSS has to be imported
// If needed, import other styles like Material Design Icons

const vuetify = createVuetify()

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
