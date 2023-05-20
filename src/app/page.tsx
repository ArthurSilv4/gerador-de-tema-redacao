'use client';

import { useState } from 'react';
import { BoxAds } from './components/boxAds'

export default function Home(){

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
    <main className="m-4 py-4 md:m-8 md:py-8">

       <div className="bg-cyan-700 max-w-[600px] m-auto p-2 rounded-lg flex flex-col drop-shadow-lg border-double border-2 border-cyan-900 md:p-4">
        
          <div className="m-auto">
            <h1 className="bg-cyan-900 p-2 rounded-lg text-center text-2xl font-extrabold drop-shadow-2xl md:text-4xl md:p-4">
              Gerador de tema de redação
            </h1>
          </div>

          <div className='m-auto my-36'>
            <p className='bg-blue-950 p-4 rounded-3xl text-xs font-semibold drop-shadow-sm border-solid border-2 border-cyan-900 md:p-8 md:text-lg'>
              {temaAleatorio}
            </p>
          </div>

          <div className='m-auto pb-4 w-5/6 '>
            <button className='bg-green-700 hover:bg-green-600 p-2 rounded-xl font-extrabold w-full md:p-4 md:text-3xl'
              onClick={escolherTemaAleatorio}
            >
              GERAR TEMA ALEATÓRIO
            </button>
          </div>
      
      </div>

      <BoxAds />
      <BoxAds /> 
    </main>
  )
}
