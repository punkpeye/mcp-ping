import { exec } from "child_process";
import { FastMCP } from "fastmcp";
import { promisify } from "util";
import { z } from "zod";

const execAsync = promisify(exec);

export const createServer = () => {
  const server = new FastMCP({
    name: "Ping Tool",
    version: "1.0.0",
  });

  server.addTool({
    annotations: {
      openWorldHint: false,
      readOnlyHint: true,
      title: "Ping",
    },
    description: "Pings a host and returns the result",
    execute: async (args) => {
      try {
        // Extract hostname from URL if needed
        let hostname = args.host;

        // If it's a full URL, extract the hostname
        if (hostname.startsWith("http://") || hostname.startsWith("https://")) {
          const url = new URL(hostname);
          hostname = url.hostname;
        }

        // Execute ping command (platform-specific)
        const isWindows = process.platform === "win32";
        const pingCommand = isWindows
          ? `ping -n 4 ${hostname}`
          : `ping -c 4 ${hostname}`;

        const { stderr, stdout } = await execAsync(pingCommand);

        if (stderr) {
          return `Failed to ping ${hostname}:\n${stderr}`;
        }

        return `Ping results for ${hostname}:\n\n${stdout}`;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error occurred";
        return `Failed to ping ${args.host}:\n${errorMessage}`;
      }
    },
    name: "ping",
    parameters: z.object({
      host: z
        .string()
        .describe(
          "The hostname or URL to ping (e.g., 'google.com' or 'https://google.com')",
        ),
    }),
  });

  return server;
};
