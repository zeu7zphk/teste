'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';
import Image from 'next/image';

type Page_19Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_19 = ({ nextPage }: Page_19Props) => {
  return (
    <motion.div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-center flex-col items-center">
        <span className="bg-yellow-300 font-extrabold text-black block w-78 text-xl">
          + de 2400 vidas transformadas
        </span>
        <DefaultTitle className="text-4xl">
          Relatos reais de quem já testou:
        </DefaultTitle>
      </div>
      <span className="text-center">
        quero receber a sua mensagem{' '}
        <span className="text-yellow-300">
          ainda essa semana no meu direct!
        </span>
      </span>
      <div className="flex flex-col justify-start items-center text-2xl gap-2">
        -------------
        <Image
          src="/images/image2.jpg"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
        <Image
          src="/images/image3.webp"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
        -------------
        <Image
          src="/images/image4.webp"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
        -------------
        <Image
          src="/images/image5.png"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
        <Image
          src="/images/image6.webp"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
        -------------
        <Image
          src="/images/image7.webp"
          alt="Image"
          width={300}
          height={40}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-2xl font-bold text-center">
        Você também <span className="text-yellow-300">deseja </span>viver isso?
      </h2>
      <Form onSubmit={(e) => nextPage(e)}>
        <ContinueButton>Sim, eu quero muito!</ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_19;
