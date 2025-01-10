import type { SystemStatus, ThreatLog, ScanHistory, QuarantineItem, ThreatStats } from './types/dashboard';

export const getMockSystemStatus = (): SystemStatus => ({
  status: 'healthy',
  lastScan: new Date().toISOString(),
  threatsDetected: 12,
  threatsQuarantined: 8,
  threatsRemoved: 4,
  scanProgress: 45,
  definitionVersion: '1.0.234',
  engineVersion: '2.1.567',
  lastUpdate: new Date(Date.now() - 86400000).toISOString(),
  nextScheduledScan: new Date(Date.now() + 86400000).toISOString(),
  realTimeProtection: true,
  firewallStatus: true
});

export const getMockThreatLogs = (): ThreatLog[] => [
  {
    id: '1',
    timestamp: new Date().toISOString(),
    type: 'Malware',
    severity: 'high',
    status: 'quarantined',
    message: 'Suspicious executable detected in downloads folder',
    filePath: 'C:\\Users\\Admin\\Downloads\\suspicious.exe',
    hash: 'a1b2c3d4e5f6g7h8i9j0'
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    type: 'Ransomware',
    severity: 'critical',
    status: 'removed',
    message: 'Ransomware attempt blocked',
    filePath: 'C:\\Users\\Admin\\AppData\\Local\\Temp\\ransom.exe',
    hash: 'b2c3d4e5f6g7h8i9j0k1'
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    type: 'Trojan',
    severity: 'medium',
    status: 'active',
    message: 'Potential trojan detected in system32',
    filePath: 'C:\\Windows\\System32\\trojan.dll',
    hash: 'c3d4e5f6g7h8i9j0k1l2'
  },
];

export const getMockScanHistory = (): ScanHistory[] => [
  {
    id: '1',
    startTime: new Date(Date.now() - 3600000).toISOString(),
    endTime: new Date().toISOString(),
    threatsFound: 3,
    status: 'completed',
    type: 'quick',
  },
  {
    id: '2',
    startTime: new Date(Date.now() - 86400000).toISOString(),
    endTime: new Date(Date.now() - 82800000).toISOString(),
    threatsFound: 0,
    status: 'completed',
    type: 'full',
  },
  {
    id: '3',
    startTime: new Date(Date.now() - 172800000).toISOString(),
    endTime: new Date(Date.now() - 169200000).toISOString(),
    threatsFound: 1,
    status: 'failed',
    type: 'custom',
  },
];

export const getMockQuarantineItems = (): QuarantineItem[] => [
  {
    id: '1',
    fileName: 'suspicious.exe',
    path: 'C:\\Users\\Admin\\Downloads\\suspicious.exe',
    quarantinedAt: new Date().toISOString(),
    threatType: 'Malware',
    size: 1024576,
    hash: 'a1b2c3d4e5f6g7h8i9j0',
  },
  {
    id: '2',
    fileName: 'trojan.dll',
    path: 'C:\\Windows\\System32\\trojan.dll',
    quarantinedAt: new Date(Date.now() - 3600000).toISOString(),
    threatType: 'Trojan',
    size: 512000,
    hash: 'k1l2m3n4o5p6q7r8s9t0',
  },
];

export const getMockThreatStats = (): ThreatStats => ({
  malware: 45,
  phishing: 23,
  ransomware: 12,
  spyware: 34,
  other: 8
});

export const getMockPerformanceMetrics = () => ({
  cpuUsage: 12,
  memoryUsage: 256,
  diskUsage: 45,
  cpu: 12,
  memory: 45,
  activeProcesses: 128,
  scanSpeed: 1024
});

export const getMockNetworkStatus = () => ({
  inboundConnections: 156,
  outboundConnections: 89,
  blockedConnections: 23,
  activeThreats: 5,
  firewallRules: 142
});

export const getMockScheduledScans = () => [
  {
    id: '1',
    scheduledTime: new Date(Date.now() + 86400000).toISOString(),
    type: 'full',
    status: 'scheduled',
    statistics: {
      threatsFound: 0,
      filesScanned: 0
    }
  },
  {
    id: '2',
    scheduledTime: new Date(Date.now() + 172800000).toISOString(),
    type: 'quick',
    status: 'scheduled',
    statistics: {
      threatsFound: 0,
      filesScanned: 0
    }
  }
]; 