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

document.getElementById("shieldForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const label = document.getElementById("label").value || "Label";
  const message = document.getElementById("message").value || "Message";
  const labelColor = document.getElementById("labelColor").value || "#555";
  const messageColor = document.getElementById("messageColor").value || "#4c1";

  const svg = generateShield(label, message, labelColor, messageColor);

  // Update preview
  document.getElementById("shieldPreview").innerHTML = svg;

  // Generate link for embedding
  const encodedSVG = encodeURIComponent(svg);
  const shieldURL = `${window.location.origin}${window.location.pathname}?svg=${encodedSVG}`;
  const markdownLink = `![Shield](${shieldURL})`;
  document.getElementById("shieldLink").textContent = markdownLink;
});
