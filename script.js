function generateShield() {
  const label = document.getElementById("label").value || "Label";
  const message = document.getElementById("message").value || "Message";
  const labelColor = document.getElementById("labelColor").value || "#555";
  const messageColor = document.getElementById("messageColor").value || "#4c1";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30">
      <rect width="75" height="30" fill="${labelColor}" />
      <rect x="75" width="75" height="30" fill="${messageColor}" />
      <text x="37.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${label}</text>
      <text x="112.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${message}</text>
    </svg>
  `;

  // Mostra l'SVG nella pagina
  document.getElementById("shieldPreview").innerHTML = svg;
}
