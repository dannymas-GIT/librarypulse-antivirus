import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation';

export const AppLayout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Find current route information
  const currentGroup = navigationConfig.mainNav.find(group =>
    group.routes.some(route => route.path.startsWith(`/${pathSegments[0]}`))
  );
  const currentRoute = currentGroup?.routes.find(route => 
    route.path === location.pathname
  );

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-gray-900">Antivirus Management</span>
              {currentGroup && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-base font-bold text-gray-900">{currentGroup.label}</span>
                </>
              )}
              {currentRoute && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-base font-bold text-gray-900">{currentRoute.label}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <main className="py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}; 