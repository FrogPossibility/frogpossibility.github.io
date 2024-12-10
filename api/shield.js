export default function handler(req, res) {
  const { label = "Label", message = "Message" } = req.query;

  // Crea un SVG con un effetto 3D usando il testo e le ombre
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="100">
      <!-- Ombre per effetto 3D -->
      <text x="10" y="40" fill="rgba(0, 0, 0, 0.2)" font-family="Arial" font-size="30" text-anchor="start" transform="translate(2, 2)"> ${label} </text>
      <text x="10" y="70" fill="rgba(0, 0, 0, 0.2)" font-family="Arial" font-size="30" text-anchor="start" transform="translate(2, 2)"> ${message} </text>
      
      <!-- Testo principale -->
      <text x="10" y="40" fill="#000000" font-family="Arial" font-size="30" text-anchor="start">${label}</text>
      <text x="10" y="70" fill="#000000" font-family="Arial" font-size="30" text-anchor="start">${message}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
