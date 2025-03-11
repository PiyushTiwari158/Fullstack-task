# 🎨 WebSocket Animation App  

This is a real-time WebSocket-based animation app built with **React (Vite)** on the frontend and **Node.js (ws)** on the backend. The app creates a smooth gradient animation and includes Start/Stop button functionality.

---

## 🚀 **Features**  
✅ Real-time WebSocket connection between client and server  
✅ Smooth gradient animation
✅ Controlled animation using Start and Stop buttons  
✅ Automatic WebSocket reconnection on disconnect  
✅ Clean and responsive UI  

---

## 🛠️ **Tech Stack**  
**Frontend:**  
- React (with Vite)  
- CSS  

**Backend:**  
- Node.js  
- `ws` (WebSocket library)  

How It Works
✅ The frontend sends a "Start" event to the WebSocket server when the Start button is clicked.
✅ The server continuously sends animation data to the frontend.
✅ The frontend uses this data to display the gradient animation.
✅ When Stop is clicked, the server stops sending data and the animation stops.
