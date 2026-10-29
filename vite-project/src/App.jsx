import { BrowserRouter, Routes, Route } from "react-router-dom";

import ParticipanteCard from "./components/ParticipanteCard";
import Home from "./pages/Home";
import Votacao from "./pages/Votacao";
import Resultado from "./pages/Resultado";

import Header from "./components/Header";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/votacao" element={<Votacao />} />
                <Route path="/resultado" element={<Resultado />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
