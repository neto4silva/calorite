import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueApexCharts from "vue3-apexcharts";

loadFonts();

const app = createApp(App);
app.use(router);
app.use(VueApexCharts); // Corrigido: não usar app.app
app.use(vuetify);
app.mount("#app");
