// Keep this in sync with the 812px breakpoint in Css/Header-Footer.css
const DESKTOP_QUERY = "(min-width: 812px)";

/* ---------- Mobile navigation ---------- */
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");

if (nav && navToggle) {
  const isExpanded = () => nav.classList.contains("nav--expanded");

  const setExpanded = (expanded) => {
    nav.classList.toggle("nav--expanded", expanded);
    navToggle.setAttribute("aria-expanded", String(expanded));
    navToggle.setAttribute(
      "aria-label",
      expanded ? "Close navigation menu" : "Open navigation menu",
    );
  };

  navToggle.addEventListener("click", () => setExpanded(!isExpanded()));

  // Escape closes the menu and returns focus to the button
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isExpanded()) {
      setExpanded(false);
      navToggle.focus();
    }
  });

  // Moving to the desktop layout resets the mobile menu state
  window.matchMedia(DESKTOP_QUERY).addEventListener("change", (event) => {
    if (event.matches) setExpanded(false);
  });
}

/* ---------- Footer year ---------- */
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
