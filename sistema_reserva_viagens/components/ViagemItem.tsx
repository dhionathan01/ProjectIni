import { Viagem } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
interface ViagemItemProps {
    viagem: Viagem
}
const ViagemItem = ({ viagem }: ViagemItemProps) => {
    return (
        <div className='flex flex-col'>
            <div className="relative h-{280px} w-{280px}">
                
            </div>
            <Image src={viagem.fotoCapa} width={280} height={280} className="rounded-lg shadow-md" alt={viagem.descricao} />
            <h3 className='text-primariaEscura font-medium text-sm mt-2'>{viagem.nome}</h3>
            <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode={viagem.countryCode} svg />
                <p className='text-xs text-primaria'>{viagem.localizacao}</p>
            </div>
                <p className='text-xs text-grayPrimary'>
                    <span className='text-primaria font-medium'>R${viagem.precoPorDia.toString()}</span> por dia
                </p>
        </div>
    )
}

export default ViagemItem