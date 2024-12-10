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

function hashContent(content) {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString(16);
}

document.getElementById("shieldForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Recupero valori dal form
  const label = document.getElementById("label").value || "Label";
  const message = document.getElementById("message").value || "Message";
  const labelColor = document.getElementById("labelColor").value || "#555";
  const messageColor = document.getElementById("messageColor").value || "#4c1";

  // Generazione SVG dinamico
  const svg = generateShield(label, message, labelColor, messageColor);

  // Aggiorno anteprima
  document.getElementById("shieldPreview").innerHTML = svg;

  // Generazione URL
  const fileName = `shields/shield-${label}-${message}.svg`;
  const fullUrl = `https://shieldtest.vercel.app/${fileName}`;

  // Mostro il link nel README
  const markdownLink = `![Shield](${fullUrl})`;
  document.getElementById("shieldLink").textContent = markdownLink;
  document.getElementById("shieldLink").href = fullUrl;

  console.log(`Generated link: ${fullUrl}`);
});
  console.log("Download the file and upload it to /shields/");
});
