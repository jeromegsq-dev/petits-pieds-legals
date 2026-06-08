// Highlight active nav link based on current path.
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("header.site nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// Auto-fill current year in footer (data-year span).
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Back-to-top button: visible after scrolling past 400px.
const backBtn = document.getElementById("back-to-top");
if (backBtn) {
  const toggle = () => {
    if (window.scrollY > 400) backBtn.classList.add("visible");
    else backBtn.classList.remove("visible");
  };
  window.addEventListener("scroll", toggle, { passive: true });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
