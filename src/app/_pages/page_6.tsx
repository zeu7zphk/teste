import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_6Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_6 = ({ nextPage }: Page_6Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Com que frequência você sente que{' '}
        <HighlightTitle>dá mais</HighlightTitle> do que recebe?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Sempre</Button>
        <Button>Às vezes</Button>
        <Button>Quase nunca</Button>
      </Form>
    </motion.div>
  );
};

export default Page_6;
