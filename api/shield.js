export default function handler(req, res) {
  const { label = "Label", message = "Message", labelColor = "#555", messageColor = "#4c1" } = req.query;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30">
      <rect width="75" height="30" fill="${labelColor}" />
      <rect x="75" width="75" height="30" fill="${messageColor}" />
      <text x="37.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${label}</text>
      <text x="112.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${message}</text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
