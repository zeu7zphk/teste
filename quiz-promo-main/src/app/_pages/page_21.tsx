'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';
import Image from 'next/image';

type Page_21Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_21 = ({ nextPage }: Page_21Props) => {
  return (
    <motion.div
      className="flex flex-col gap-5 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 2 }}
    >
      <DefaultTitle className="text-2xl">
        DESCUBRA O <HighlightTitle>CÓDIGO SECRETO </HighlightTitle>QUE FAZ UM
        HOMEM SE VICIAR EM VOCÊ!
      </DefaultTitle>
      <span className="text-center">
        Um{' '}
        <span className="text-yellow-300 font-bold">
          método cientificamente comprovado{' '}
        </span>
        para despertar desejo profundo e fazer ele te querer como nunca antes!
      </span>
      <div className="flex flex-col justify-start items-center text-2xl gap-2">
        <Image
          src="/images/image8.png"
          alt="Image"
          width={4700}
          height={40}
          className="rounded-xl"
        />
        <p className="text-[18px]">
          Você irá aprender de forma simples, fácil, objetiva e sem enrolação,
          cada um dos Códigos mentais que são necessários para deixar qualquer
          homem LOUCO E OBCECADO por você!
        </p>
        <p className="text-[18px]">
          Esse método é tão fácil e simples de aprender e de praticar que até o
          final dessa semana, você vai saber exatamente o que precisa fazer para
          deixar qualquer homem louco por você!
        </p>
        --------
        <div className="flex flex-col items-center gap-4">
          <h2>Você ainda irá receber</h2>
          <p className="text-[17px]">
            <strong>🎁 Bônus 1: </strong>GUIA LENDO UM HOMEM{' '}
            <span className="text-red-600 line-through">R$27</span>
          </p>
          <Image
            src="/images/image9.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[17px]">
            <strong>🎁 Bônus 2: </strong>COMO FAZER ELE SENTIR SUA FALTA{' '}
            <span className="text-red-600 line-through">R$37</span>
          </p>
          <Image
            src="/images/image10.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[17px]">
            <strong>🎁 Bônus 3: </strong>18 GATILHOS DA SEDUÇÃO NA PRÁTICA{' '}
            <span className="text-red-600 line-through"> R$47</span>
          </p>
          <Image
            src="/images/image11.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[17px]">
            <strong>🎁 Bônus 4: </strong>GUIA DO AMOR ETERNO{' '}
            <span className="text-red-600 line-through">R$47</span>
          </p>
          <Image
            src="/images/image12.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[17px]">
            <strong>🎁 Bônus 5: </strong>GUIA DOS 17 ERROS MORTAIS{' '}
            <span className="text-red-600 line-through">R$29</span>
          </p>
          <Image
            src="/images/image13.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[17px]">
            <strong>🎁 Bônus 4: </strong> MANUSCRITO PROBIDO{' '}
            <span className="text-red-600 line-through">R$17</span>
          </p>
          <Image
            src="/images/image14.png"
            alt="Image"
            width={350}
            height={40}
            className="rounded-xl"
          />
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        <li>✅ Acesso Vitalício</li>
        <li>✅ Acesso ao grupo vip do Whatsapp</li>
        <li>✅ Garantia incondicional de 30 dias</li>
      </ul>
      <div className="text-center">
        --------
        <p>
          Se você fosse comprar todos esses produtos separadamente, você
          pagaria:
        </p>
        <span>R$397</span>
        <p>
          Mas se você comprar agora você vai levar tudo isso que foi listado
          acima
        </p>
        <p>por apenas</p>
        <span>R$57,00</span>
        <span>+ de R$300 reais de desconto!</span>
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

export default Page_21;
