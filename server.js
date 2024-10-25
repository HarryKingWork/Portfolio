const https = require('https');
const fs = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Use relative paths for your SSL certificates
  const options = {
    key: fs.readFileSync('./certification/private.key'),
    cert: fs.readFileSync('./certification/certificate.crt'),
    ca: fs.readFileSync('./certification/ca_bundle.crt') // Optional
  };

  const server = https.createServer(options, (req, res) => {
    handle(req, res);
  });

  server.listen(443, (err) => {
    if (err) {
		console.error('Server error:', err);
		throw err;
	}
    console.log('HTTPS Server running on https://localhost');
  });
});
