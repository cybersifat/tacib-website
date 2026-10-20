(() => {
  const cfg = window.TACIB_CONFIG || {};
  const email = cfg.contactEmail || "tacib.info@gmail.com";
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false");
  }));
  document.querySelectorAll("[data-contact-email-text]").forEach(el => el.textContent = email);
  document.querySelectorAll("[data-contact-email]").forEach(el => {
    el.href = `mailto:${email}`;
  });
  const year = document.getElementById("year"); if (year) year.textContent = new Date().getFullYear();
  const copy = document.getElementById("copyEmail");
  copy?.addEventListener("click", async () => {
    const label = copy.textContent;
    try { await navigator.clipboard.writeText(email); copy.textContent = "Copied"; }
    catch { copy.textContent = email; }
    setTimeout(() => { copy.textContent = label; }, 2200);
  });
  const form = document.getElementById("inquiryForm");
  if (form) {
    const queryService = new URLSearchParams(window.location.search).get("service");
    const serviceMap = {
      "security-review": "Website security review",
      "disclosure": "Other question",
      "collaboration": "Collaboration or opportunities"
    };
    const select = document.getElementById("kind");
    if (queryService && select && serviceMap[queryService]) select.value = serviceMap[queryService];
  }
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `[TACIB Inquiry] ${data.get("kind")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Reply-to email: ${data.get("replyEmail")}`,
      `Inquiry type: ${data.get("kind")}`,
      `Asset/domain (if supplied): ${data.get("asset") || "Not supplied"}`,
      "",
      "Message:",
      data.get("message"),
      "",
      "I confirm that I have not included passwords, verification codes, private keys, intimate images, or other sensitive secrets."
    ].join("\n");
    const status = document.getElementById("formStatus");
    status.textContent = "Opening your email application. Review the draft and press Send there; this website does not submit it.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  const search = document.getElementById("resourceSearch");
  const cards = [...document.querySelectorAll("#articleGrid [data-search]")];
  if (search && cards.length) {
    const count = document.getElementById("resultCount");
    const empty = document.getElementById("emptyState");
    const filter = () => {
      const q = search.value.trim().toLowerCase(); let visible = 0;
      cards.forEach(card => { const match = (card.dataset.search + " " + card.textContent).toLowerCase().includes(q); card.hidden = !match; if(match) visible++; });
      if (count) count.textContent = `${visible} GUIDE${visible===1?"":"S"}`;
      if (empty) empty.style.display = visible ? "none" : "block";
    };
    search.addEventListener("input", filter); filter();
  }
})();
