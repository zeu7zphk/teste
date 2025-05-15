import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_9Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_9 = ({ nextPage }: Page_9Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Qual desses <HighlightTitle>sentimentos </HighlightTitle>é o mais
        frequente?
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Sinto que ele não me vê como prioridade</Button>
        <Button>Sinto que esqueci como ser interessente</Button>
        <Button>Tenho medo de aparecer desesperada</Button>
        <Button>
          Fico confusa sem saber o que ele realmente pensa sobre nós
        </Button>
      </Form>
    </motion.div>
  );
};

export default Page_9;
