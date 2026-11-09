/* =========================================================
   Página do Nocturne: mostra a URL do tema num campo e copia
   essa URL para a área de transferência ao clicar no botão.

   Usa translate() e currentLanguage de script.js, que é
   carregado antes deste arquivo.
   ========================================================= */

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
    } catch {
      // Sem permissão para a área de transferência: tenta o plano B abaixo.
    }

    if (!copied) {
      // Plano B para navegadores sem Clipboard API: seleciona o campo
      // (a pessoa ainda pode copiar à mão) e tenta o comando antigo.
      field.focus();
      field.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
    }

    // Guardar a chave em data-i18n faz a mensagem acompanhar uma
    // troca de idioma feita depois do clique.
    status.dataset.i18n = copied ? "nocturne.copied" : "nocturne.copyFailed";
    status.textContent = translate(currentLanguage, status.dataset.i18n);
  });
})();
