import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbConfig } from '../../types/navigation';

interface BreadcrumbProps {
  config: BreadcrumbConfig;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ config }) => {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="flex items-center space-x-2 text-[18px] leading-[18px] px-4 py-3">
        {config.items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && (
              <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            )}
            <Link
              to={item.path}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          </React.Fragment>
        ))}
        {config.current && (
          <>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium">
              {config.current}
            </span>
          </>
        )}
      </div>
    </div>
  );
}; 