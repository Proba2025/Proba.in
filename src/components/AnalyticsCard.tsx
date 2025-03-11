import React from "react";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  isLoading?: boolean;
  animationDelay?: number;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  subtext,
  icon,
  trend,
  className,
  isLoading = false,
  animationDelay = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 h-full",
        "animate-fade-in hover:shadow-md",
        className
      )}
      style={{
        animationDelay: `${animationDelay}ms`,
        animationFillMode: "both"
      }}
    >
      {isLoading ? (
        <div className="space-y-3">
          <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-2/3"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-1/2"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-full"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-proba-600 dark:text-proba-300">{title}</h3>
            {icon && <div className="text-primary">{icon}</div>}
          </div>
          <div className="flex items-end gap-3">
            <div className="text-2xl font-semibold text-proba-900 dark:text-proba-50">{value}</div>
            {trend && (
              <div 
                className={cn(
                  "text-sm font-medium flex items-center",
                  trend.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                )}
              >
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
              </div>
            )}
          </div>
          {subtext && <p className="mt-1 text-sm text-proba-500 dark:text-proba-400">{subtext}</p>}
        </>
      )}
    </div>
  );
};

export default AnalyticsCard;
