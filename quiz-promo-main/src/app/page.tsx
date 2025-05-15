'use client';

import { FormEvent, useState } from 'react';
import Page_1 from './_pages/page_1';
import Page_2 from './_pages/page_2';
import Page_3 from './_pages/page_3';
import Page_4 from './_pages/page_4';
import Page_5 from './_pages/page_5';
import Page_6 from './_pages/page_6';
import Page_9 from './_pages/page_9';
import Page_10 from './_pages/page_10';
import Page_7 from './_pages/page_7';
import Page_8 from './_pages/page_8';
import Page_11 from './_pages/page_11';
import Page_12 from './_pages/page_12';
import Page_13 from './_pages/page_13';
import Page_15 from './_pages/page_15';
import Page_0 from './_pages/page_0';
import Page_14 from './_pages/page_14';
import { motion } from 'motion/react';
import Page_16 from './_pages/page_16';
import Page_17 from './_pages/page_17';
import Page_18 from './_pages/page_18';
import Page_19 from './_pages/page_19';
import Page_20 from './_pages/page_20';
import Page_21 from './_pages/page_21';

const calculateProgress = (page: number, totalPages: number): number => {
  return Math.floor(((page + 1) / totalPages) * 100);
};

const Quiz = () => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleNextPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (page < Pages.length - 1) {
      setPage(page + 1);
      setProgress(calculateProgress(page, Pages.length));
      countAccess(page);
    }
  };

  const countAccess = async (page: number) => {
    try {
      await fetch('/api/hu45s-utk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: page }),
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const Pages = [
    { number: <Page_0 nextPage={handleNextPage} /> },
    { number: <Page_1 nextPage={handleNextPage} /> },
    { number: <Page_2 nextPage={handleNextPage} /> },
    { number: <Page_3 nextPage={handleNextPage} /> },
    { number: <Page_4 nextPage={handleNextPage} /> },
    { number: <Page_5 nextPage={handleNextPage} /> },
    { number: <Page_6 nextPage={handleNextPage} /> },
    { number: <Page_7 nextPage={handleNextPage} /> },
    { number: <Page_8 nextPage={handleNextPage} /> },
    { number: <Page_9 nextPage={handleNextPage} /> },
    { number: <Page_10 nextPage={handleNextPage} /> },
    { number: <Page_11 nextPage={handleNextPage} /> },
    { number: <Page_12 nextPage={handleNextPage} /> },
    { number: <Page_13 nextPage={handleNextPage} /> },
    { number: <Page_14 nextPage={handleNextPage} /> },
    { number: <Page_15 nextPage={handleNextPage} /> },
    { number: <Page_16 nextPage={handleNextPage} /> },
    { number: <Page_17 nextPage={handleNextPage} /> },
    { number: <Page_18 nextPage={handleNextPage} /> },
    { number: <Page_19 nextPage={handleNextPage} /> },
    { number: <Page_20 nextPage={handleNextPage} /> },
    { number: <Page_21 nextPage={handleNextPage} /> },
  ];
  return (
    <div className="w-full flex justify-center px-3 items-start">
      <div className="w-full max-w-md flex flex-col">
        <ProgressBar progress={progress} />
        {Pages[page].number}
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full flex justify-start items-center">
      <motion.span
        style={{ width: `calc(${progress}%)` }}
        initial={{ width: `calc(${progress}%)` }}
        animate={{ width: `calc(${progress}%)` }}
        transition={{ duration: 1, ease: 'linear' }}
        className={` bg-gray-400 h-1 min-h-0.5`}
      />
    </div>
  );
};
export default Quiz;
