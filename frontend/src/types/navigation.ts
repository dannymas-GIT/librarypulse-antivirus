import { LucideIcon } from 'lucide-react';

export interface Route {
  path: string;
  label: string;
  icon: LucideIcon;
  component: React.FC<Record<string, unknown>>;
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