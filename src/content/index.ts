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
  companyLabel: string;
  taxCodeLabel: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
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
    homeTermsDesc:
      'Điều kiện giao dịch chung khi sử dụng Nền tảng AVES, Dịch Vụ Trạm Sạc và Dịch Vụ Đổi Pin: ' +
      'tài khoản, phí, thanh toán và trách nhiệm các bên.',
    homePrivacyDesc:
      'Chính sách bảo vệ dữ liệu cá nhân: dữ liệu được xử lý, mục đích, cách thức xử lý và quyền của bạn.',
    homeDeletionDesc: 'Hướng dẫn xóa tài khoản, danh sách dữ liệu bị xóa và dữ liệu được giữ lại.',
    read: 'Xem tài liệu',
    contactTitle: 'Cần hỗ trợ?',
    contactLead: 'Liên hệ với chúng tôi qua các kênh dưới đây.',
    companyLabel: 'Công ty',
    taxCodeLabel: 'Mã số thuế:',
    emailLabel: 'Email',
    phoneLabel: 'Điện thoại',
    addressLabel: 'Địa chỉ liên hệ',
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
    homeTermsDesc:
      'General terms for using the AVES Platform, the Charging Station Service and the Battery Swap ' +
      'Service: accounts, fees, payment and each party\'s responsibilities.',
    homePrivacyDesc:
      'Personal data protection policy: what data is processed, why, how, and what rights you have.',
    homeDeletionDesc: 'How to delete your account, what data is erased and what is retained.',
    read: 'Read document',
    contactTitle: 'Need help?',
    contactLead: 'Reach us through the channels below.',
    companyLabel: 'Company',
    taxCodeLabel: 'Tax code:',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    appLabel: 'App details',
    notFound: 'Page not found',
    notFoundLead: 'The address you opened does not exist.',
    goHome: 'Go to home',
    footerNote: 'This document applies to app version',
  },
};

export type { Lang, LegalDoc } from './types';
