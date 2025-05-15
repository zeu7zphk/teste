import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_14Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_14 = ({ nextPage }: Page_14Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        O que você faria se existisse um{' '}
        <HighlightTitle>método psicológico comprovado</HighlightTitle> para
        deixar ele completamente <HighlightTitle>OBCECADO</HighlightTitle> em
        você?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Eu usaria imediatamente</Button>
        <Button>Gostaria de entender como isso funciona antes</Button>
      </Form>
    </motion.div>
  );
};

export default Page_14;
