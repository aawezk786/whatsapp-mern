import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Lets build a MERN Whatsapp clone</h1>

      <Sidebar />
     <Chat/>
    </div>
  );
}

export default App;
