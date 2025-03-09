import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Filter, Search, X } from "lucide-react";

export const ChallengeFilters = () => {
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    topics: [] as string[],
    status: [] as string[],
  });

  const difficulties = ["Easy", "Medium", "Hard"];
  const topics = [
    "Arrays", "Strings", "Linked Lists", "Trees", "Sorting", "Dynamic Programming",
    "Graphs", "Hash Tables", "Heaps", "Recursion", "Stack", "Queue"
  ];
  const statuses = ["Not Started", "In Progress", "Completed"];

  const toggleFilter = (category: 'difficulty' | 'topics' | 'status', value: string) => {
    setFilters(prev => {
      const current = [...prev[category]];
      const index = current.indexOf(value);
      
      if (index === -1) {
        current.push(value);
      } else {
        current.splice(index, 1);
      }
      
      return {
        ...prev,
        [category]: current
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      difficulty: [],
      topics: [],
      status: []
    });
  };

  const hasActiveFilters = filters.difficulty.length > 0 || filters.topics.length > 0 || filters.status.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-blue-600 dark:text-blue-400 h-auto p-1"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Search challenges..." 
          className="pl-9"
        />
      </div>
      
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Difficulty
          </Label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map(difficulty => (
              <Button
                key={difficulty}
                variant={filters.difficulty.includes(difficulty) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('difficulty', difficulty)}
                className={`rounded-full ${
                  filters.difficulty.includes(difficulty) 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {difficulty}
                {filters.difficulty.includes(difficulty) && (
                  <CheckCircle className="ml-1 h-3 w-3" />
                )}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Topics
          </Label>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
            {topics.map(topic => (
              <Button
                key={topic}
                variant={filters.topics.includes(topic) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('topics', topic)}
                className={`rounded-full ${
                  filters.topics.includes(topic) 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {topic}
                {filters.topics.includes(topic) && (
                  <CheckCircle className="ml-1 h-3 w-3" />
                )}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Status
          </Label>
          <div className="flex flex-wrap gap-2">
            {statuses.map(status => (
              <Button
                key={status}
                variant={filters.status.includes(status) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('status', status)}
                className={`rounded-full ${
                  filters.status.includes(status) 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {status}
                {filters.status.includes(status) && (
                  <CheckCircle className="ml-1 h-3 w-3" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button className="w-full gap-2">
          <Filter className="h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
