import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

// styling
import "@/assets/styles/index.scss";
import "primevue/resources/themes/aura-light-indigo/theme.css";

// init
createApp(App).use(PrimeVue).mount("#app");
