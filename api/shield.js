export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Creazione dell'SVG con effetto 3D per ogni lettera
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80">
      <!-- Crea una rappresentazione 3D per ogni lettera del testo -->
      ${Array.from(text).map((letter, index) => {
        // Calcola l'effetto di profondità per ogni lettera
        const xOffset = index * 25; // Spostamento orizzontale per ogni lettera
        const zOffset = 5; // Offset di profondità in "z"
        const shadowOffset = 3; // Distanza per l'effetto ombra
        const depthColor = `rgba(0, 0, 0, ${(index + 1) * 0.1})`; // Colore dell'ombra

        // Testo ombra (3D) per la lettera
        return `
          <!-- Ombra di ogni lettera per simulare la profondità -->
          <text x="${xOffset + shadowOffset}" y="45" fill="${depthColor}" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${letter}</text>
          <text x="${xOffset + shadowOffset}" y="40" fill="${depthColor}" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${letter}</text>

          <!-- Testo principale della lettera -->
          <text x="${xOffset}" y="35" fill="#ffffff" font-family="Arial" font-size="30" font-weight="bold" text-anchor="start">${letter}</text>
        `;
      }).join('')}
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
