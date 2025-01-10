import { Shield, AlertTriangle, Activity } from 'lucide-react';
import type { SystemStatus } from '../../types/dashboard';

interface OverviewProps {
  status: SystemStatus;
}

const statusIcons = {
  healthy: Shield,
  warning: AlertTriangle,
  error: AlertTriangle
};

const statusColors = {
  healthy: 'text-green-500',
  warning: 'text-yellow-500',
  error: 'text-red-500'
};

export const DashboardOverview = ({ status }: OverviewProps) => {
  const StatusIcon = statusIcons[status.status];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">System Status</p>
            <div className="mt-2 flex items-center">
              <StatusIcon className={`h-5 w-5 ${statusColors[status.status]}`} />
              <p className="ml-2 text-2xl font-semibold capitalize">{status.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Last Scan</p>
            <p className="mt-2 text-2xl font-semibold">
              {new Date(status.lastScan).toLocaleString()}
            </p>
          </div>
          <Activity className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Threats</p>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Detected</span>
                <span className="text-sm font-medium">{status.threatsDetected}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Quarantined</span>
                <span className="text-sm font-medium">{status.threatsQuarantined}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Removed</span>
                <span className="text-sm font-medium">{status.threatsRemoved}</span>
              </div>
            </div>
          </div>
          <Shield className="h-8 w-8 text-indigo-500" />
        </div>
      </div>

      {status.scanProgress !== undefined && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Scan Progress</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${status.scanProgress}%` }}
                  />
                </div>
                <p className="mt-2 text-lg font-semibold">{status.scanProgress}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 