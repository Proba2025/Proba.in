import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  if (active && payload && payload.length) {
    return (
      <div className={cn(
        "p-3 rounded-lg shadow-md",
        isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
      )}>
        <p className={cn("text-sm font-medium", isDark ? "text-proba-200" : "text-proba-900")}>{`${label}`}</p>
        <p className="text-sm text-primary font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

interface PerformanceChartProps {
  data: Array<any>;
  dataKey: string;
  stroke?: string;
  title: string;
  yAxisLabel?: string;
  className?: string;
  animationDelay?: number;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data,
  dataKey,
  stroke = "#3B82F6",
  title,
  yAxisLabel,
  className,
  animationDelay = 0,
}) => {
  const [chartData, setChartData] = useState<Array<any>>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  useEffect(() => {
    // Animate data population
    const timer = setTimeout(() => {
      setChartData(data);
    }, 500 + animationDelay);
    
    return () => clearTimeout(timer);
  }, [data, animationDelay]);

  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 scale-in", 
        className
      )}
      style={{
        animationDelay: `${animationDelay}ms`,
        animationFillMode: "both"
      }}
    >
      <h3 className="text-lg font-medium text-proba-800 dark:text-proba-200 mb-4">{title}</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? "#334155" : "#f0f0f0"} 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: isDark ? '#94a3b8' : '#64748b' }}
              tickLine={{ stroke: isDark ? '#334155' : '#e2e8f0' }}
              axisLine={{ stroke: isDark ? '#334155' : '#e2e8f0' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: isDark ? '#94a3b8' : '#64748b' }}
              tickLine={{ stroke: isDark ? '#334155' : '#e2e8f0' }}
              axisLine={{ stroke: isDark ? '#334155' : '#e2e8f0' }}
              label={yAxisLabel ? { 
                value: yAxisLabel, 
                angle: -90, 
                position: 'insideLeft', 
                style: { 
                  textAnchor: 'middle', 
                  fill: isDark ? '#94a3b8' : '#64748b', 
                  fontSize: 12 
                } 
              } : undefined}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: isDark ? "#1e293b" : "white" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: stroke }}
              animationDuration={1500}
              animationEasing="ease-out"
              name={dataKey}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
