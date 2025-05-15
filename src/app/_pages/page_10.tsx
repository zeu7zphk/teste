import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_10Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_10 = ({ nextPage }: Page_10Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Você gostaria de ter mais <HighlightTitle>controle </HighlightTitle>
        sobre os homens?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>👍 Sim</Button>
        <Button>👎 Não</Button>
        <Button>🤔 Não tenho tenho certeza</Button>
      </Form>
    </motion.div>
  );
};

export default Page_10;
