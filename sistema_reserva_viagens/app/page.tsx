"use client";
import BuscaRapida from "./components/BuscaRapida";
import PesquisaReserva from "./components/PesquisaReserva";
import ViagensRecomendadas from "./components/ViagensRecomendadas";
export default function Home() {
  return (
    <div>
      <PesquisaReserva />
      <BuscaRapida />
      <ViagensRecomendadas/>
    </div>
  );
}
