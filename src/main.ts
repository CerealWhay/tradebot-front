import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import { router } from "@/router";

// styling
import "@/assets/styles/index.scss";
import "primevue/resources/themes/aura-light-indigo/theme.css";

// init
const app = createApp(App);

app.use(PrimeVue);
app.use(createPinia());
app.use(router);
app.mount("#app");
