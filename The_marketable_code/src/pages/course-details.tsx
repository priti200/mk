import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, Target, Award, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

export function CourseDetailsPage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <nav className="flex mb-4 text-sm">
              <a href="/courses" className="text-gray-500">Courses</a>
              <span className="mx-2">›</span>
              <span>{course.title}</span>
            </nav>

            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {course.description}
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">A course by {course.instructor.name}</p>
                <p className="text-sm text-gray-500">{course.instructor.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Duration</p>
                  <p className="text-sm text-gray-500">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Level</p>
                  <p className="text-sm text-gray-500">{course.level}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Certificate</p>
                  <p className="text-sm text-gray-500">Included</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden sticky top-20">
              <div className="relative aspect-video">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 group hover:bg-black/60 transition-colors">
                  <Play className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Key Features of this Course
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Learn from top industry experts',
                      'Learn at your own pace',
                      'Unlimited access forever',
                      'Certification Included'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}