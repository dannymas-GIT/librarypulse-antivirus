import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbConfig, BreadcrumbItem } from '../../types/navigation';

interface BreadcrumbProps {
  config: BreadcrumbConfig;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ config }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {config.items.map((item: BreadcrumbItem, index: number) => (
          <li key={item.path}>
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="h-5 w-5 text-gray-400" />}
              <Link
                to={item.path}
                className={`ml-4 text-sm font-medium ${
                  index === config.items.length - 1
                    ? 'text-gray-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}; 