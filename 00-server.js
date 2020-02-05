const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Request :D");
  console.log(request.method);

  if (request.url === "/tuxdinosaur") {
    response.write("Hola, tuxdinosaur");
  }
  if (request.method === "POST") {
    response.write("owo");
  } else {
    response.write("NO.");
  }
  // response.write("uwu");
  response.end();
});

server.listen(8080, () => {
  console.log("Server  is listening in localhost:8080");
});
