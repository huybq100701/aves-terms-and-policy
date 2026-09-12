import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const { appName, privacyEmail, supportEmail, accountDeletionDays, dataRetentionDays } = appInfo;

export const deletionVi: LegalDoc = {
  title: 'Xóa tài khoản và dữ liệu',
  subtitle: `Hướng dẫn xóa tài khoản ${appName}`,
  intro:
    'Bạn có thể yêu cầu xóa tài khoản và dữ liệu cá nhân bất kỳ lúc nào. Trang này hướng dẫn cách ' +
    'thực hiện và cho biết dữ liệu nào bị xóa, dữ liệu nào được giữ lại và trong bao lâu.',
  sections: [
    {
      id: 'xoa-trong-app',
      title: 'Cách 1: Xóa ngay trong ứng dụng',
      blocks: [
        {
          kind: 'list',
          items: [
            `Mở ứng dụng ${appName} và đăng nhập vào tài khoản của bạn.`,
            'Vào thẻ Tài khoản ở thanh điều hướng dưới cùng.',
            'Chọn Cài đặt, sau đó chọn Xóa tài khoản.',
            'Đọc phần xác nhận, nhập mật khẩu hoặc xác thực sinh trắc học để xác nhận danh tính.',
            'Nhấn xác nhận. Tài khoản sẽ được đánh dấu xóa và bạn được đăng xuất khỏi mọi thiết bị.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Trước khi xóa, hãy kiểm tra',
          text:
            'Nếu bạn đang là chủ sở hữu của xe và có thành viên gia đình đang dùng chung, hãy chuyển ' +
            'quyền sở hữu xe cho người khác trước khi xóa tài khoản. Khi tài khoản chủ xe bị xóa, các ' +
            'thành viên được chia sẻ sẽ mất quyền truy cập xe.',
        },
      ],
    },
    {
      id: 'xoa-qua-email',
      title: 'Cách 2: Gửi yêu cầu qua email',
      blocks: [
        {
          kind: 'p',
          text:
            `Nếu bạn không đăng nhập được vào ứng dụng, hãy gửi email tới ${privacyEmail} với tiêu đề ` +
            '"Yêu cầu xóa tài khoản". Trong email vui lòng ghi rõ email hoặc số điện thoại đã đăng ký. ' +
            'Chúng tôi sẽ xác minh danh tính của bạn trước khi xử lý và phản hồi trong vòng 30 ngày.',
        },
      ],
    },
    {
      id: 'du-lieu-bi-xoa',
      title: 'Dữ liệu bị xóa',
      blocks: [
        {
          kind: 'list',
          items: [
            'Thông tin tài khoản: họ tên, email, số điện thoại, ảnh đại diện, mật khẩu.',
            'Xe đã liên kết, thông tin và cấu hình xe do bạn tạo.',
            'Lịch sử chuyến đi, lịch sử vị trí và các điểm đến đã lưu.',
            'Danh bạ liên hệ khẩn cấp.',
            'Thành viên gia đình và các lời mời chia sẻ.',
            'Lịch sạc, cài đặt cảnh báo và tùy chọn cá nhân.',
            'Mã thiết bị nhận thông báo đẩy.',
          ],
        },
        {
          kind: 'p',
          text: `Toàn bộ dữ liệu trên được xóa trong vòng ${accountDeletionDays} ngày kể từ khi yêu cầu được xác nhận.`,
        },
      ],
    },
    {
      id: 'du-lieu-giu-lai',
      title: 'Dữ liệu được giữ lại',
      blocks: [
        {
          kind: 'list',
          items: [
            `Log kỹ thuật và log sự cố ở dạng không định danh, giữ tối đa ${dataRetentionDays} ngày để phục vụ bảo mật và gỡ lỗi.`,
            'Dữ liệu thống kê đã tổng hợp và không thể truy lại về cá nhân bạn.',
            'Dữ liệu mà pháp luật hoặc cơ quan có thẩm quyền yêu cầu chúng tôi lưu giữ, chỉ trong đúng thời hạn bắt buộc.',
            'Dữ liệu xe thuộc về chủ sở hữu khác, ví dụ khi bạn chỉ là thành viên được chia sẻ.',
          ],
        },
      ],
    },
    {
      id: 'luu-y',
      title: 'Lưu ý quan trọng',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Không thể hoàn tác',
          text:
            'Sau khi xóa, dữ liệu không thể phục hồi. Nếu muốn dùng lại dịch vụ, bạn cần tạo tài khoản ' +
            'mới và liên kết lại xe từ đầu.',
        },
        {
          kind: 'p',
          text: `Nếu cần hỗ trợ trong quá trình xóa tài khoản, vui lòng liên hệ ${supportEmail}.`,
        },
      ],
    },
  ],
};

export const deletionEn: LegalDoc = {
  title: 'Account and data deletion',
  subtitle: `How to delete your ${appName} account`,
  intro:
    'You can request deletion of your account and personal data at any time. This page explains how ' +
    'to do it, and which data is erased, which is retained, and for how long.',
  sections: [
    {
      id: 'delete-in-app',
      title: 'Option 1: Delete from within the app',
      blocks: [
        {
          kind: 'list',
          items: [
            `Open the ${appName} app and sign in to your account.`,
            'Go to the Account tab in the bottom navigation bar.',
            'Open Settings, then choose Delete account.',
            'Read the confirmation, then enter your password or pass biometric authentication to confirm your identity.',
            'Confirm. Your account is marked for deletion and you are signed out on every device.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Check this before you delete',
          text:
            'If you own a vehicle that family members currently share, transfer ownership to someone ' +
            'else before deleting your account. When an owner account is deleted, shared members lose ' +
            'access to that vehicle.',
        },
      ],
    },
    {
      id: 'delete-by-email',
      title: 'Option 2: Request deletion by email',
      blocks: [
        {
          kind: 'p',
          text:
            `If you cannot sign in, email ${privacyEmail} with the subject "Account deletion request". ` +
            'Include the email address or phone number registered to the account. We verify your identity ' +
            'before acting and respond within 30 days.',
        },
      ],
    },
    {
      id: 'data-deleted',
      title: 'Data that is deleted',
      blocks: [
        {
          kind: 'list',
          items: [
            'Account information: name, email, phone number, profile photo, password.',
            'Linked vehicles and the vehicle details and configuration you created.',
            'Trip history, location history and saved destinations.',
            'Emergency contact list.',
            'Family members and sharing invitations.',
            'Charge schedules, alert settings and personal preferences.',
            'Push notification device token.',
          ],
        },
        {
          kind: 'p',
          text: `All of the above is erased within ${accountDeletionDays} days of a confirmed request.`,
        },
      ],
    },
    {
      id: 'data-retained',
      title: 'Data that is retained',
      blocks: [
        {
          kind: 'list',
          items: [
            `De-identified technical and crash logs, kept for at most ${dataRetentionDays} days for security and debugging.`,
            'Aggregated statistics that can no longer be traced back to you.',
            'Data we are required to keep by law or by a competent authority, and only for the mandated period.',
            'Vehicle data belonging to another owner, for example where you were only a shared member.',
          ],
        },
      ],
    },
    {
      id: 'important',
      title: 'Important',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'This cannot be undone',
          text:
            'Once deleted, your data cannot be recovered. To use the service again you will need to ' +
            'create a new account and pair your vehicle from scratch.',
        },
        { kind: 'p', text: `If you need help with deletion, contact ${supportEmail}.` },
      ],
    },
  ],
};
