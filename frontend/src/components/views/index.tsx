import React from 'react';
import { ThreatDistribution } from '../dashboard/ThreatDistribution';
import { DashboardOverview } from '../dashboard/Overview';
import type { ScanHistory } from '../../types/dashboard';
import { 
  getMockSystemStatus, 
  getMockThreatStats, 
  getMockThreatLogs,
  getMockPerformanceMetrics,
  getMockNetworkStatus,
  getMockScheduledScans
} from '../../mockData';

// Re-export the Dashboard components
export { DashboardOverview as DashboardView };
export const ThreatDistributionView: React.FC = () => {
  const stats = getMockThreatStats();
  return <ThreatDistribution stats={stats} />;
};

// Security Logs View
export const SecurityLogsView = () => {
  const logs = getMockThreatLogs();
  const networkStatus = getMockNetworkStatus();
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Security Events Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Critical Events</h3>
            <p className="mt-2 text-2xl font-semibold text-red-600">
              {logs.filter(log => log.severity === 'critical').length}
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">High Priority</h3>
            <p className="mt-2 text-2xl font-semibold text-orange-600">
              {logs.filter(log => log.severity === 'high').length}
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Threats</h3>
            <p className="mt-2 text-2xl font-semibold text-yellow-600">{networkStatus.activeThreats}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Blocked Attempts</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">{networkStatus.blockedConnections}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Security Events</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                      {log.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                      {log.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// System Logs View
export const SystemLogsView = () => {
  const systemStatus = getMockSystemStatus();
  const performanceMetrics = getMockPerformanceMetrics();
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">System Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">System Status</h3>
            <p className="mt-2 text-lg font-semibold text-green-600">
              {systemStatus.realTimeProtection ? 'Fully Operational' : 'Maintenance Required'}
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Last Update</h3>
            <p className="mt-2 text-lg font-semibold text-blue-600">
              {new Date(systemStatus.lastUpdate).toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Processes</h3>
            <p className="mt-2 text-lg font-semibold text-purple-600">
              {performanceMetrics.activeProcesses}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scan Logs View
export const ScanLogsView = () => {
  const scheduledScans = getMockScheduledScans();
  
  const totalThreatsFound = scheduledScans.reduce((acc, scan) => acc + (scan.statistics?.threatsFound || 0), 0);
  
  const getScansWithStatus = (status: ScanHistory['status']) => 
    scheduledScans.filter(scan => scan.status === status);
  
  const completedScans = getScansWithStatus('completed');
  const failedScans = getScansWithStatus('failed');
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Scan History Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Total Scans</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">{scheduledScans.length}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Successful Scans</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">
              {completedScans.length}
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Failed Scans</h3>
            <p className="mt-2 text-2xl font-semibold text-red-600">
              {failedScans.length}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Total Threats Found</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {totalThreatsFound}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Real-time Monitoring View
export const RealTimeMonitoringView = () => {
  const systemStatus = getMockSystemStatus();
  const performanceMetrics = getMockPerformanceMetrics();
  const networkStatus = getMockNetworkStatus();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Real-time System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">CPU Usage</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">{performanceMetrics.cpu}%</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Memory Usage</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">{performanceMetrics.memory}%</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Processes</h3>
            <p className="mt-2 text-2xl font-semibold text-yellow-600">{performanceMetrics.activeProcesses}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Scan Speed</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">{performanceMetrics.scanSpeed} files/sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Network Protection View
export const NetworkProtectionView = () => {
  const networkStatus = getMockNetworkStatus();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Network Protection Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Threats</h3>
            <p className="mt-2 text-2xl font-semibold text-red-600">{networkStatus.activeThreats}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Blocked Connections</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">{networkStatus.blockedConnections}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Firewall Rules</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">{networkStatus.firewallRules}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Total Connections</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {networkStatus.inboundConnections + networkStatus.outboundConnections}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quarantine Manager View
export const QuarantineManagerView = () => {
  const logs = getMockThreatLogs().filter(log => log.status === 'quarantined');

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Quarantined Items</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Path</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hash</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                      item.type === 'malware' ? 'bg-red-100 text-red-800' :
                      item.type === 'ransomware' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                      item.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      item.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.filePath}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Threat Intelligence View
export const ThreatIntelligenceView = () => {
  const threatStats = getMockThreatStats();
  const logs = getMockThreatLogs();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Threat Intelligence Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {Object.entries(threatStats).map(([type, count]) => (
            <div key={type} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 capitalize">{type}</h3>
              <p className="mt-2 text-2xl font-semibold text-gray-900">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Update Manager View
export const UpdateManagerView = () => {
  const systemStatus = getMockSystemStatus();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Update Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Engine Version</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">{systemStatus.engineVersion}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Definition Version</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">{systemStatus.definitionVersion}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Last Update</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {new Date(systemStatus.lastUpdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compliance Report View
export const ComplianceReportView = () => {
  const systemStatus = getMockSystemStatus();
  const threatStats = getMockThreatStats();
  
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Compliance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Overall Status</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">
              {systemStatus.realTimeProtection ? 'Compliant' : 'Non-Compliant'}
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Last Audit</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">
              {new Date(systemStatus.lastUpdate).toLocaleDateString()}
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Findings</h3>
            <p className="mt-2 text-2xl font-semibold text-yellow-600">
              {Object.values(threatStats).reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Next Audit Due</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {new Date(systemStatus.nextScheduledScan).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// System Status View
export const SystemStatusView = () => {
  const systemStatus = getMockSystemStatus();
  const performanceMetrics = getMockPerformanceMetrics();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Protection Status</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">
              {systemStatus.realTimeProtection ? 'Active' : 'Inactive'}
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Engine Version</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">
              {systemStatus.engineVersion}
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Definition Version</h3>
            <p className="mt-2 text-2xl font-semibold text-yellow-600">
              {systemStatus.definitionVersion}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Last Update</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {new Date(systemStatus.lastUpdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">System Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">CPU Usage</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">
              {performanceMetrics.cpu}%
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Memory Usage</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">
              {performanceMetrics.memory}%
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Active Processes</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {performanceMetrics.activeProcesses}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Firewall Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className="mt-2 text-2xl font-semibold text-blue-600">
              {systemStatus.firewallStatus ? 'Active' : 'Inactive'}
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Next Scan</h3>
            <p className="mt-2 text-2xl font-semibold text-green-600">
              {new Date(systemStatus.nextScheduledScan).toLocaleDateString()}
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Last Scan</h3>
            <p className="mt-2 text-2xl font-semibold text-purple-600">
              {new Date(systemStatus.lastUpdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 