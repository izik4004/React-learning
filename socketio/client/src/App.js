import {useEffect} from "react";
import './App.css';
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001");


function App() {

  const sendMessage = () => {
    socket.emit("send_message", {message: "Hello"})
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
        alert(data.message);
    });
  }, [socket])

  return (
    <div className="App">
      <input placeholder='Message......'/>
      <button>Send Message</button>
    </div>
  );
}

export default App;
