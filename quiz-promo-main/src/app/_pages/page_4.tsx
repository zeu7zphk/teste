import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_4Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_4 = ({ nextPage }: Page_4Props) => {
  return (
    <motion.div
      className="w-full h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Como você se sente em relação à sua{' '}
        <HighlightTitle>vida amorosa </HighlightTitle>no momento?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>😎 Estou confortável com isso</Button>
        <Button>😕 Ainda não é como eu sonho</Button>
        <Button>😭 Estou muito frustrada</Button>
      </Form>
    </motion.div>
  );
};

export default Page_4;
