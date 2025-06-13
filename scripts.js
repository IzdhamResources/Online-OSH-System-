document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("companyForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("statusMsg").textContent = "✅ Saved (demo only)";
    });
  }
});
