import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from '../components/courses/course-card';
import { CourseFilter } from '../components/courses/course-filter';
import { courses } from '../data/courses';

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>({
    domain: new Set(),
    level: new Set(),
    price: new Set()
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[category].has(value)) {
        newFilters[category].delete(value);
      } else {
        newFilters[category].add(value);
      }
      return newFilters;
    });
  };

  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Free Programming Courses with Certification
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Learn from industry experts and advance your career
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CourseFilter
              onSearch={handleSearch}
              onFilter={handleFilter}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}