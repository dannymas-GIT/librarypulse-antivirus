export const getMockThreatLogs = () => {
  return [
    {
      id: '1',
      timestamp: new Date().getTime() - 1000 * 60 * 5,
      type: 'malware' as const,
      severity: 'critical' as const,
      status: 'quarantined' as const,
      filePath: 'C:\\Users\\Admin\\Downloads\\suspicious.exe',
      hash: 'a1b2c3d4e5f6g7h8i9j0',
    },
    {
      id: '2',
      timestamp: new Date().getTime() - 1000 * 60 * 15,
      type: 'ransomware' as const,
      severity: 'critical' as const,
      status: 'quarantined' as const,
      filePath: 'C:\\Program Files\\App\\infected.dll',
      hash: 'k1l2m3n4o5p6q7r8s9t0',
    },
    {
      id: '3',
      timestamp: new Date().getTime() - 1000 * 60 * 30,
      type: 'spyware' as const,
      severity: 'high' as const,
      status: 'quarantined' as const,
      filePath: 'C:\\Windows\\System32\\compromised.sys',
      hash: 'u1v2w3x4y5z6a7b8c9d0',
    },
  ];
};

export const getMockSystemStatus = () => {
  return {
    realTimeProtection: true,
    engineVersion: '15.0.1',
    definitionVersion: '1.0.567',
    lastUpdate: new Date().toISOString(),
    nextScheduledScan: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours from now
    firewallStatus: true,
  };
};

export const getMockThreatStats = () => {
  try {
    return {
      malware: 12,
      phishing: 5,
      ransomware: 2,
      spyware: 8,
      adware: 15
    };
  } catch (error) {
    console.error('Error getting mock threat stats:', error);
    return {
      malware: 0,
      phishing: 0,
      ransomware: 0,
      spyware: 0,
      adware: 0
    };
  }
};

export const getMockPerformanceMetrics = () => {
  try {
    return {
      cpu: 25,
      memory: 45,
      disk: 60,
      activeProcesses: 128,
      scanSpeed: 1000,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error getting mock performance metrics:', error);
    return {
      cpu: 0,
      memory: 0,
      disk: 0,
      activeProcesses: 0,
      scanSpeed: 0,
      timestamp: new Date().toISOString()
    };
  }
};

export const getMockScheduledScans = () => {
  try {
    return [
      {
        id: '1',
        type: 'full' as const,
        startTime: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
        duration: 45,
        filesScanned: 50000,
        threatsFound: 2,
        status: 'completed' as const,
        statistics: {
          threatsFound: 2,
          filesScanned: 50000,
          scanDuration: 45
        }
      },
      {
        id: '2',
        type: 'quick' as const,
        startTime: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        duration: 15,
        filesScanned: 10000,
        threatsFound: 0,
        status: 'completed' as const,
        statistics: {
          threatsFound: 0,
          filesScanned: 10000,
          scanDuration: 15
        }
      }
    ];
  } catch (error) {
    console.error('Error getting mock scheduled scans:', error);
    return [];
  }
};

export const getMockNetworkStatus = () => {
  try {
    return {
      activeThreats: 3,
      blockedConnections: 150,
      firewallRules: 25,
      inboundConnections: 1250,
      outboundConnections: 890
    };
  } catch (error) {
    console.error('Error getting mock network status:', error);
    return {
      activeThreats: 0,
      blockedConnections: 0,
      firewallRules: 0,
      inboundConnections: 0,
      outboundConnections: 0
    };
  }
}; 