export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con il testo in bianco e il font Poppins
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <!-- Testo principale con font Poppins -->
      <text x="10" y="40" fill="#FFFFFF" font-family="'Poppins', sans-serif" font-size="40" font-weight="600" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
