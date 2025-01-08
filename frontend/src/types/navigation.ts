import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

export interface NavRoute {
  path: string;
  label: string;
  icon: LucideIcon;
  component: ComponentType;
}

export interface NavGroup {
  label: string;
  icon: LucideIcon;
  routes: NavRoute[];
}

export interface NavigationConfig {
  productTitle: string;
  mainNav: NavGroup[];
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface BreadcrumbConfig {
  items: BreadcrumbItem[];
  current: string;
} 