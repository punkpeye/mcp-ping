# MCP Ping

Pings a host and returns the result.

> [!NOTE]
> This MCP server was made predominantly to [demonstrate](https://github.com/punkpeye/mcp-ping/blob/main/src/createServer.ts) how to use [FastMCP](https://github.com/punkpeye/fastmcp).

## Usage

```bash
mcp-ping
```

## MCP Server Profile

```json
{
  "prompts": [],
  "resources": [],
  "tools": [
    {
      "annotations": {
        "openWorldHint": false,
        "readOnlyHint": true,
        "title": "Ping",
      },
      "description": "Pings a host and returns the result",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "host": {
            "description": "The hostname or URL to ping (e.g., 'google.com' or 'https://google.com')",
            "type": "string",
          },
        },
        "required": [
          "host",
        ],
        "type": "object",
      },
      "name": "ping",
    },
  ],
}
```

## Testing

```bash
npm run test
```