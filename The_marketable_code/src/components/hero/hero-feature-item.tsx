import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  label: string;
}

export function HeroFeatureItem({ icon: Icon, label }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  );
}