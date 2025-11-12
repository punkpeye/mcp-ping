# MCP Ping

Pings a host and returns the result.

> [!NOTE]
> This MCP server was made predominantly to [demonstrate](https://github.com/punkpeye/mcp-ping/blob/main/src/createServer.ts) how to use [FastMCP](https://github.com/punkpeye/fastmcp).

<a href="https://glama.ai/mcp/servers/@punkpeye/mcp-ping">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@punkpeye/mcp-ping/badge" alt="mcp-ping MCP server" />
</a>

## Usage

```bash
mcp-ping
```

## Configuration

Server supports the following environment variables:

|Name|Description|
|---|---|
|HTTP_PROXY|URL of HTTP proxy to use (optional)|

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
        "title": "Ping"
      },
      "description": "Pings a host and returns the result",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "host": {
            "description": "The hostname or URL to ping (e.g., 'google.com' or 'https://google.com')",
            "type": "string"
          }
        },
        "required": ["host"],
        "type": "object"
      },
      "name": "ping"
    }
  ]
}
```

## Tools

### `ping` tool example response

```bash
Ping results for glama.ai:

PING glama.ai (37.16.29.120): 56 data bytes
64 bytes from 37.16.29.120: icmp_seq=0 ttl=55 time=11.273 ms
64 bytes from 37.16.29.120: icmp_seq=1 ttl=55 time=11.353 ms
64 bytes from 37.16.29.120: icmp_seq=2 ttl=55 time=11.455 ms
64 bytes from 37.16.29.120: icmp_seq=3 ttl=55 time=12.634 ms

--- glama.ai ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 11.273/11.679/12.634/0.555 ms
```

## Testing

```bash
npm run test
```
