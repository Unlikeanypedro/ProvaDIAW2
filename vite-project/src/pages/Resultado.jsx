import { useState } from "react";
import {
    calcularResultado,
    calcularTotalVotos,
    obterVotos,
    zerarVotos,
} from "../services/votacaoService";

function Resultado() {
    const [count, setCount] = useState(0);
    const [votos, setVotos] = useState(() => obterVotos());

    const total = calcularTotalVotos(votos);
    const resultado = calcularResultado(votos);

    function handleZerar() {
        if (window.confirm("Apagar Todos os votos?")) zerarVotos();
        setVotos({});
    }

    return (
        <div className="barra">
            <div
                className="barra-preenchida"
                style={{ width: `${p.percentual}%` }}
            />
            <span> votos: `${total}`</span>
            <span> votos: `${resultado}`</span>

            <button onClick={handleZerar}></button>
        </div>
    );
}

export default Resultado;
