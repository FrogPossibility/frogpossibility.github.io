export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Creazione dell'SVG con l'effetto 3D per ogni lettera
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="150">
      <!-- Creazione dell'effetto 3D per ogni lettera -->
      ${Array.from(text).map((letter, index) => {
        const xOffset = index * 50; // Spostamento orizzontale per ogni lettera
        const depth = 10; // Profondità della lettera lungo l'asse Z

        // Le lettere principali
        const letterFront = `<text x="${xOffset}" y="50" fill="#ffffff" font-family="Arial" font-size="40" font-weight="bold" text-anchor="start">${letter}</text>`;

        // Le facce laterali (simulazione dell'effetto cubo)
        const letterSide1 = `<text x="${xOffset + depth}" y="50" fill="#cccccc" font-family="Arial" font-size="40" font-weight="bold" text-anchor="start">${letter}</text>`;
        const letterSide2 = `<text x="${xOffset + depth}" y="60" fill="#aaaaaa" font-family="Arial" font-size="40" font-weight="bold" text-anchor="start">${letter}</text>`;

        // Aggiungi linee per simulare i bordi del cubo
        const sideLine1 = `<line x1="${xOffset}" y1="50" x2="${xOffset + depth}" y2="50" stroke="#888888" stroke-width="2"/>`;
        const sideLine2 = `<line x1="${xOffset}" y1="50" x2="${xOffset + depth}" y2="60" stroke="#888888" stroke-width="2"/>`;

        return `
          <!-- Testo frontale -->
          ${letterFront}

          <!-- Testo laterale per l'effetto cubo -->
          ${letterSide1}
          ${letterSide2}

          <!-- Linee per i bordi laterali -->
          ${sideLine1}
          ${sideLine2}
        `;
      }).join('')}
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
