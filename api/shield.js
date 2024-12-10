export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un effetto di testo 3D con facce
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feFlood flood-color="rgba(0, 0, 0, 0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Faccia frontale -->
      <text x="50" y="100" fill="#ffffff" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia laterale sinistra -->
      <text x="45" y="100" fill="rgba(0, 0, 0, 0.5)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia laterale destra -->
      <text x="55" y="100" fill="rgba(0, 0, 0, 0.3)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Faccia superiore -->
      <text x="50" y="90" fill="rgba(255, 255, 255, 0.7)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start">${text}</text>

      <!-- Ombra -->
      <text x="50" y="100" fill="rgba(0, 0, 0, 0.2)" font-family="Arial" font-size="50" font-weight="bold" text-anchor="start" filter="url(#f1)">${text}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
