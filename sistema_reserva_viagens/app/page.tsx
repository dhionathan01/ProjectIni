"use client";
import BuscaRapida from "./components/BuscaRapida";
import PesquisaReserva from "./components/PesquisaReserva";
export default function Home() {
  return (
    <div>
      <PesquisaReserva />
      <BuscaRapida/>
    </div>
  );
}
