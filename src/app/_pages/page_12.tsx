'use client';
import { FormEvent, useState } from 'react';
import {
  ContinueButton,
  ContinueButtonDisabled,
} from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { Checkbox } from '../_components/ui/Checkbox';
import { motion } from 'motion/react';

type Page_12Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_12 = ({ nextPage }: Page_12Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Quais dessas técnicas você{' '}
        <HighlightTitle>já ouviu falar</HighlightTitle>?
      </DefaultTitle>
      <p className="w-full text-center my-5">Selectione todas que se aplique</p>
      <Form onSubmit={(e) => nextPage(e)}>
        <Checkbox onChange={() => setChecked(true)}>Contato zero</Checkbox>
        <Checkbox onChange={() => setChecked(true)}>Mantendo mistério</Checkbox>
        <Checkbox onChange={() => setChecked(true)}>Efeito nostalgia</Checkbox>
        <Checkbox onChange={() => setChecked(true)}>Ciúme extremo</Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Nenhuma das opções acima
        </Checkbox>
        {checked ? (
          <ContinueButton>Continuar</ContinueButton>
        ) : (
          <ContinueButtonDisabled>Continuar</ContinueButtonDisabled>
        )}
      </Form>
    </motion.div>
  );
};

export default Page_12;
