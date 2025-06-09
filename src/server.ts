#!/usr/bin/env node

import { createServer } from "./createServer.js";

const server = createServer();

server.start({
  transportType: "stdio",
});
