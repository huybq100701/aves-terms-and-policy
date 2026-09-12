import { privacyVi } from './privacy.vi';
import { privacyEn } from './privacy.en';
import { termsVi } from './terms.vi';
import { termsEn } from './terms.en';
import { deletionVi, deletionEn } from './deletion';
import type { Lang, LegalDoc } from './types';

export type DocKey = 'terms' | 'privacy' | 'deletion';

export const docs: Record<DocKey, Record<Lang, LegalDoc>> = {
  terms: { vi: termsVi, en: termsEn },
  privacy: { vi: privacyVi, en: privacyEn },
  deletion: { vi: deletionVi, en: deletionEn },
};

export type UiStrings = {
  brandTag: string;
  navTerms: string;
  navPrivacy: string;
  navDeletion: string;
  effective: string;
  updated: string;
  contents: string;
  backToTop: string;
  print: string;
  langLabel: string;
  homeTitle: string;
  homeLead: string;
  homeTermsDesc: string;
  homePrivacyDesc: string;
  homeDeletionDesc: string;
  read: string;
  contactTitle: string;
  contactLead: string;
  supportLabel: string;
  privacyLabel: string;
  appLabel: string;
  notFound: string;
  notFoundLead: string;
  goHome: string;
  footerNote: string;
};

export const ui: Record<Lang, UiStrings> = {
  vi: {
    brandTag: 'Trung tâm pháp lý',
    navTerms: 'Điều khoản sử dụng',
    navPrivacy: 'Chính sách bảo mật',
    navDeletion: 'Xóa tài khoản',
    effective: 'Có hiệu lực từ',
    updated: 'Cập nhật lần cuối',
    contents: 'Nội dung',
    backToTop: 'Về đầu trang',
    print: 'In hoặc lưu PDF',
    langLabel: 'Ngôn ngữ',
    homeTitle: 'Trung tâm pháp lý',
    homeLead:
      'Các tài liệu pháp lý dành cho ứng dụng di động. Chọn tài liệu bạn muốn xem; mọi trang đều có ' +
      'sẵn bản tiếng Việt và tiếng Anh.',
    homeTermsDesc: 'Quyền và nghĩa vụ khi sử dụng ứng dụng, quy định an toàn và giới hạn trách nhiệm.',
    homePrivacyDesc: 'Dữ liệu chúng tôi thu thập, lý do thu thập, cách chia sẻ và quyền của bạn.',
    homeDeletionDesc: 'Hướng dẫn xóa tài khoản, danh sách dữ liệu bị xóa và dữ liệu được giữ lại.',
    read: 'Xem tài liệu',
    contactTitle: 'Cần hỗ trợ?',
    contactLead: 'Liên hệ với chúng tôi qua các kênh dưới đây.',
    supportLabel: 'Hỗ trợ chung',
    privacyLabel: 'Về dữ liệu cá nhân',
    appLabel: 'Thông tin ứng dụng',
    notFound: 'Không tìm thấy trang',
    notFoundLead: 'Đường dẫn bạn truy cập không tồn tại.',
    goHome: 'Về trang chủ',
    footerNote: 'Tài liệu này áp dụng cho phiên bản ứng dụng',
  },
  en: {
    brandTag: 'Legal centre',
    navTerms: 'Terms of Service',
    navPrivacy: 'Privacy Policy',
    navDeletion: 'Delete account',
    effective: 'Effective from',
    updated: 'Last updated',
    contents: 'Contents',
    backToTop: 'Back to top',
    print: 'Print or save as PDF',
    langLabel: 'Language',
    homeTitle: 'Legal centre',
    homeLead:
      'Legal documents for the mobile application. Pick the document you need; every page is ' +
      'available in both Vietnamese and English.',
    homeTermsDesc: 'Your rights and obligations when using the app, safety rules and liability limits.',
    homePrivacyDesc: 'What data we collect, why, how it is shared, and what rights you have.',
    homeDeletionDesc: 'How to delete your account, what data is erased and what is retained.',
    read: 'Read document',
    contactTitle: 'Need help?',
    contactLead: 'Reach us through the channels below.',
    supportLabel: 'General support',
    privacyLabel: 'Personal data enquiries',
    appLabel: 'App details',
    notFound: 'Page not found',
    notFoundLead: 'The address you opened does not exist.',
    goHome: 'Go to home',
    footerNote: 'This document applies to app version',
  },
};

export type { Lang, LegalDoc } from './types';
