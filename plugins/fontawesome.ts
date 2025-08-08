import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

export default defineNuxtPlugin((nuxtApp) => {
  library.add(fas); // Thêm toàn bộ solid icons (fas)
  library.add(fab);
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
