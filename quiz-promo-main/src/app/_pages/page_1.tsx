import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'framer-motion';

type Page_1Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_1 = ({ nextPage }: Page_1Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 2 }}
    >
      <DefaultTitle>
        Qual a sua <HighlightTitle>idade </HighlightTitle>?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>18 a 24</Button>
        <Button>25 a 35</Button>
        <Button>35 a 45</Button>
        <Button>45+</Button>
      </Form>
    </motion.div>
  );
};

export default Page_1;
