'use client';
import { FormEvent, useEffect, useState } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import PsychologyMasteryChart from '../_components/Animation/PsychologyMasteryChart';
import LoadingBar from '../_components/Animation/LoadingBar';

type Page_15Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_15 = ({ nextPage }: Page_15Props) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-[5%]">
      {loadingPage ? (
        <>
          <DefaultTitle>
            Aqui está a <HighlightTitle>análise inicial </HighlightTitle>das
            suas respostas
          </DefaultTitle>
          <PsychologyMasteryChart />
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-extrabold">✍ Análise descritiva:</h2>
            <p>
              💔 Você é exatamente o tipo de mulher que os homens desperdiçam...
              não por falta de valor, mas porque sua mente ainda não desbloqueou
              os códigos secretos de{' '}
              <span className="bg-yellow-300 text-black font-bold">
                manipulação
              </span>{' '}
              que fazem ele te ver como uma mulher inesquecível e que faça ele
              ficar completamente obcecado por você.
            </p>
            <h2 className="text-2xl font-extrabold">🔍 Padrão Detectado:</h2>
            <p>
              Existem alguns padrões que provam que você está sendo sabotada por
              armadilhas invisíveis...
            </p>
            <div>
              <h3 className="text-xl font-bold">O que isso significa?</h3>
              <ul>
                <li>
                  ❌ Você está fazendo exatamente o que faz um homem perder o
                  interesse.
                </li>
                <li>
                  ❌ Ele já percebeu que pode te deixar de lado e você ainda vai
                  continuar ali.
                </li>
                <li>
                  ❌ Se você continuar assim, vai repetir esse ciclo para
                  sempre.
                </li>
              </ul>
            </div>
            <span className="font-bold bg-red-600">
              🚨 ESTE PADRÃO ESTÁ SABOTANDO SUA VIDA AMOROSA E VOCÊ NUNCA FOI
              AVISADA!
            </span>
          </div>
          <Form className="mt-7" onSubmit={(e) => nextPage(e)}>
            <ContinueButton>Quero mudar isso hoje!</ContinueButton>
          </Form>
        </>
      ) : (
        <div className="max-h-screen flex flex-col justify-center items-center mt-[35%]">
          <DefaultTitle className="text-2xl">
            <HighlightTitle>Analisando </HighlightTitle>suas respostas e
            identificando padrões
          </DefaultTitle>
          <div className="flex flex-col gap-2 mt-10 w-full item-center px-4 justify-center">
            <div className="font-bold flex justify-between">
              <span>Carregando...</span>
              <span>{count}%</span>
            </div>
            <LoadingBar />
            <span className="text-center w-full">
              Gerando resultado personalizado
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page_15;
