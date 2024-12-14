import { School } from 'lucide-react';

export function FooterBrand() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <School className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold">Marketable</span>
      </div>
      <p className="text-gray-400">
        Top learning experiences that create more talent in the world.
      </p>
    </div>
  );
}