/**
 * Sample HTTP server for accept fetched canto data
 * [!] Use it only for debugging purposes
 *
 * How to use [requires Node.js 10.0.0+ and npm install]:
 *
 * 1. $ node dev/server.js
 * 2. set 'endpoint' at the Canto Tools 'config' in example.html
 *   endpoint : 'http://localhost:8008/canto_url'
 *
 */
const http = require('http');

class ServerExample {
  constructor({ port, fieldName }) {
    this.fieldName = fieldName;
    this.server = http.createServer((req, res) => {
      this.onRequest(req, res);
    }).listen(port);

    this.server.on('listening', () => {
      console.log('Server is listening ' + port + '...');
    });

    this.server.on('error', (error) => {
      console.log('Failed to run server', error);
    });
  }

  /**
   * Request handler
   * @param {http.IncomingMessage} req
   * @param {http.ServerResponse} res
   */
  onRequest(req, res) {
    this.allowCors(res);

    const { method } = req;

    if (method.toLowerCase() !== 'get') {
      res.end();

      return;
    }

    const cantoImage = {
      title: 'image.png',
      alt: 'Glass sightseeing platform with people standing, or laying on the platform. Trees and cliffs below.',
      caption: 'This photo taken on April 30, 2016 shows a glass sightseeing platform in Shilinxia scenic spot in Pinggu District of Beijing. .The sightseeing platform, which hangs 32.8 meters out from the cliff, is claimed to be the largest glass sightseeing platform in the world.',
      src: 'https://lonelyplanet.canto.com/direct/image/btih68nubd46nd894oojsbj27a/ZVKerfSLxZAwrnzUszzS7X7OD-I/m800/800',
    };

    res.end(JSON.stringify({
      success: 1,
      meta: cantoImage,
    }));
  }

  /**
   * Allows CORS requests for debugging
   * @param response
   */
  allowCors(response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  }
}

new ServerExample({
  port: 8008,
  fieldName: 'content_id'
});
