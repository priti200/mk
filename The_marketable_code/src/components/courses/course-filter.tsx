import { Search } from 'lucide-react';

const filters = {
  domain: ['Software Engineering', 'Data Science'],
  level: ['Beginner', 'Intermediate', 'Advanced'],
  price: ['Free', 'Premium']
};

interface CourseFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string, value: string) => void;
}

export function CourseFilter({ onSearch, onFilter }: CourseFilterProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {Object.entries(filters).map(([category, options]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-2 capitalize">{category}</h3>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={() => onFilter(category, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}