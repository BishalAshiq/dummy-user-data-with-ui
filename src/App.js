import { Routes, Route } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Contacts from "./Pages/Home/Contacts/Contacts";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
