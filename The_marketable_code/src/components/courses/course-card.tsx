import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../../types/course';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative aspect-video">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {course.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{course.instructor.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor.role}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{course.enrolled} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <Link
          to={`/courses/${course.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </motion.div>
  );
}