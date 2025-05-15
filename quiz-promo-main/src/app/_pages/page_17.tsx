'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_17Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_17 = ({ nextPage }: Page_17Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-normal p-10 text-center">
        Com base em suas respostas, identifiquei grande potencial em{' '}
        <HighlightTitle>reverter esses padrões</HighlightTitle> em até{' '}
        <HighlightTitle className="font-bold">30 dias</HighlightTitle>
        ...
      </h1>
      <div className="w-full flex justify-center items-center gap-2 mb-4 h-[400px]">
        <div className="h-full flex flex-col items-center justify-start border border-gray-600 rounded-xl w-[33%] p-6 gap-2">
          <span className="font-bold">24%</span>
          <span className="h-[150px] w-[40px] bg-gray-900 rounded-xl z-index-0 flex flex-col justify-end">
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: '24%' }}
              transition={{ duration: 1 }}
              className="w-[40px] bg-red-500 z-index-100 rounded-xl"
            ></motion.span>
          </span>
          <p className="font-bold">Hoje</p>
          <p className="text-center">
            Aprender o método é dar início à sua nova jornada no amor
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-start border border-gray-600 rounded-xl w-[33%] p-6 gap-2">
          <span className="font-bold">24%</span>
          <span className="h-[135px] w-[40] bg-gray-900 rounded-xl z-index-0 flex flex-col justify-end">
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: '50%' }}
              transition={{ duration: 1 }}
              className="w-[40] bg-orange-500 z-index-100 rounded-xl"
            ></motion.span>
          </span>
          <p className="font-bold">15 dias</p>
          <p className="text-center">
            Aprendeu os códigos secretos e está aplicando.
          </p>
        </div>
        <div className="h-full flex flex-col items-center justify-start border border-gray-600 rounded-xl w-[33%] p-6 gap-2">
          <span className="font-bold">97%</span>
          <span className="h-[150px] w-[40] bg-gray-900 rounded-xl z-index-0 flex flex-col justify-end">
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: '97%' }}
              transition={{ duration: 1 }}
              className="w-[40] bg-green-500 z-index-100 rounded-xl"
            ></motion.span>
          </span>
          <p className="font-bold">30 dias</p>
          <p className="text-center">
            Você é uma mulher magnética e sabe como deixar ele obcecado.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Se você está cansada de só atrair{' '}
          <span className="text-yellow-300">relacionamentos ruins</span>...
        </p>
        <p>
          Está na hora de{' '}
          <span className="font-extrabold">
            <span className="text-yellow-300">virar esse jogo </span>ao seu
            favor e fazer ele ficar OBCECADO por você!
          </span>
        </p>
        <p>
          E quando falo sobre deixar um homem obcecado em você, estou falando
          sobre deixá-lo{' '}
          <span className="text-yellow-300 font-extrabold">
            VICIADO DE VERDADE
          </span>
          .
        </p>
        <p>
          Você vai aprender a mexer com o inconsciente dele, fazendo com que ele
          te deseje cada vez mais{' '}
          <span className="font-bold text-yellow-300">sem nem perceber</span>.
        </p>
        <p>
          Você vai descobrir todos os gatilhos para enlouquecer qualquer homem
          através da manipulação hipnótica e mudança de comportamento.
        </p>
        <p>
          Com alguns passos simples você vai entrar na mente dele,{' '}
          <span className="font-bold text-yellow-300">
            fazendo com que ele fique completamente nas suas mãos.
          </span>
        </p>
      </div>
      <Form onSubmit={(e) => nextPage(e)} className="mt-7">
        <ContinueButton>Continuar</ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_17;
