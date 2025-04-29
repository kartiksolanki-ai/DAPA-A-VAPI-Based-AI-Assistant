import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: DataPoint[];
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: { active: boolean; payload: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
         
          <div className="grid gap-1.5">
            <div className="flex w-full gap-2 items-center">
              <div className="flex flex-col w-[150px] text-wrap">
                <span className="text-sm font-semibold text-primary">{payload[0].value}</span>
                <span className="text-sm font-semibold text-text">{payload[0].name}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  return (
    <div
      data-chart="chart-r23"
      className='flex aspect-video justify-center text-xs w-full h-[420px]'
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120} // Adjusted outer radius for size
            innerRadius={58} // Adjusted inner radius for size
            dataKey="value"
            stroke="none" // No stroke for the outer path
            startAngle={90} // Start angle for the first segment
            endAngle={-270} // Adjusted for a larger gap
            paddingAngle={5} // Added gap between segments
          >
            <Cell
              fill="rgba(136, 132, 216, 0.5)" // Fill color with 80% opacity for the first segment
              stroke="#8884d8" // Border color for the first segment
              strokeWidth={2} // Width of the border
            />
            <Cell
              fill="rgba(84, 120, 101, 0.5)" // Fill color with 80% opacity for the second segment
              stroke="#547865" // Border color for the second segment
              strokeWidth={2} // Width of the border
              radius={10}
            />
          </Pie>
          <Tooltip content={<CustomTooltip active={false} payload={[]} />} cursor={false} />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;