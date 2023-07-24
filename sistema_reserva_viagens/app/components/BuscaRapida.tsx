import React from 'react'
import Image from 'next/image'
const BuscaRapida = () => {
  return (
      <div className='container mx-auto p-5'>
          <div className='flex items-center'>
              <div className='w-full h-{2px} bg-cinzaClaro'></div>
              <h2 className='px-5 font-medium text-cinzaPrimario whitespace-nowrap'>Tente pesquisar por</h2>
              <div className='w-full h-{2px} bg-cinzaClaro'></div>
          </div>
          <div className='flex w-full justify-between mt-4'>
              <div className='flex flex-col items-center gap-1'>
                  <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
                  <p className='text-sm text-cinzaPrimario'>Hotel</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                  <Image width={35} height={35} src="/farm-icon.png" alt="Hotel" />
                  <p className='text-sm text-cinzaPrimario'>Fazenda</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                  <Image width={35} height={35} src="/cottage-icon.png" alt="Hotel" />
                  <p className='text-sm text-cinzaPrimario'>Chalé</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                  <Image width={35} height={35} src="/inn-icon.png" alt="Hotel" />
                  <p className='text-sm text-cinzaPrimario'>Pousada</p>
              </div>
          </div>
      </div>
  )
}

export default BuscaRapida