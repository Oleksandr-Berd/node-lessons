import process from "node:process";
import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data: "Hello world!" }));
});
server.listen(8000);

process.on("SIGINT", (event, code) => {
  console.log(event);
  console.log(code);
  process.exit();
});
process.on("SIGTERM", (event, code) => {
  process.exit();
});
