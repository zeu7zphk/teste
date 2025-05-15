'use client';
import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/_components/ui/Table';

type DataType = {
  accesses: number;
  id: number;
  number: number;
};
const CryptoTable: React.FC = () => {
  const [data, setData] = React.useState<DataType[]>([]);
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch('/api/hu45s-utk', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const payload = await response.json();
        setData(payload);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPages();
  }, []);
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border border-gray-200">
            <TableHead className=" text-gray-500 text-sm font-medium">
              # Página
            </TableHead>
            <TableHead className="text-gray-500 text-sm font-medium">
              Cliques
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((page, index) => (
            <TableRow
              key={page.id}
              className={index % 2 === 3 ? 'bg-gray-50' : ''}
            >
              <TableCell className="text-gray-500"># {page.number}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">{page.accesses}</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-gray-700 pr-1"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CryptoTable;
