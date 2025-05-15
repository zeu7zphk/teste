import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_3Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_3 = ({ nextPage }: Page_3Props) => {
  return (
    <motion.div
      className="w-full h-screen max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        <HighlightTitle>Atualmente</HighlightTitle> você está
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Solteira</Button>
        <Button>Enrolada</Button>
        <Button>Namorando</Button>
        <Button>Casada</Button>
      </Form>
    </motion.div>
  );
};

export default Page_3;
