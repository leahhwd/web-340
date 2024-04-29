//Author: Leah Harris
//Date: 04/27/24

const http = require('http');
const url = require('url');

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true); //parse url and query parameters
  const pathName = parsedUrl.pathname; //retrieve the path name
  const query = parsedUrl.query; //retrieve the query parameters
  //route for creating a character with POST
  if (pathName === '/createcharacter' && req.method === 'POST') {
    res.writeHead(201);
    res.end('Creating character');
    //route for confirming character with POST
  } else if (pathName === '/confirmcharacter' && req.method === 'POST') {
    res.writeHead(200);
    res.end('Character created');
    //route for viewing character with GET
  } else if (pathName === '/viewcharacter' && req.method === 'GET') {
    //access query parameters
    const character = query.character;
    res.statusCode = 200;
    //set content type value
    res.setHeader("Content-Type", "application/json");
    //JSON object convereted to string
    res.end(JSON.stringify(character));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;