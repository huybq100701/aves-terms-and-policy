export const appInfo = {
  appName: 'AvesOS',
  companyName: 'Aves',
  companyNameVi: 'Công ty Aves',
  iosBundleId: 'tech.aves.avesos',
  androidPackage: 'com.aiboxvision.aves',
  supportEmail: 'info@aves.tech',
  privacyEmail: 'privacy@aves.tech',
  websiteUrl: 'https://aves.tech',
  address: '', // điền địa chỉ đăng ký kinh doanh trước khi submit store
  addressVi: '',
  effectiveDate: '2026-09-12',
  lastUpdated: '2026-09-12',
  appVersion: '0.0.7',
  dataRetentionDays: 90,
  accountDeletionDays: 30,
} as const;

export type AppInfo = typeof appInfo;
