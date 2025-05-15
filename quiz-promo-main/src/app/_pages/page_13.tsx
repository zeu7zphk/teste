import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_13Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_13 = ({ nextPage }: Page_13Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Você gostaria de ser a
        <HighlightTitle> prioridade da vida dele</HighlightTitle>?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>😍 Seria um sonho</Button>
        <Button>🤡 Está bom do jeito que está</Button>
      </Form>
    </motion.div>
  );
};

export default Page_13;
