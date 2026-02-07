(() => {
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("data-open", open ? "true" : "false");
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // fecha ao clicar em um link
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  // fecha com ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();

