export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un effetto 3D per il testo bianco
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="100">
      <!-- Ombra per effetto 3D -->
      <text x="10" y="50" fill="rgba(0, 0, 0, 0.3)" font-family="Arial" font-size="40" text-anchor="start" transform="translate(3, 3)"> ${text} </text>
      
      <!-- Testo principale in bianco -->
      <text x="10" y="50" fill="#ffffff" font-family="Arial" font-size="40" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
