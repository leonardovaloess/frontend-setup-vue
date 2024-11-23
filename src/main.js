import "./assets/main.css";
import "primeicons/primeicons.css";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// components
const app = createApp(App);

import Button from "primevue/button";
import InputText from "primevue/inputtext";

// import components

app.component("Button", Button);
app.component("InputText", InputText);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "none",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});
app.use(createPinia());
app.use(router);

app.mount("#app");
