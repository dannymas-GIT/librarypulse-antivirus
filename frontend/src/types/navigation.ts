import { LucideIcon } from 'lucide-react';
import { SystemStatus } from './dashboard';

export interface RouteProps {
  status: SystemStatus;
}

export interface Route {
  path: string;
  label: string;
  icon: LucideIcon;
  component: React.FC<RouteProps>;
}

export interface NavigationGroup {
  label: string;
  icon: LucideIcon;
  routes: Route[];
}

export interface NavigationConfig extends Array<NavigationGroup> {
  productTitle?: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface BreadcrumbConfig {
  items: BreadcrumbItem[];
} 