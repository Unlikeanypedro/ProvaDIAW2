import { useState } from "react";
import { listarForaDaRoca } from "../services/votacaoService";
import { listarNaRoca } from "../services/votacaoService";
import { registrarVoto } from "../services/votacaoService";

function ParticipanteCard({ participante, onVotar }) {
    const { nome, foto, naRoca } = participante;

    const [ultimoVoto, setUltimoVoto] = useState(null);
    const [votoSessao, setVotoSessao] = useState(0);

    return (
        <article className={naRoca ? "card card-roca" : "card"}>
            {naRoca && <span className="selo-roca">Na Roca</span>}

            <img src={foto} alt={nome} className="card-foto" />

            <span>`${ultimoVoto}`</span>
            <span>`${votoSessao}`</span>

            <button type="button" onClick={setUltimoVoto(participante)}>
                voto ultimo
            </button>
            <button type="button" onClick={setVotoSessao(participante)}>
                voto sessao
            </button>

            {onVotar && (
                <button type="button" onClick={() => onVotar(participante)}>
                    Votar para elimininar
                </button>
            )}
        </article>
    );
}

export default ParticipanteCard;
