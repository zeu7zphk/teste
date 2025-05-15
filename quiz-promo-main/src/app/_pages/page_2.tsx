import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'framer-motion';

type Page_2Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_2 = ({ nextPage }: Page_2Props) => {
  return (
    <motion.div
      className="w-full h-screen max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Qual o seu principal <HighlightTitle>objetivo</HighlightTitle>?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>🥰 Atrair o homem dos sonhos</Button>
        <Button>😈 Fazer ele ficar obsecado</Button>
        <Button>💍 Casar</Button>
        <Button>🔥 Reacender a chama</Button>
      </Form>
    </motion.div>
  );
};

export default Page_2;
