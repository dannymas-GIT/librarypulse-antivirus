import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ThreatStats } from '../../types/dashboard';
import { AlertTriangle } from 'lucide-react';

const COLORS = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#06b6d4'];

interface ThreatDistributionProps {
  stats: ThreatStats;
}

export const ThreatDistribution = ({ stats }: ThreatDistributionProps) => {
  const data = Object.entries(stats).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const total = Object.values(stats).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <AlertTriangle className="h-6 w-6 text-primary-500" />
        <h2 className="ml-2 text-lg font-semibold text-gray-900">Threat Distribution</h2>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm font-medium text-gray-600">{item.name}</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {((item.value / total) * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">Total Threats</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{total}</p>
        </div>
      </div>
    </div>
  );
}; 