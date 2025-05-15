'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { motion } from 'motion/react';

type Page_16Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_16 = ({ nextPage }: Page_16Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-10">
        <h1 className="mt-10">
          <span className="bg-red-600 text-2xl font-extrabold">
            🛑 ALERTA CRÍTICO
          </span>
        </h1>
        <h4 className="font-bold">
          Mulheres que ignoram esses sinais entram em um caminho sem volta:
        </h4>
        <ul>
          <li>
            💔 Se tornam a mulher que só serve para &quot;sexo&quot; e para
            momentos de carência.
          </li>
          <li>
            💔 Passam a vida atraindo apenas homens que brincam com seus
            sentimentos.
          </li>
          <li>
            💔 Aos 35+ anos, percebem que perderam as melhores oportunidades, e
            sentem que já é tarde demais para o amor.
          </li>
        </ul>
        <div>
          <h2 className="text-2xl font-extrabold">
            Isso explica porque você sente que:
          </h2>
          <ul className="font-bold">
            <li>→ &quot;Não consigo atrair o homem certo&quot;</li>
            <li>→ &quot;Ele some e esfria sem motivo&quot;</li>
            <li>→ &quot;Sempre sou a ponte para outra mulher&quot;</li>
          </ul>
        </div>
        <div>
          <h2 className="text-yellow-300 font-extrabold text-xl">
            📌 VOCÊ TEM APENAS DUAS ESCOLHAS HOJE:
          </h2>
          <h4 className="font-bold">
            ✅ Descobrir o que faz um homem ficar OBCECADO por você e mudar isso
            a partir de agora...
          </h4>
          <p>ou</p>
          <p>
            ❌ Fechar essa página, continuar sendo a opção descartável e se
            arrepender depois.
          </p>
        </div>
      </div>
      <Form className="mt-7" onSubmit={(e) => nextPage(e)}>
        <ContinueButton>Eu quero virar o jogo!</ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_16;
