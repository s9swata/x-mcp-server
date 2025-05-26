import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "x-mcp-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);


async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("X.com MCP Server running on stdio");
}


runServer().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});

