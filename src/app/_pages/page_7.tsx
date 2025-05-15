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

type Page_5Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_5 = ({ nextPage }: Page_5Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Quais são os principais <HighlightTitle>desafios </HighlightTitle>em sua
        vida amorosa?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Checkbox onChange={() => setChecked(true)}>
          Ele me deixa confusa
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Me sinto rejeitada
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>Fui trocada</Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Não me sinto amada
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Não consigo atrair o homem certo
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Sinto que a paixão se foi
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

export default Page_5;
