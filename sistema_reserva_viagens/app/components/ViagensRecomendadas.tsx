import ViagemItem from '@/components/ViagemItem';
import { Viagem } from '@prisma/client';
import React from 'react';
const ViagensRecomendadas =  async () => {
    const data = await fetch("http://localhost:3000/locacoes").then((res) => res.json());
    return (
      <div className='container mx-auto -05'>
        <div className='flex items-center'>
            <div className='w-full h-{2px} bg-cinzaClaro'></div>
            <h2 className='px-5 font-medium text-cinzaPrimario whitespace-nowrap'>Tente pesquisar por</h2>
            <div className='w-full h-{2px} bg-cinzaClaro'></div>
        </div>
        <div className="flex flex-col items-center mt-5 gap-5">
            {data.map((viagem : Viagem )=> (
              <ViagemItem key={viagem.id} viagem={viagem} />
            ))}
        </div>
    </div>
  )
}

export default ViagensRecomendadas 