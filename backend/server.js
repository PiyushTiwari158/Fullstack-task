const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Set();
let interval = null;

wss.on("connection", (ws) => {
  console.log("Client connected");
  clients.add(ws);

  ws.on("message", (message) => {
    if (message === "Start") {
      console.log("Starting animation...");
      startAnimation();
    } else if (message === "Stop") {
      console.log("Stopping animation...");
      stopAnimation();
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
    if (clients.size === 0) stopAnimation();
  });
});

function startAnimation() {
  if (!interval) {
    interval = setInterval(() => {
      const frameData = {
        x: Math.random() * 848,
        y: Math.random() * 224,
        size: Math.random() * 20 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      };
      broadcast(frameData);
    }, 16);
  }
}

function stopAnimation() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function broadcast(data) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

console.log("WebSocket server running on ws://localhost:8080");
