import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopNav } from './components/layout/TopNav';
import { AppLayout } from './components/layout/AppLayout';
import { navigationConfig } from './config/navigation';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopNav navigation={navigationConfig.mainNav} />
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
            <Route element={<AppLayout />}>
              {navigationConfig.mainNav.flatMap(group =>
                group.routes.map(route => {
                  const Component = route.component;
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<Component />}
                    />
                  );
                })
              )}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}; 