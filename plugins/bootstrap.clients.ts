export default defineNuxtPlugin(async () => {
  if (process.client) {
    await import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
});
