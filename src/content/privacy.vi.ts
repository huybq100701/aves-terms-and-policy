import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const {
  appName,
  companyNameVi,
  privacyEmail,
  supportEmail,
  dataRetentionDays,
  accountDeletionDays,
} = appInfo;

export const privacyVi: LegalDoc = {
  title: 'Chính sách bảo mật',
  subtitle: `Áp dụng cho ứng dụng di động ${appName}`,
  intro:
    `${companyNameVi} ("chúng tôi") phát triển và vận hành ứng dụng ${appName} — ứng dụng kết nối, ` +
    'theo dõi và điều khiển xe điện hai bánh. Chính sách này giải thích chúng tôi thu thập dữ liệu ' +
    'nào, vì sao thu thập, chia sẻ với ai và bạn có những quyền gì. Bằng việc sử dụng ứng dụng, bạn ' +
    'đồng ý với cách xử lý dữ liệu được mô tả tại đây.',
  sections: [
    {
      id: 'du-lieu-thu-thap',
      title: '1. Dữ liệu chúng tôi thu thập',
      blocks: [
        {
          kind: 'p',
          text:
            'Chúng tôi chỉ thu thập dữ liệu cần thiết để ứng dụng hoạt động. Bảng dưới đây liệt kê ' +
            'từng loại dữ liệu và mục đích sử dụng tương ứng.',
        },
        {
          kind: 'table',
          head: ['Loại dữ liệu', 'Cụ thể', 'Mục đích'],
          rows: [
            [
              'Thông tin tài khoản',
              'Họ tên, email, số điện thoại, ảnh đại diện, mật khẩu đã băm',
              'Tạo và xác thực tài khoản, phục hồi mật khẩu, liên hệ hỗ trợ',
            ],
            [
              'Dữ liệu xe',
              'Tên xe, số VIN/serial, model, trạng thái khóa, mức pin, tình trạng pin (SOH), lịch sạc',
              'Hiển thị trạng thái xe, đồng bộ nhiều thiết bị, chẩn đoán pin',
            ],
            [
              'Vị trí',
              'Vị trí GPS của thiết bị và của xe, lịch sử vị trí, lộ trình chuyến đi',
              'Định vị xe, dẫn đường, tìm trạm sạc gần nhất, lịch sử chuyến đi, cảnh báo chống trộm',
            ],
            [
              'Dữ liệu Bluetooth',
              'Định danh thiết bị BLE của xe, kết quả quét, log kết nối',
              'Kết nối trực tiếp với xe để khóa/mở khóa và đọc thông số',
            ],
            [
              'Camera và thư viện ảnh',
              'Ảnh bạn chủ động chụp hoặc chọn, ảnh quét mã QR',
              'Đặt ảnh đại diện và ảnh xe, quét mã QR chia sẻ xe',
            ],
            [
              'Micro và giọng nói',
              'Đoạn âm thanh khi bạn kích hoạt điều khiển bằng giọng nói',
              'Nhận diện lệnh thoại để khóa, mở khóa, tìm xe',
            ],
            [
              'Danh bạ khẩn cấp',
              'Tên và số điện thoại người liên hệ do bạn tự nhập',
              'Gửi yêu cầu trợ giúp khi có sự cố',
            ],
            [
              'Dữ liệu chia sẻ gia đình',
              'Email hoặc số điện thoại người bạn mời, trạng thái lời mời, quyền truy cập xe',
              'Cho phép thành viên gia đình dùng chung xe',
            ],
            [
              'Thông tin thiết bị và kỹ thuật',
              'Model thiết bị, phiên bản hệ điều hành, phiên bản ứng dụng, mã thiết bị nhận thông báo, log sự cố',
              'Gửi thông báo, phát hiện lỗi, cải thiện độ ổn định',
            ],
            [
              'Dữ liệu sử dụng',
              'Sự kiện trong ứng dụng ở dạng tổng hợp: màn hình đã xem, tính năng đã dùng',
              'Hiểu cách người dùng sử dụng ứng dụng để cải thiện sản phẩm',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Chúng tôi KHÔNG thu thập',
          text:
            'Chúng tôi không thu thập thông tin thanh toán, dữ liệu sức khỏe, danh bạ điện thoại của ' +
            'bạn, tin nhắn SMS hay lịch sử duyệt web. Chúng tôi không bán dữ liệu cá nhân của bạn cho ' +
            'bất kỳ bên thứ ba nào.',
        },
      ],
    },
    {
      id: 'quyen-truy-cap',
      title: '2. Quyền trên thiết bị',
      blocks: [
        {
          kind: 'p',
          text:
            'Ứng dụng xin quyền đúng lúc cần dùng, kèm giải thích rõ ràng. Bạn có thể từ chối hoặc thu ' +
            'hồi bất kỳ quyền nào trong cài đặt hệ thống; khi đó chỉ tính năng liên quan bị ảnh hưởng, ' +
            'phần còn lại của ứng dụng vẫn dùng được.',
        },
        {
          kind: 'table',
          head: ['Quyền', 'Vì sao cần', 'Nếu từ chối'],
          rows: [
            [
              'Vị trí (khi dùng ứng dụng)',
              'Hiển thị vị trí bạn trên bản đồ, dẫn đường tới xe, tìm trạm sạc gần nhất',
              'Không dùng được bản đồ, dẫn đường và tìm trạm sạc',
            ],
            [
              'Bluetooth',
              'Quét, kết nối và gửi lệnh tới xe. Trên Android chúng tôi khai báo cờ neverForLocation vì không dùng Bluetooth để suy ra vị trí của bạn',
              'Không kết nối được xe qua Bluetooth',
            ],
            [
              'Camera',
              'Chụp ảnh đại diện, ảnh xe và quét mã QR chia sẻ xe',
              'Không chụp ảnh hoặc quét QR trong ứng dụng',
            ],
            [
              'Thư viện ảnh',
              'Chọn ảnh có sẵn làm ảnh đại diện hoặc ảnh xe',
              'Chỉ có thể chụp ảnh mới, không chọn được ảnh cũ',
            ],
            [
              'Micro và nhận diện giọng nói',
              'Nghe và hiểu lệnh thoại bạn nói để điều khiển xe',
              'Không dùng được điều khiển bằng giọng nói',
            ],
            [
              'Thông báo',
              'Cảnh báo chống trộm, nhắc sạc, lời mời chia sẻ xe, thông báo hệ thống',
              'Không nhận được cảnh báo, kể cả cảnh báo chống trộm',
            ],
            [
              'Sinh trắc học (Face ID hoặc vân tay)',
              'Mở ứng dụng và xác nhận lệnh quan trọng nhanh, an toàn',
              'Dùng mật khẩu thay thế',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Về dữ liệu sinh trắc học',
          text:
            'Dấu vân tay và dữ liệu Face ID được hệ điều hành xử lý hoàn toàn trên thiết bị. Ứng dụng ' +
            'chỉ nhận kết quả đúng hoặc sai, không bao giờ đọc, lưu hay truyền dữ liệu sinh trắc học.',
        },
      ],
    },
    {
      id: 'vi-tri',
      title: '3. Dữ liệu vị trí — giải thích chi tiết',
      blocks: [
        {
          kind: 'p',
          text:
            'Vị trí là dữ liệu nhạy cảm nhất mà ứng dụng xử lý, nên chúng tôi tách riêng để giải thích rõ.',
        },
        {
          kind: 'list',
          items: [
            'Vị trí thiết bị chỉ được đọc khi ứng dụng đang mở và bạn đang dùng tính năng cần nó, gồm bản đồ, dẫn đường và tìm trạm sạc. Ứng dụng không theo dõi vị trí bạn khi chạy nền.',
            'Vị trí xe do chính xe báo về hệ thống, phục vụ tính năng định vị và chống trộm. Dữ liệu này thuộc về chủ xe.',
            'Lịch sử chuyến đi gồm lộ trình, quãng đường và thời gian được lưu để bạn xem lại. Bạn có thể xóa từng chuyến ngay trong ứng dụng.',
            'Thành viên gia đình được bạn cấp quyền có thể xem vị trí của xe. Bạn có thể thu hồi quyền này bất kỳ lúc nào.',
            'Chúng tôi không dùng vị trí cho mục đích quảng cáo và không chia sẻ vị trí với nhà quảng cáo hay bên môi giới dữ liệu.',
          ],
        },
      ],
    },
    {
      id: 'giong-noi',
      title: '4. Xử lý giọng nói',
      blocks: [
        {
          kind: 'list',
          items: [
            'Micro chỉ bật khi bạn chủ động kích hoạt điều khiển bằng giọng nói. Ứng dụng không nghe liên tục và không có từ khóa đánh thức luôn bật.',
            'Việc chuyển giọng nói thành văn bản do công cụ nhận diện của hệ điều hành (Apple hoặc Google) thực hiện, theo chính sách bảo mật của nhà cung cấp đó.',
            'Chúng tôi không lưu bản ghi âm. Chỉ lệnh đã nhận diện, ví dụ "khóa xe", được xử lý rồi bỏ đi.',
          ],
        },
      ],
    },
    {
      id: 'chia-se',
      title: '5. Chia sẻ dữ liệu với bên thứ ba',
      blocks: [
        {
          kind: 'p',
          text:
            'Chúng tôi chỉ chia sẻ dữ liệu với các nhà cung cấp dịch vụ cần thiết cho hoạt động của ' +
            'ứng dụng, trong phạm vi tối thiểu và theo hợp đồng xử lý dữ liệu.',
        },
        {
          kind: 'table',
          head: ['Nhà cung cấp', 'Dữ liệu chia sẻ', 'Mục đích'],
          rows: [
            [
              'Google Firebase (Cloud Messaging, Analytics, Crashlytics, Authentication)',
              'Mã thiết bị nhận thông báo, sự kiện sử dụng tổng hợp, log sự cố, định danh đăng nhập',
              'Gửi thông báo đẩy, phân tích sử dụng, phát hiện lỗi, đăng nhập bằng Google',
            ],
            [
              'Google Sign-In và Apple Sign-In',
              'Email và họ tên từ tài khoản bạn chọn',
              'Đăng nhập nhanh mà không cần mật khẩu riêng',
            ],
            [
              'Dịch vụ bản đồ và dẫn đường',
              'Tọa độ điểm đi và điểm đến',
              'Tính toán lộ trình và hiển thị bản đồ',
            ],
            [
              'Nhận diện giọng nói của hệ điều hành (Apple hoặc Google)',
              'Đoạn âm thanh lệnh thoại',
              'Chuyển giọng nói thành văn bản',
            ],
            [
              'Nhà cung cấp hạ tầng máy chủ',
              'Toàn bộ dữ liệu ứng dụng, được mã hóa khi lưu trữ',
              'Lưu trữ và vận hành hệ thống',
            ],
          ],
        },
        {
          kind: 'p',
          text:
            'Ngoài ra, chúng tôi có thể tiết lộ dữ liệu khi có yêu cầu hợp pháp từ cơ quan nhà nước có ' +
            'thẩm quyền, khi cần bảo vệ quyền lợi và an toàn của người dùng, hoặc trong trường hợp sáp ' +
            'nhập, mua lại, chuyển nhượng doanh nghiệp. Với trường hợp cuối, bạn sẽ được thông báo trước.',
        },
      ],
    },
    {
      id: 'luu-tru',
      title: '6. Lưu trữ và thời gian lưu giữ',
      blocks: [
        {
          kind: 'list',
          items: [
            'Dữ liệu được truyền qua kênh mã hóa TLS và được mã hóa khi lưu trữ trên máy chủ.',
            'Mã thông báo đăng nhập được lưu trong vùng bảo mật của hệ điều hành: Keychain trên iOS và Keystore trên Android.',
            'Dữ liệu tài khoản và dữ liệu xe được lưu trong suốt thời gian tài khoản còn hoạt động.',
            `Log kỹ thuật và log sự cố được lưu tối đa ${dataRetentionDays} ngày rồi tự động xóa.`,
            `Khi bạn yêu cầu xóa tài khoản, chúng tôi xóa dữ liệu cá nhân trong vòng ${accountDeletionDays} ngày, trừ phần dữ liệu buộc phải giữ theo quy định pháp luật.`,
          ],
        },
      ],
    },
    {
      id: 'quyen-nguoi-dung',
      title: '7. Quyền của bạn',
      blocks: [
        { kind: 'p', text: 'Đối với dữ liệu cá nhân của mình, bạn có các quyền sau.' },
        {
          kind: 'list',
          items: [
            'Quyền truy cập: xem thông tin tài khoản và dữ liệu xe trực tiếp trong ứng dụng, hoặc yêu cầu một bản sao dữ liệu.',
            'Quyền chỉnh sửa: cập nhật họ tên, email, số điện thoại, ảnh đại diện và thông tin xe ngay trong ứng dụng.',
            'Quyền xóa: xóa tài khoản trong phần Cài đặt, hoặc gửi yêu cầu tới email bên dưới.',
            'Quyền rút lại sự đồng ý: thu hồi từng quyền trong cài đặt hệ thống của thiết bị bất kỳ lúc nào.',
            'Quyền hạn chế và phản đối xử lý: yêu cầu chúng tôi tạm dừng xử lý một phần dữ liệu của bạn.',
            'Quyền khiếu nại: gửi khiếu nại tới chúng tôi hoặc tới cơ quan bảo vệ dữ liệu có thẩm quyền.',
          ],
        },
        {
          kind: 'p',
          text:
            `Để thực hiện các quyền trên, hãy gửi email tới ${privacyEmail}. Chúng tôi phản hồi trong ` +
            'vòng 30 ngày kể từ khi nhận được yêu cầu hợp lệ.',
        },
      ],
    },
    {
      id: 'tre-em',
      title: '8. Trẻ em',
      blocks: [
        {
          kind: 'p',
          text:
            `${appName} không dành cho người dưới 16 tuổi và chúng tôi không chủ ý thu thập dữ liệu của ` +
            'trẻ em. Nếu phát hiện đã thu thập dữ liệu của trẻ dưới 16 tuổi mà không có sự đồng ý của cha ' +
            'mẹ hoặc người giám hộ, chúng tôi sẽ xóa dữ liệu đó. Nếu bạn là cha mẹ hoặc người giám hộ và ' +
            `cho rằng con bạn đã cung cấp dữ liệu cho chúng tôi, vui lòng liên hệ ${privacyEmail}.`,
        },
      ],
    },
    {
      id: 'chuyen-du-lieu',
      title: '9. Chuyển dữ liệu ra ngoài lãnh thổ',
      blocks: [
        {
          kind: 'p',
          text:
            'Một số nhà cung cấp dịch vụ của chúng tôi đặt máy chủ ngoài Việt Nam. Khi dữ liệu của bạn ' +
            'được chuyển ra nước ngoài, chúng tôi áp dụng các biện pháp bảo vệ phù hợp theo quy định pháp ' +
            'luật về bảo vệ dữ liệu cá nhân, bao gồm điều khoản hợp đồng chuẩn với nhà cung cấp.',
        },
      ],
    },
    {
      id: 'thay-doi',
      title: '10. Thay đổi chính sách',
      blocks: [
        {
          kind: 'p',
          text:
            'Chúng tôi có thể cập nhật chính sách này khi tính năng ứng dụng hoặc quy định pháp luật thay ' +
            'đổi. Ngày cập nhật mới nhất luôn được ghi ở đầu trang. Với những thay đổi quan trọng ảnh hưởng ' +
            'tới quyền của bạn, chúng tôi sẽ thông báo trong ứng dụng hoặc qua email trước khi thay đổi có ' +
            'hiệu lực.',
        },
      ],
    },
    {
      id: 'lien-he',
      title: '11. Liên hệ',
      blocks: [
        {
          kind: 'p',
          text:
            `Mọi câu hỏi về chính sách bảo mật, vui lòng liên hệ ${privacyEmail}. Các vấn đề kỹ thuật hoặc ` +
            `hỗ trợ sử dụng, vui lòng liên hệ ${supportEmail}.`,
        },
      ],
    },
  ],
};
