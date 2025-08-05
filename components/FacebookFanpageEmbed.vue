<template>
  <ClientOnly>
    <div class="w-full">
      <div
        class="fb-page"
        :data-href="url"
        data-tabs=""
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote :cite="url" class="fb-xfbml-parse-ignore">
          <a :href="url" target="_blank">{{ pageTitle }}</a>
        </blockquote>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
  url: { type: String, required: true },
  pageTitle: { type: String, default: "Fanpage" },
});

onMounted(() => {
  if (window.FB) {
    window.FB.XFBML.parse();
  } else {
    // Load SDK if not loaded yet
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src =
        "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
});
</script>

<style scoped>
.fb-page {
  width: 100% !important;
}
</style>
