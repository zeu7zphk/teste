import { FormEvent } from 'react';
import { ContinueButton } from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';
import Image from 'next/image';

type Page_0Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_0 = ({ nextPage }: Page_0Props) => {
  return (
    <motion.div
      className="w-full mt-[10%] gap-5 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Descubra os <HighlightTitle>truque sujos </HighlightTitle>que instalam{' '}
        <span className="underline">
          desejo, medo de perda e obsessão emocional
        </span>
        ...
      </DefaultTitle>
      <Image
        src={'/images/print-page0.png'}
        alt="obsessao"
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <DefaultTitle>
        Use isso com cuidado pois pode causar{' '}
        <HighlightTitle>obsessão </HighlightTitle>que instalam ...
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <ContinueButton className="bg-yellow-400 text-black font-semibold shadow-intern-yellow outline-none border-0 animate-shadow-pulse">
          INICIAR QUIZ GRÁTIS
        </ContinueButton>
      </Form>
    </motion.div>
  );
};

export default Page_0;
