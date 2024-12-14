import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Quantitative Risk Modeling',
    description: 'Dive into quantitative methods for modeling and assessing financial risks.',
    instructor: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Risk Analyst'
    },
    rating: 4.9,
    enrolled: 600,
    price: 'Free',
    duration: '8 weeks',
    level: 'Advanced',
    modules: 12,
    challenges: 8,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3'
  },
  {
    id: '2',
    title: 'Behavioral Finance',
    description: 'Understand how psychological factors influence financial decisions and market behavior.',
    instructor: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'Behavioral Finance Expert'
    },
    rating: 4.6,
    enrolled: 1000,
    price: 'Free',
    duration: '4 weeks',
    level: 'Intermediate',
    modules: 8,
    challenges: 6,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  {
    id: '3',
    title: 'Regulatory Compliance in Finance',
    description: 'Learn about financial regulations and how to ensure compliance in risk management practices.',
    instructor: {
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      role: 'Compliance Officer'
    },
    rating: 4.7,
    enrolled: 900,
    price: 'Free',
    duration: '5 weeks',
    level: 'Intermediate',
    modules: 10,
    challenges: 5,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  }
];