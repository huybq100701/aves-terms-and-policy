export const appInfo = {
  appName: 'AvesOS',
  companyName: 'AIBOX Vision',
  companyNameVi: 'Công ty AIBOX Vision',
  iosBundleId: 'tech.aves.avesos',
  androidPackage: 'com.aiboxvision.aves',
  supportEmail: 'info@aves.tech',
  privacyEmail: 'privacy@aiboxvision.com',
  websiteUrl: 'https://aiboxvision.com',
  address: '', // điền địa chỉ đăng ký kinh doanh trước khi submit store
  addressVi: '',
  effectiveDate: '2026-09-12',
  lastUpdated: '2026-09-12',
  appVersion: '0.0.7',
  dataRetentionDays: 90,
  accountDeletionDays: 30,
} as const;

export type AppInfo = typeof appInfo;
