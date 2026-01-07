export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Use GET method with ?type=latest' });
  }
  
  if (req.query.type !== 'latest') {
    return res.status(400).json({ error: 'Add ?type=latest to URL' });
  }
  
  res.json({
    version: 15,
    name: "Triade OS",
    description: "<описание потом вставлю>",
    url: "https://raw.githubusercontent.com/yourusername/yourrepo/main/path/to/file"
  });
}