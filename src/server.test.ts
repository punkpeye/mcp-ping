import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import getPort from "get-port";
import { expect, it } from "vitest";

import { createServer } from "./createServer.js";

it("should ping a host", async () => {
  const server = createServer();

  const port = await getPort();

  await server.start({
    httpStream: {
      port,
    },
    transportType: "httpStream",
  });

  const transport = new StreamableHTTPClientTransport(
    new URL(`http://localhost:${port}/mcp`),
  );

  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    },
  );

  await client.connect(transport);

  const result = await client.callTool({
    arguments: {
      host: "google.com",
    },
    name: "ping",
  });

  if (!Array.isArray(result.content)) {
    throw new Error("Result is not an array");
  }

  if (result.content[0].type !== "text") {
    throw new Error("Expected text content");
  }

  expect(result.content[0].text).toContain("PING google.com");
});
