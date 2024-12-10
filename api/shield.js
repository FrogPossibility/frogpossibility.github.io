export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con il testo senza ombre
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="150">
      <!-- Testo principale in un nuovo font senza ombre -->
      <text x="25" y="90" fill="#ffffff" font-family="Verdana" font-size="50" font-weight="bold" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
