import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavGroup } from '../../types/navigation';

interface TopNavProps {
  navigation: NavGroup[];
}

export const TopNav: React.FC<TopNavProps> = ({ navigation }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/images/librarypulselogo.jpg"
                alt="Library Pulse"
                className="h-32 w-auto"
              />
            </div>
            <div className="hidden sm:ml-16 sm:flex sm:space-x-12">
              {navigation.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`inline-flex items-center px-1 pt-1 text-base font-bold border-b-2 ${
                      activeMenu === group.label || location.pathname.startsWith('/' + group.routes[0].path.split('/')[1])
                        ? 'border-primary-500 text-gray-900'
                        : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900'
                    }`}
                  >
                    {group.icon && <group.icon className="mr-2 h-5 w-5" />}
                    {group.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {activeMenu === group.label && (
                    <div 
                      className="absolute z-50 left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => handleMouseEnter(group.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        {group.routes.map((route) => (
                          <Link
                            key={route.path}
                            to={route.path}
                            className={`group flex items-center px-4 py-2 text-sm font-medium ${
                              location.pathname === route.path
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                          >
                            {route.icon && <route.icon className="mr-3 h-5 w-5" />}
                            {route.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 