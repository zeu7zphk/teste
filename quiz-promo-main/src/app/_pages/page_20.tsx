'use client';
import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { motion } from 'motion/react';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';

type Page_20Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_20 = ({ nextPage }: Page_20Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-10 mt-5">
        <DefaultTitle>
          O <HighlightTitle>próximo passo </HighlightTitle>é somente para você
          que deseja:
        </DefaultTitle>
        <ul className="flex flex-col gap-7">
          <li>
            <strong>✅ Fazer ele te ver como a mulher dos sonhos </strong> –
            aquela que ele simplesmente não consegue resistir!
          </li>
          <li>
            <strong>✅ Desbloquear a mente dele </strong> e entender exatamente
            o que faz um homem querer se comprometer.
          </li>
          <li>
            <strong>✅ Fazer ele sentir sua falta desesperadamente </strong>
            (mesmo quando você não manda mensagem!).
          </li>
          <li>
            <strong>✅ Virar o centro da atenção dele </strong>e ser a única
            mulher que ele deseja.
          </li>
          <li>
            <strong>✅ Parar de se sentir insegura e ansiosa </strong> sem saber
            o que ele realmente sente por você.
          </li>
          <li>
            <strong>✅ Ser valorizada e respeitada </strong> sem precisar
            implorar por atenção.
          </li>
          <li>
            <strong>✅ Criar uma conexão profunda e emocional </strong>que faz
            ele temer te perder.
          </li>
          <li>
            <strong>✅ Fazer ele investir tempo e energia em você </strong>(sem
            joguinhos e sem enrolação!).
          </li>
          <li>
            <strong>
              ✅ Desvendar os sinais secretos do comportamento masculino{' '}
            </strong>
            e sempre saber o que fazer para mantê-lo interessado.
          </li>
          <li>
            <strong>✅ Ativar os gatilhos certos </strong>que fazem ele querer
            um futuro ao seu lado.
          </li>
        </ul>
        <h2 className="font-extrabold text-xl text-center">
          Você está pronta para{' '}
          <span className="text-yellow-300">se tornar essa mulher</span>?
        </h2>
      </div>
      <Form className="mt-7" onSubmit={(e) => nextPage(e)}>
        <ContinueButton>Sim, estou pronta</ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_20;
