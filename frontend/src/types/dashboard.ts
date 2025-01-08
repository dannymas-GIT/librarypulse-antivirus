export interface ThreatStats {
  malware: number;
  phishing: number;
  ransomware: number;
  spyware: number;
  adware: number;
}

export interface SystemStatus {
  definitionVersion: string;
  engineVersion: string;
  lastUpdate: string;
  nextScheduledScan: string;
  realTimeProtection: boolean;
  firewallStatus: boolean;
}

export interface ScanHistory {
  id: string;
  type: 'quick' | 'full' | 'custom';
  startTime: string;
  duration: number; // in minutes
  filesScanned: number;
  threatsFound: number;
  status: 'completed' | 'failed' | 'cancelled';
  statistics: {
    threatsFound: number;
    filesScanned: number;
    scanDuration: number;
  };
}

export interface ThreatLog {
  id: string;
  timestamp: string;
  type: keyof ThreatStats;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'detected' | 'quarantined' | 'removed' | 'allowed';
  filePath: string;
  hash: string;
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