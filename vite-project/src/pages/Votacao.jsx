import ParticipanteCard from "../components/ParticipanteCard";
import participantes from "../data/participantes";

function Votacao() {
    function handleVotar(participante) {
        registrarVoto(participante.id);
        setUltimoVoto(participante);
    }

    return (
        <>
            {participantes.map((p) => (
                <ParticipanteCard
                    key={p.id}
                    participante={p}
                    onVotar={handleVotar()}
                />
            ))}
        </>
    );
}

export default Votacao();
