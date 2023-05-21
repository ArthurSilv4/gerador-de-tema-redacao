'use client';

import { useState } from 'react';
import { BoxAds } from './components/boxAds'

export default function Home() {

  const temas = [
    'Pandemia',
    'Racismo e Discriminação Social',
    'Racismo e Discriminação Social',
    'Preconceito Linguístico',
  ];
  const [temaAleatorio, setemaAleatorio] = useState('');

  const escolherTemaAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * temas.length);
    const temaSelecionado = temas[indiceAleatorio];
    setemaAleatorio(temaSelecionado);
  };


  return (
    <main className="m-4 h-full">
      <div className='flex justify-center h-full'>

        <div className="bg-slate-800 m-auto max-w-[600px] p-4 rounded-2xl drop-shadow-lg md:p-8">

          <div className="">
            <h1 className="text-3xl text-center md:text-6xl">
              Gerador de tema de redação
            </h1>
          </div>

          <div className='py-32 md:py-64'>
            <div className='bg-white p-1 rounded-md md:p-2'>
              <p className=' text-zinc-500 text-base text-center md:text-2xl'>
                {temaAleatorio}
              </p>
            </div>
          </div>


          <div className=' bg-button p-2 rounded-xl hover:bg-buttonHover md:p-4'>
            <button className='text-blackk h-full w-full text-xl text-center md:text-3xl'
              onClick={escolherTemaAleatorio}
            >
              GERAR TEMA ALEATÓRIO
            </button>
          </div>

        </div>

      </div>

      <div className='mb-8'>
        <div className='pt-2'>
          <BoxAds />
        </div>
        <div className='pt-4'>
          <BoxAds />
        </div>


      </div>
    </main>
  )
}
