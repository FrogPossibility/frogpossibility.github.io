export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un effetto di testo 3D con facce
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="150">
      <!-- Faccia frontale -->
      <text x="25" y="90" fill="#ffffff" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia laterale sinistra -->
      <text x="20" y="90" fill="rgba(0, 0, 0, 0.6)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia laterale destra -->
      <text x="30" y="90" fill="rgba(0, 0, 0, 0.4)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia superiore -->
      <text x="25" y="80" fill="rgba(255, 255, 255, 0.8)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
