export interface ThreatStats {
  [key: string]: number;
}

export interface SystemStatus {
  realTimeProtection: boolean;
  lastUpdate: number;
  engineVersion: string;
  definitionVersion: string;
  firewallStatus: boolean;
  nextScheduledScan: number;
}

export interface ScanHistory {
  id: string;
  startTime: number;
  endTime: number;
  status: 'completed' | 'failed' | 'in-progress';
  type: 'full' | 'quick' | 'custom';
  statistics?: {
    scannedFiles: number;
    threatsFound: number;
    cleanedFiles: number;
  };
}

export interface ThreatLog {
  id: string;
  timestamp: number;
  type: 'malware' | 'ransomware' | 'phishing';
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'quarantined' | 'removed' | 'active';
  filePath: string;
  hash: string;
  message: string;
}

export interface ResourceUsage {
  cpu: number;
  memory: number;
  disk: number;
  timestamp: string;
}

export interface DailyStats {
  date: string;
  scansPerformed: number;
  threatsDetected: number;
  filesScanned: number;
}

export interface PerformanceMetrics {
  cpu: number;
  memory: number;
  activeProcesses: number;
  scanSpeed: number;
}

export interface NetworkStatus {
  activeThreats: number;
  blockedConnections: number;
  firewallRules: number;
  inboundConnections: number;
  outboundConnections: number;
} 