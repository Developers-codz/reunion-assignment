import './App.css';
import { Navbar } from './components';
import {Routes,Route} from "react-router-dom"
import { Home,Favorite } from './features';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/favorites" element={<Favorite />} />
     </Routes>
    </div>
  );
}

export default App;
