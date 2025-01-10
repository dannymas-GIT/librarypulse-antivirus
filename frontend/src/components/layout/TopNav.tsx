import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NavigationGroup, Route } from '../../types/navigation';

interface TopNavProps {
  navigation: NavigationGroup[];
}

export const TopNav: React.FC<TopNavProps> = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/images/librarypulselogo.jpg"
                alt="LibraryPulse"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((group: NavigationGroup) => (
                <div key={group.label} className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    <group.icon className="h-5 w-5 mr-2" />
                    {group.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                    {group.routes.map((route: Route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={`block px-4 py-2 text-sm ${
                          location.pathname === route.path
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <route.icon className="h-4 w-4 mr-2" />
                          {route.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden" ref={mobileMenuRef}>
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((group: NavigationGroup) => (
              <div key={group.label} className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900 flex items-center">
                  <group.icon className="h-5 w-5 mr-2" />
                  {group.label}
                </div>
                {group.routes.map((route: Route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`block pl-8 pr-3 py-2 text-base font-medium ${
                      location.pathname === route.path
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <route.icon className="h-4 w-4 mr-2" />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}; 