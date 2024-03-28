import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "@/router";
import i18n from "@/locales";

// primevue
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

// styling
import "@/assets/styles/index.scss";
import "primevue/resources/themes/aura-light-indigo/theme.css";

// init
const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
