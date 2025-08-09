document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");

  // Optional: Check if the iframe content is reachable
  fetch(iframe.src, { method: "HEAD" })
    .then(response => {
      if (!response.ok) throw new Error("Server not reachable");
    })
    .catch(() => {
      iframe.remove(); // Remove the iframe if it fails
      const errorDiv = document.createElement("div");
      errorDiv.style.padding = "20px";
      errorDiv.style.textAlign = "center";
      errorDiv.textContent = "⚠ Unable to load ZenBug widget. Please start your app.";
      document.body.appendChild(errorDiv);
    });
});
