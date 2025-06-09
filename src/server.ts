import { createServer } from "./createServer.js";

const server = createServer();

server.start({
  transportType: "stdio",
});
