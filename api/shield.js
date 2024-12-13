export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Funzione che crea l'effetto cubico per ogni lettera
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="150">
      <!-- Creazione dell'effetto cubico per ogni lettera -->
      ${Array.from(text).map((letter, index) => {
        const xOffset = index * 60; // Spostamento orizzontale per ogni lettera
        const depth = 15; // Profondità della lettera (lato z)

        // La posizione dei vertici per simulare un cubo
        const topLeft = { x: xOffset, y: 50 }; // Angolo superiore sinistro
        const topRight = { x: xOffset + 30, y: 50 }; // Angolo superiore destro
        const bottomLeft = { x: xOffset, y: 80 }; // Angolo inferiore sinistro
        const bottomRight = { x: xOffset + 30, y: 80 }; // Angolo inferiore destro

        // Lato Z (profondità)
        const topLeftZ = { x: xOffset + depth, y: 40 }; // Angolo in profondità superiore sinistro
        const topRightZ = { x: xOffset + 30 + depth, y: 40 }; // Angolo in profondità superiore destro
        const bottomLeftZ = { x: xOffset + depth, y: 70 }; // Angolo in profondità inferiore sinistro
        const bottomRightZ = { x: xOffset + 30 + depth, y: 70 }; // Angolo in profondità inferiore destro

        // Disegnare le facce del cubo con linee per i lati
        return `
          <!-- Corpo principale della lettera (parte frontale) -->
          <text x="${topLeft.x}" y="${topLeft.y + 10}" fill="#ffffff" font-family="Arial" font-size="40" font-weight="bold" text-anchor="start">${letter}</text>
          
          <!-- Lato laterale sinistro -->
          <polygon points="${topLeft.x},${topLeft.y} ${topLeftZ.x},${topLeftZ.y} ${bottomLeftZ.x},${bottomLeftZ.y} ${bottomLeft.x},${bottomLeft.y}" fill="#cccccc"/>
          
          <!-- Lato laterale destro -->
          <polygon points="${topRight.x},${topRight.y} ${topRightZ.x},${topRightZ.y} ${bottomRightZ.x},${bottomRightZ.y} ${bottomRight.x},${bottomRight.y}" fill="#aaaaaa"/>
          
          <!-- Linee di connessione per formare l'effetto cubo -->
          <line x1="${topLeft.x}" y1="${topLeft.y}" x2="${topLeftZ.x}" y2="${topLeftZ.y}" stroke="#888888" stroke-width="2"/>
          <line x1="${topRight.x}" y1="${topRight.y}" x2="${topRightZ.x}" y2="${topRightZ.y}" stroke="#888888" stroke-width="2"/>
          <line x1="${bottomLeft.x}" y1="${bottomLeft.y}" x2="${bottomLeftZ.x}" y2="${bottomLeftZ.y}" stroke="#888888" stroke-width="2"/>
          <line x1="${bottomRight.x}" y1="${bottomRight.y}" x2="${bottomRightZ.x}" y2="${bottomRightZ.y}" stroke="#888888" stroke-width="2"/>
          
          <!-- Linee di collegamento per i lati in profondità -->
          <line x1="${topLeftZ.x}" y1="${topLeftZ.y}" x2="${topRightZ.x}" y2="${topRightZ.y}" stroke="#888888" stroke-width="2"/>
          <line x1="${bottomLeftZ.x}" y1="${bottomLeftZ.y}" x2="${bottomRightZ.x}" y2="${bottomRightZ.y}" stroke="#888888" stroke-width="2"/>
        `;
      }).join('')}
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
