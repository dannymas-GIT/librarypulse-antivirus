import { DashboardOverview } from './components/dashboard/Overview';
import { SystemStatus } from './types/dashboard';

const mockStatus: SystemStatus = {
  status: 'healthy',
  lastScan: new Date().toISOString(),
  threatsDetected: 0,
  threatsQuarantined: 0,
  threatsRemoved: 0,
  scanProgress: 100,
  definitionVersion: '1.0.234',
  engineVersion: '2.1.567',
  lastUpdate: new Date().toISOString(),
  nextScheduledScan: new Date().toISOString(),
  realTimeProtection: true,
  firewallStatus: true
};

const App = () => {
  return (
    <div className="App">
      <DashboardOverview status={mockStatus} />
    </div>
  );
};

export default App; 