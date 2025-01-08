import { ThreatStats, SystemStatus, ThreatLog, ScanHistory } from '../types/dashboard';

export const getMockThreatStats = (): ThreatStats => ({
  malware: 45,
  phishing: 23,
  ransomware: 12,
  spyware: 34,
  adware: 67
});

export const getMockSystemStatus = (): SystemStatus => ({
  definitionVersion: '2023.12.1',
  engineVersion: '15.0.4',
  lastUpdate: '2023-12-10 08:30:00',
  nextScheduledScan: '2023-12-11 02:00:00',
  realTimeProtection: true,
  firewallStatus: true
});

export const getMockThreatLogs = (): ThreatLog[] => [
  {
    id: '1',
    timestamp: '2023-12-10T10:30:00',
    type: 'malware',
    severity: 'high',
    status: 'quarantined',
    filePath: '/downloads/suspicious.exe',
    hash: 'a1b2c3d4e5f6'
  },
  {
    id: '2',
    timestamp: '2023-12-10T09:15:00',
    type: 'ransomware',
    severity: 'critical',
    status: 'quarantined',
    filePath: '/documents/encrypted.doc',
    hash: 'b2c3d4e5f6g7'
  },
  {
    id: '3',
    timestamp: '2023-12-10T08:45:00',
    type: 'phishing',
    severity: 'medium',
    status: 'detected',
    filePath: '/downloads/invoice.pdf',
    hash: 'c3d4e5f6g7h8'
  }
];

export interface PerformanceMetrics {
  cpu: number;
  memory: number;
  disk: number;
  scanSpeed: number;
  activeProcesses: number;
  historicalData: {
    timestamp: string;
    cpu: number;
    memory: number;
    disk: number;
  }[];
}

export const getMockPerformanceMetrics = (): PerformanceMetrics => ({
  cpu: 35,
  memory: 45,
  disk: 28,
  scanSpeed: 150,
  activeProcesses: 3,
  historicalData: [
    { timestamp: '2023-12-10T10:00:00', cpu: 32, memory: 42, disk: 25 },
    { timestamp: '2023-12-10T09:00:00', cpu: 38, memory: 48, disk: 30 },
    { timestamp: '2023-12-10T08:00:00', cpu: 28, memory: 40, disk: 22 },
    { timestamp: '2023-12-10T07:00:00', cpu: 45, memory: 52, disk: 35 }
  ]
});

export interface NetworkStatus {
  inboundConnections: number;
  outboundConnections: number;
  blockedConnections: number;
  activeThreats: number;
  firewallRules: number;
  recentConnections: {
    timestamp: string;
    type: 'inbound' | 'outbound';
    status: 'allowed' | 'blocked';
    source: string;
    destination: string;
    port: number;
  }[];
}

export const getMockNetworkStatus = (): NetworkStatus => ({
  inboundConnections: 245,
  outboundConnections: 189,
  blockedConnections: 23,
  activeThreats: 5,
  firewallRules: 48,
  recentConnections: [
    {
      timestamp: '2023-12-10T10:28:00',
      type: 'inbound',
      status: 'blocked',
      source: '192.168.1.105',
      destination: '192.168.1.1',
      port: 443
    },
    {
      timestamp: '2023-12-10T10:27:30',
      type: 'outbound',
      status: 'allowed',
      source: '192.168.1.1',
      destination: '8.8.8.8',
      port: 53
    }
  ]
});

export interface QuarantineItem {
  id: string;
  fileName: string;
  threatType: keyof ThreatStats;
  detectedOn: string;
  size: string;
  status: 'quarantined' | 'restored' | 'deleted';
  details: {
    originalLocation: string;
    hash: string;
    signature: string;
    detectionEngine: string;
  };
}

export const getMockQuarantineItems = (): QuarantineItem[] => [
  {
    id: '1',
    fileName: 'malicious.exe',
    threatType: 'malware',
    detectedOn: '2023-12-10T08:45:00',
    size: '2.4 MB',
    status: 'quarantined',
    details: {
      originalLocation: '/downloads/malicious.exe',
      hash: 'a1b2c3d4e5f6',
      signature: 'Trojan.Generic.123',
      detectionEngine: 'Static Analysis'
    }
  },
  {
    id: '2',
    fileName: 'ransomware.bin',
    threatType: 'ransomware',
    detectedOn: '2023-12-10T07:30:00',
    size: '1.8 MB',
    status: 'quarantined',
    details: {
      originalLocation: '/temp/ransomware.bin',
      hash: 'b2c3d4e5f6g7',
      signature: 'Ransom.Cryptor.456',
      detectionEngine: 'Behavioral Analysis'
    }
  }
];

export interface ThreatIntel {
  globalThreats: {
    region: string;
    threatCount: number;
    topThreat: keyof ThreatStats;
    recentIncidents: number;
    riskLevel: 'low' | 'medium' | 'high';
  }[];
  emergingThreats: {
    name: string;
    type: keyof ThreatStats;
    severity: 'low' | 'medium' | 'high' | 'critical';
    firstSeen: string;
    affectedSystems: string[];
    indicators: string[];
  }[];
  threatTrends: {
    period: string;
    malwareCount: number;
    phishingCount: number;
    ransomwareCount: number;
  }[];
}

export const getMockThreatIntel = (): ThreatIntel => ({
  globalThreats: [
    {
      region: 'North America',
      threatCount: 1245,
      topThreat: 'ransomware',
      recentIncidents: 89,
      riskLevel: 'high'
    },
    {
      region: 'Europe',
      threatCount: 892,
      topThreat: 'phishing',
      recentIncidents: 67,
      riskLevel: 'medium'
    },
    {
      region: 'Asia Pacific',
      threatCount: 1567,
      topThreat: 'malware',
      recentIncidents: 112,
      riskLevel: 'high'
    }
  ],
  emergingThreats: [
    {
      name: 'NewRansomware.2023',
      type: 'ransomware',
      severity: 'high',
      firstSeen: '2023-12-09T00:00:00',
      affectedSystems: ['Windows 11', 'Windows 10', 'Windows Server 2019'],
      indicators: [
        'Encrypts files with .encrypted extension',
        'Creates ransom note in each folder',
        'Attempts to disable Windows Defender'
      ]
    },
    {
      name: 'StealthMalware.2023',
      type: 'malware',
      severity: 'critical',
      firstSeen: '2023-12-08T00:00:00',
      affectedSystems: ['All Windows versions'],
      indicators: [
        'Hides in system processes',
        'Modifies system registry',
        'Creates persistent backdoor'
      ]
    }
  ],
  threatTrends: [
    { period: '2023-12-10', malwareCount: 234, phishingCount: 156, ransomwareCount: 45 },
    { period: '2023-12-09', malwareCount: 198, phishingCount: 167, ransomwareCount: 52 },
    { period: '2023-12-08', malwareCount: 245, phishingCount: 134, ransomwareCount: 38 }
  ]
});

export interface ScheduledScan {
  id: string;
  type: 'quick' | 'full' | 'custom';
  schedule: {
    frequency: 'daily' | 'weekly' | 'monthly';
    time: string;
    nextRun: string;
  };
  lastRun: string | null;
  status: 'pending' | 'active' | 'completed' | 'failed';
  statistics: {
    duration: number;
    filesScanned: number;
    threatsFound: number;
    resourceUsage: {
      avgCpu: number;
      avgMemory: number;
      avgDisk: number;
    };
  };
}

export const getMockScheduledScans = (): ScheduledScan[] => [
  {
    id: '1',
    type: 'quick',
    schedule: {
      frequency: 'daily',
      time: '02:00',
      nextRun: '2023-12-11T02:00:00'
    },
    lastRun: '2023-12-10T02:00:00',
    status: 'completed',
    statistics: {
      duration: 15,
      filesScanned: 50000,
      threatsFound: 2,
      resourceUsage: {
        avgCpu: 25,
        avgMemory: 30,
        avgDisk: 15
      }
    }
  },
  {
    id: '2',
    type: 'full',
    schedule: {
      frequency: 'weekly',
      time: '03:00',
      nextRun: '2023-12-17T03:00:00'
    },
    lastRun: '2023-12-03T03:00:00',
    status: 'completed',
    statistics: {
      duration: 120,
      filesScanned: 250000,
      threatsFound: 5,
      resourceUsage: {
        avgCpu: 40,
        avgMemory: 45,
        avgDisk: 25
      }
    }
  }
]; 