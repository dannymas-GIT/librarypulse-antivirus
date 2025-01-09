import { 
  Shield, 
  Activity, 
  Network,
  AlertCircle,
  Lock,
  Bug,
  FileText,
  Settings,
  History,
  Database,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import {
  DashboardView,
  SecurityLogsView,
  SystemStatusView,
  ThreatDistributionView,
  RealTimeMonitoringView,
  NetworkProtectionView,
  QuarantineManagerView,
  ThreatIntelligenceView,
  UpdateManagerView,
  ComplianceReportView,
  ScanLogsView
} from '../components/views';

const mainNav = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    routes: [
      {
        path: '/dashboard/overview',
        label: 'System Overview',
        icon: LayoutDashboard,
        component: DashboardView
      },
      {
        path: '/dashboard/realtime',
        label: 'Real-time Monitoring',
        icon: Activity,
        component: RealTimeMonitoringView
      }
    ]
  },
  {
    label: 'Security',
    icon: Shield,
    routes: [
      {
        path: '/security/threats',
        label: 'Active Threats',
        icon: AlertCircle,
        component: ThreatDistributionView
      },
      {
        path: '/security/network',
        label: 'Network Protection',
        icon: Network,
        component: NetworkProtectionView
      },
      {
        path: '/security/quarantine',
        label: 'Quarantine Manager',
        icon: Lock,
        component: QuarantineManagerView
      },
      {
        path: '/security/intelligence',
        label: 'Threat Intelligence',
        icon: Bug,
        component: ThreatIntelligenceView
      }
    ]
  },
  {
    label: 'Reports',
    icon: FileText,
    routes: [
      {
        path: '/reports/security',
        label: 'Security Report',
        icon: Shield,
        component: SecurityLogsView
      },
      {
        path: '/reports/scan-history',
        label: 'Scan History',
        icon: History,
        component: ScanLogsView
      },
      {
        path: '/reports/compliance',
        label: 'Compliance Report',
        icon: FileText,
        component: ComplianceReportView
      }
    ]
  },
  {
    label: 'System',
    icon: Settings,
    routes: [
      {
        path: '/system/status',
        label: 'System Status',
        icon: Activity,
        component: SystemStatusView
      },
      {
        path: '/system/updates',
        label: 'Update Manager',
        icon: Zap,
        component: UpdateManagerView
      },
      {
        path: '/system/logs',
        label: 'System Logs',
        icon: Database,
        component: SecurityLogsView
      }
    ]
  }
];

export const navigationConfig = {
  productTitle: 'Antivirus Management',
  mainNav
}; 