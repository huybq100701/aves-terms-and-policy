export const appInfo = {
  appName: 'AvesOS',
  companyName: 'Aves',
  companyLegalNameVi: 'Công ty Cổ phần Công nghệ và Năng lượng xanh Aves',
  companyLegalNameEn: 'Aves Technology and Green Energy Joint Stock Company', // TODO: đối chiếu tên tiếng Anh trên ĐKKD
  taxCode: '0111625399',
  appId: 'tech.aves.avesos', // bundle ID (iOS) và package name (Android) giống nhau
  supportEmail: 'info@aves.tech',
  websiteUrl: 'https://aves.tech',
  websiteDomain: 'aves.tech',
  phone: '0914 567 198', // TODO: xác nhận số hotline chính thức (comment C1886 trong file điều khoản)
  address:
    'Room 2404-2405, Vinaconex Diamond Tower, 459C Bach Mai Street, Bach Mai Ward, Hanoi, Vietnam',
  addressVi:
    'Phòng 2404-2405, Tòa nhà Vinaconex Diamond Tower, số 459C phố Bạch Mai, Phường Bạch Mai, ' +
    'Thành phố Hà Nội, Việt Nam',
  effectiveDate: '2026-10-11',
  lastUpdated: '2026-10-11',
  appVersion: '0.0.7',
  dataRetentionDays: 90,
  accountDeletionDays: 30,
} as const;

export type AppInfo = typeof appInfo;

/** Formats an ISO date (yyyy-mm-dd) as dd/mm/yyyy for use inside document text. */
export function docDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
