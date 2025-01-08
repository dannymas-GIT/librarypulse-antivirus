import React from 'react';
import { Shield, AlertCircle, Clock, FileText, LucideIcon } from 'lucide-react';
import { SystemStatus } from './SystemStatus';
import { ThreatDistribution } from './ThreatDistribution';
import { ThreatLog } from './ThreatLog';
import {
  getMockSystemStatus,
  getMockThreatStats,
  getMockThreatLogs,
} from '../../mockData';

const StatCard = ({ title, value, icon: Icon, color }: {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export const DashboardOverview = () => {
  const systemStatus = getMockSystemStatus();
  const threatStats = getMockThreatStats();
  const threatLogs = getMockThreatLogs();

  const stats = {
    totalScans: 125,
    activeThreats: Object.values(threatStats).reduce((a, b) => a + b, 0),
    quarantinedFiles: threatLogs.filter(log => log.status === 'quarantined').length,
    filesScanned: 1500000,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Scans"
          value={stats.totalScans}
          icon={Clock}
          color="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Active Threats"
          value={stats.activeThreats}
          icon={AlertCircle}
          color="bg-red-100 text-red-600"
        />
        <StatCard
          title="Quarantined Files"
          value={stats.quarantinedFiles}
          icon={Shield}
          color="bg-yellow-100 text-yellow-600"
        />
        <StatCard
          title="Files Scanned"
          value={stats.filesScanned.toLocaleString()}
          icon={FileText}
          color="bg-green-100 text-green-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SystemStatus status={systemStatus} />
        <div className="lg:col-span-2">
          <ThreatDistribution stats={threatStats} />
        </div>
      </div>

      <ThreatLog logs={threatLogs.map(log => ({
        ...log,
        timestamp: new Date(log.timestamp).toISOString()
      }))} />
    </div>
  );
}; 