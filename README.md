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

Setup and Installation
1️⃣ Clone the repository
cd websocket-animation  
2️⃣ Backend Setup
cd backend
npm install
Install dependencies
node server.js  

3️⃣ Frontend Setup
Navigate to the frontend folder:
cd frontend  
Install dependencies:
npm install  
Start the Vite development server:
npm run dev  
🚦 Usage
Open http://localhost:5173
Click Start to trigger the animation
Click Stop to stop the animation
