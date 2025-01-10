import { Outlet, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation';
import { TopNav } from './TopNav';
import { Breadcrumb } from './Breadcrumb';
import type { Route, NavigationGroup } from '../../types/navigation';
import { getMockSystemStatus } from '../../mockData';

export const AppLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const mockStatus = getMockSystemStatus();

  const currentGroup = navigationConfig.find((group: NavigationGroup) => 
    group.routes.some((route: Route) => route.path === currentPath)
  );
  const currentRoute = currentGroup?.routes.find((route: Route) => route.path === currentPath);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav navigation={navigationConfig} />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentGroup && currentRoute && (
            <Breadcrumb
              config={{
                items: [
                  { label: currentGroup.label, path: currentGroup.routes[0].path },
                  { label: currentRoute.label, path: currentRoute.path },
                ],
              }}
            />
          )}
          <div className="mt-4">
            {currentRoute ? (
              <currentRoute.component status={mockStatus} />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}; 