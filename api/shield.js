export default function handler(req, res) {
  const { text = "Text" } = req.query;

  // Crea un SVG con un design di lettering pulito
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <!-- Testo principale -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
