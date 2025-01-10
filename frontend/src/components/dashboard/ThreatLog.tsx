import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import type { ThreatLog } from '../../types/dashboard';
import type { LucideIcon } from 'lucide-react';

interface ThreatLogProps {
  logs: ThreatLog[];
}

const statusIcons: Record<ThreatLog['status'], LucideIcon> = {
  quarantined: Shield,
  removed: CheckCircle,
  active: AlertTriangle
};

const statusColors: Record<ThreatLog['status'], string> = {
  quarantined: 'text-yellow-500',
  removed: 'text-green-500',
  active: 'text-red-500'
};

export const ThreatLogComponent = ({ logs }: ThreatLogProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {logs.map((log) => {
            const StatusIcon = statusIcons[log.status];
            return (
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 ${statusColors[log.status]}`}>
                    <StatusIcon className="w-4 h-4" />
                    <span className="capitalize">{log.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {log.message}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}; 