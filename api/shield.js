export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un effetto di testo 3D, con il testo "spostato" per simulare la profondità
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="80">
      <!-- Testo con effetti 3D: più versioni del testo spostate su piani Z diversi -->
      
      <!-- Testo sul piano più lontano (profondità maggiore) -->
      <text x="10" y="30" fill="rgba(0, 0, 0, 0.4)" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Testo più vicino, spostato su un piano Z meno profondo -->
      <text x="15" y="35" fill="rgba(0, 0, 0, 0.6)" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Testo ancora più vicino -->
      <text x="20" y="40" fill="rgba(0, 0, 0, 0.8)" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Testo principale in bianco (in primo piano) -->
      <text x="25" y="45" fill="#ffffff" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
