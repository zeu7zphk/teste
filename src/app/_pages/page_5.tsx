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
        Quais estratégias você mais <HighlightTitle>gostaria</HighlightTitle> de
        dominar?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Checkbox onChange={() => setChecked(true)}>
          Como fazer ele se apegar a mim
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Como fazer ele sentir minha falta
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Como ler a mente dele para controlar ele
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Como fazer ele se apaixonar profundamente por mim
        </Checkbox>
        <Checkbox onChange={() => setChecked(true)}>
          Como fazer ele ser mais proativo
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
