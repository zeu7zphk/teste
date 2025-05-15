'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import Image from 'next/image';
import { motion } from 'motion/react';

type Page_18Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_18 = ({ nextPage }: Page_18Props) => {
  return (
    <motion.div
      className="flex flex-col gap-4 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle className="text-start">
        Quem irá te <HighlightTitle>ajudar</HighlightTitle>
      </DefaultTitle>
      <Image
        src="/images/image.png"
        alt="Karol"
        width={500}
        height={600}
        className="rounded-2xl"
      />
      <div className="flex flex-col gap-3">
        <p>
          oiii, eu sou a{' '}
          <span className="text-yellow-300">Karol Martinelli</span>, e se hoje
          entendo tudo sobre relacionamentos, é{' '}
          <span className="underline">porque já me perdi muito neles.</span>
        </p>
        <p>
          Já fiz de tudo para{' '}
          <strong>
            segurar um amor que não valia a pena, aceitei menos do que merecia
          </strong>{' '}
          e até me enganei achando que felicidade era ter alguém{' '}
          <span className="text-yellow-300">
            – mesmo que aquele alguém não fosse certo para mim
          </span>
          .
        </p>
        <p>
          Tudo mudou quando finalmente entendi que o problema não era falta de
          sorte no amor,{' '}
          <span className="text-yellow-300 font-bold">
            mas sim falta de conhecimento
          </span>
          . Voltei ao Brasil, estudei a fundo sobre{' '}
          <strong>relacionamentos</strong>e, desde então, ajudo milhares de
          mulheres a saírem <strong>desse ciclo de frustração</strong>.
        </p>
      </div>
      <Form onSubmit={(e) => nextPage(e)}>
        <ContinueButton>Continuar</ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_18;
