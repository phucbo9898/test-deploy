import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  library.add(fas); // Thêm toàn bộ solid icons (fas)

  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
