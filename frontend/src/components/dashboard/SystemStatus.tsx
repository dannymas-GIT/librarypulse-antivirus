import { Shield, Clock, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { SystemStatus as SystemStatusType } from '../../types/dashboard';

interface StatusBadgeProps {
  status: boolean;
  label: string;
}

const StatusBadge = ({ status, label }: StatusBadgeProps) => (
  <div className="flex items-center">
    {status ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    )}
    <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
  </div>
);

interface SystemStatusProps {
  status: SystemStatusType;
}

export const SystemStatus = ({ status }: SystemStatusProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Shield className="h-6 w-6 text-primary-500" />
        <h2 className="ml-2 text-lg font-semibold text-gray-900">System Status</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Definition Version</p>
          <div className="flex items-center mt-1">
            <RefreshCw className="h-4 w-4 text-gray-400" />
            <p className="ml-2 text-sm font-medium text-gray-900">{status.definitionVersion}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Engine Version</p>
          <p className="mt-1 text-sm font-medium text-gray-900">{status.engineVersion}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Last Update</p>
          <div className="flex items-center mt-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <p className="ml-2 text-sm font-medium text-gray-900">
              {new Date(status.lastUpdate).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Next Scheduled Scan</p>
          <div className="flex items-center mt-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <p className="ml-2 text-sm font-medium text-gray-900">
              {new Date(status.nextScheduledScan).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 pt-4 border-t border-gray-200">
        <StatusBadge status={status.realTimeProtection} label="Real-time Protection" />
        <StatusBadge status={status.firewallStatus} label="Firewall Protection" />
      </div>
    </div>
  );
}; 