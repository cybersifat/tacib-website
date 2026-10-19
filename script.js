const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyEmail");
copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = "Email address copied: " + email;
  } catch {
    status.textContent = "Email address: " + email + " (select and copy it)";
  }
});
