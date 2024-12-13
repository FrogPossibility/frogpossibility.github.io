export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un design di lettering pulito
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <!-- Testo principale -->
      <text x="10" y="40" fill="#4A90E2" font-family="Arial" font-size="40" font-weight="bold" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
