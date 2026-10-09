(() => {
  const themeURL = new URL("themes/Nocturne.theme.css", window.location.href).href;
  const field = document.querySelector("[data-theme-url]");
  const button = document.querySelector("[data-copy-theme]");
  const status = document.querySelector("[data-copy-status]");
  field.value = themeURL;
  field.addEventListener("click", () => field.select());
  button.addEventListener("click", async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(themeURL);
        copied = true;
      }
    } catch (_) { /* Use the selectable URL when clipboard access is unavailable. */ }
    if (!copied) {
      field.focus();
      field.select();
      try { copied = document.execCommand("copy"); } catch (_) {}
    }
    status.dataset.i18n = copied ? "nocturne.copied" : "nocturne.copyFailed";
    status.textContent = t(document.documentElement.lang.startsWith("pt") ? "pt" : "en", status.dataset.i18n);
  });
})();
