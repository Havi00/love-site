/* Page fade‑in once splash has gone */
document.body.style.opacity = 0;
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 1;
  }, 2000); // matches the intro splash delay
});
