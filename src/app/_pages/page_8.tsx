import { FormEvent } from 'react';
import Button from '../_components/ui/Button';
import Form from '../_components/ui/Form';
import { DefaultTitle, HighlightTitle } from '../_components/ui/Title';
import { motion } from 'motion/react';

type Page_8Props = {
  nextPage: (e: FormEvent<HTMLFormElement>) => void;
};
const Page_8 = ({ nextPage }: Page_8Props) => {
  return (
    <motion.div
      className="w-full max-h-screen mt-[40%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: '100%' }}
      transition={{ duration: 1 }}
    >
      <DefaultTitle>
        Você fica mais <HighlightTitle>frustrada</HighlightTitle> quando...
      </DefaultTitle>
      <Form onSubmit={(e) => nextPage(e)}>
        <Button>Invisto tempo em alguém que depois some</Button>
        <Button>Sou tratada como opção em vez de prioridade</Button>
        <Button>Vejo outras conseguindo o que eu mereço</Button>
        <Button>Sinto que nunca vou ter o relacionamento dos sonhos</Button>
      </Form>
    </motion.div>
  );
};

export default Page_8;
