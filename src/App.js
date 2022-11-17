import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Characters from './components/Characters/Characters';

function App() {
    return (
        <>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personajes" element={<Characters />} />
            </Routes>
        </div>
        </>
    );
};

export default App;