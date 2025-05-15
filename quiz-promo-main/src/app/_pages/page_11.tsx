import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_11Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_11 = ({ nextPage }: Page_11Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Você sabia que existem alguns{' '}
        <HighlightTitle>&quot;truques sujos&quot;</HighlightTitle> que podem
        fazer um homem ter uma conexão muito mais forte com você?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Não, nunca ouvi falar</Button>
        <Button>Estou curiosa</Button>
        <Button>Sim, eu uso isso toda vez</Button>
      </Form>
    </motion.div>
  );
};

export default Page_11;
