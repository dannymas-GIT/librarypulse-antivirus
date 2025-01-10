export interface SystemStatus {
  status: 'healthy' | 'warning' | 'error';
  lastScan: string;
  threatsDetected: number;
  threatsQuarantined: number;
  threatsRemoved: number;
  scanProgress?: number;
  definitionVersion: string;
  engineVersion: string;
  lastUpdate: string;
  nextScheduledScan: string;
  realTimeProtection: boolean;
  firewallStatus: boolean;
}

export interface ThreatLog {
  id: string;
  timestamp: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'quarantined' | 'removed' | 'active';
  message: string;
  filePath: string;
  hash: string;
}

export interface ScanHistory {
  id: string;
  startTime: string;
  endTime: string;
  threatsFound: number;
  status: 'completed' | 'failed' | 'cancelled';
  type: 'full' | 'quick' | 'custom';
}

export interface QuarantineItem {
  id: string;
  fileName: string;
  path: string;
  quarantinedAt: string;
  threatType: string;
  size: number;
  hash: string;
}

export interface ThreatStats {
  malware: number;
  phishing: number;
  ransomware: number;
  spyware: number;
  other: number;
} 