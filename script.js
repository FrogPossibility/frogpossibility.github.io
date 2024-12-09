function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    label: params.get("label") || "Label",
    message: params.get("message") || "Message",
    labelColor: params.get("labelColor") || "#555",
    messageColor: params.get("messageColor") || "#4c1",
  };
}

function generateShield(label, message, labelColor, messageColor) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30">
      <rect width="75" height="30" fill="${labelColor}" />
      <rect x="75" width="75" height="30" fill="${messageColor}" />
      <text x="37.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${label}</text>
      <text x="112.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${message}</text>
    </svg>
  `;
}

function updateShield() {
  const { label, message, labelColor, messageColor } = getQueryParams();
  const svg = generateShield(label, message, labelColor, messageColor);

  // Mostra lo shield
  document.getElementById("shieldPreview").innerHTML = svg;

  // Crea il link diretto
  const link = `${window.location.origin}${window.location.pathname}?label=${encodeURIComponent(label)}&message=${encodeURIComponent(message)}&labelColor=${encodeURIComponent(labelColor)}&messageColor=${encodeURIComponent(messageColor)}`;
  const linkElement = document.getElementById("shieldLink");
  linkElement.textContent = link;
  linkElement.href = link;
}

// Esegui al caricamento della pagina
updateShield();
