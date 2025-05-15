'use client';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Payload } from 'recharts/types/component/DefaultTooltipContent';
interface DataPoint {
  name: string;
  value: number;
  key: number;
  label?: string;
}

const PsychologyMasteryChart = () => {
  const data: DataPoint[] = [
    { name: 'baixo', value: 10, key: 1 },
    { name: '', value: 20, key: 2 },
    { name: 'médio', value: 40, label: 'Hoje', key: 3 },
    { name: '', value: 60, key: 4 },
    { name: 'alto', value: 90, label: 'Objetivo', key: 5 },
  ];

  type CustomTooltipProps = {
    active?: boolean;
    payload?: [
      {
        payload: DataPoint;
        key: number;
        name: string;
        value: number;
        label?: string;
      },
    ];
    label?: string;
  };
  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      if (dataPoint.label) {
        return (
          <div className="bg-white p-2 rounded-md shadow-md border">
            <p className="font-bold text-black">{dataPoint.label}</p>
          </div>
        );
      }
    }
    return null;
  };

  type CustomizedDotProps = {
    cx: number;
    cy: number;
    payload: DataPoint;
  } & Payload<number, string>;

  const CustomizedDot = (props: CustomizedDotProps) => {
    const { cx, cy, payload } = props;

    if (payload.label === 'Hoje') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={8} fill="white" />
          <circle
            cx={cx}
            cy={cy}
            r={6}
            fill="#e9b44c"
            stroke="white"
            strokeWidth={2}
          />
          <foreignObject x={cx - 20} y={cy - 45} width={40} height={30}>
            <div className="flex justify-center text-black items-center bg-white rounded-full px-3 py-1 text-sm shadow-md">
              Hoje
            </div>
          </foreignObject>
        </g>
      );
    }

    if (payload.label === 'Objetivo') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={8} fill="white" />
          <circle
            cx={cx}
            cy={cy}
            r={6}
            fill="#1abc9c"
            stroke="white"
            strokeWidth={2}
          />
          <foreignObject x={cx - 60} y={cy - 45} width={60} height={30}>
            <div className="flex justify-center items-center text-black bg-white rounded-full px-3 py-1 text-sm shadow-md">
              Objetivo
            </div>
          </foreignObject>
        </g>
      );
    }

    if (payload.name === 'baixo') {
      return (
        <g>
          <circle
            cx={cx}
            cy={cy}
            r={5}
            fill="#e74c3c"
            stroke="white"
            strokeWidth={2}
          />
        </g>
      );
    }

    return <span>Dia</span>;
  };

  return (
    <div className="w-full h-[350px]  rounded-lg">
      <h2 className="text-white text-md font-bold">
        Nível de Domínio da Psicologia Masculina
      </h2>
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="masteryGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e74c3c" />
                <stop offset="50%" stopColor="#e9b44c" />
                <stop offset="100%" stopColor="#1abc9c" />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white' }}
            />
            <YAxis hide={true} domain={[0, 100]} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#masteryGradient)"
              strokeWidth={3}
              fill="url(#masteryGradient)"
              fillOpacity={0.2}
              dot={CustomizedDot}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PsychologyMasteryChart;
