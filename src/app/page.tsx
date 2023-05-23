'use client';

import { useState } from 'react';
import { BoxAds } from './components/boxAds'

export default function Home() {

  const temas = [
    'Pandemia',
    'Racismo e Discriminação Social',
    'Desigualdade Social no Brasil',
    'Preconceito Linguístico',
    'Família Contemporânea',
    'Crise Mundial Econômica',
    'Política Brasileira',
    'Pobreza no Brasil',
    'Inclusão e Exclusão Social',
    'Guerra na Ucrânia',
    'Sistema Educacional no Brasil',
    'Sistema Público de Saúde',
    'Aquecimento Global e Efeito Estufa',
    'Orientação e Diversidade Sexual',
    'Homofobia',
    'Expectativa de Vida',
    'Segurança Pública',
    'Transporte Público no Brasil',
    'Violência no Brasil',
    'Mercado de Trabalho',
    'Globalização',
    'Cidadania',
    'Novas Tecnologias',
    'Saúde Mental',
    'Redes Sociais',
    'Inclusão Digital',
    'Maioridade Penal',
    'Movimentos Sociais',
    'Trabalho Infantil',
    'Direitos da Criança e do Adolescente',

    'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil',
    'O estigma associado às doenças mentais na sociedade brasileira',
    'Democratização do acesso ao cinema no Brasil',
    'Manipulação do comportamento do usuário pelo controle de dados na internet',
    'Consequências da busca por padrões de beleza idealizados',
    'Caminhos para combater o racismo no Brasil',
    'Desafios para a formação educacional de surdos no Brasil',
    'Caminhos para combater a intolerância religiosa no Brasil',
    'A persistência da violência contra a mulher na sociedade brasileira',
    'Publicidade infantil em questão no Brasil',
    'Efeitos da implantação da Lei Seca no Brasil',
    'Movimento imigratório para o Brasil no século 21',
    'Viver em rede no século 21: os limites entre o público e o privado',
    'O trabalho na construção da dignidade humana',
    'O indivíduo frente à ética nacional',
    'O indivíduo frente à ética nacional',
    'O indivíduo frente à ética nacional',
    'O trabalho infantil na sociedade brasileira',
    'Como garantir a liberdade de informação e evitar abusos nos meios de comunicação',
    'Como garantir a liberdade de informação e evitar abusos nos meios de comunicação'

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
