import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyNameVi, supportEmail } = appInfo;

export const termsVi: LegalDoc = {
  title: 'Điều khoản sử dụng',
  subtitle: `Áp dụng cho ứng dụng di động ${appName}`,
  intro:
    `Các điều khoản này là thỏa thuận giữa bạn và ${companyNameVi} về việc sử dụng ứng dụng ${appName}. ` +
    'Vui lòng đọc kỹ trước khi dùng. Khi tạo tài khoản hoặc sử dụng ứng dụng, bạn xác nhận đã đọc, ' +
    'hiểu và đồng ý với toàn bộ nội dung dưới đây. Nếu không đồng ý, vui lòng không sử dụng ứng dụng.',
  sections: [
    {
      id: 'dich-vu',
      title: '1. Mô tả dịch vụ',
      blocks: [
        {
          kind: 'p',
          text:
            `${appName} là ứng dụng đồng hành cho xe điện hai bánh. Ứng dụng cho phép bạn kết nối với ` +
            'xe qua Bluetooth, xem trạng thái pin và tình trạng xe, khóa và mở khóa xe, định vị xe, xem ' +
            'lịch sử chuyến đi, dẫn đường, tìm trạm sạc, đặt lịch sạc, nhận cảnh báo chống trộm và chia ' +
            'sẻ quyền sử dụng xe với thành viên gia đình.',
        },
        {
          kind: 'p',
          text:
            'Ứng dụng là công cụ hỗ trợ, không phải thiết bị an toàn hay hệ thống chống trộm được bảo ' +
            'đảm. Một số tính năng phụ thuộc vào kết nối mạng, tín hiệu GPS, kết nối Bluetooth và phần ' +
            'cứng của xe, nên có thể không khả dụng ở mọi thời điểm.',
        },
      ],
    },
    {
      id: 'an-toan',
      title: '2. An toàn khi sử dụng',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Không sử dụng ứng dụng khi đang điều khiển xe',
          text:
            'Tuyệt đối không thao tác trên điện thoại khi đang lái xe. Hãy dừng xe ở nơi an toàn trước ' +
            'khi sử dụng ứng dụng. Bạn phải tuân thủ toàn bộ quy định pháp luật về giao thông đường bộ. ' +
            'Việc sử dụng ứng dụng không thay thế cho sự quan sát, phán đoán và trách nhiệm của người lái.',
        },
        {
          kind: 'list',
          items: [
            'Chỉ gửi lệnh mở khóa khi bạn ở gần xe và quan sát được xe, để tránh xe bị lấy đi.',
            'Chỉ dẫn dẫn đường trong ứng dụng mang tính tham khảo. Luôn ưu tiên biển báo, vạch kẻ đường và tình hình giao thông thực tế.',
            'Không dựa hoàn toàn vào cảnh báo chống trộm để bảo vệ xe. Hãy kết hợp khóa cơ và đỗ xe ở nơi an toàn.',
            'Thông tin quãng đường còn lại và mức pin là giá trị ước tính, có thể sai lệch so với thực tế.',
            'Điều khiển bằng giọng nói cũng đòi hỏi bạn đang dừng xe an toàn, không dùng khi đang di chuyển.',
          ],
        },
      ],
    },
    {
      id: 'tai-khoan',
      title: '3. Tài khoản của bạn',
      blocks: [
        {
          kind: 'list',
          items: [
            'Bạn phải từ 16 tuổi trở lên để tạo tài khoản. Người dưới 18 tuổi chỉ được sử dụng khi có sự đồng ý của cha mẹ hoặc người giám hộ.',
            'Bạn có trách nhiệm cung cấp thông tin chính xác và cập nhật khi có thay đổi.',
            'Bạn tự chịu trách nhiệm bảo mật mật khẩu và thiết bị của mình. Mọi hoạt động phát sinh từ tài khoản của bạn được xem là do bạn thực hiện.',
            'Hãy thông báo cho chúng tôi ngay khi phát hiện tài khoản bị truy cập trái phép.',
            'Mỗi người chỉ nên có một tài khoản. Không được mua bán, cho thuê hay chuyển nhượng tài khoản.',
          ],
        },
      ],
    },
    {
      id: 'quyen-so-huu-xe',
      title: '4. Quyền sở hữu xe và chia sẻ',
      blocks: [
        {
          kind: 'list',
          items: [
            'Bạn chỉ được thêm và điều khiển xe mà bạn là chủ sở hữu hợp pháp hoặc được chủ sở hữu cho phép.',
            'Chủ xe có toàn quyền cấp và thu hồi quyền truy cập của thành viên gia đình, và chịu trách nhiệm về việc mình cấp quyền cho ai.',
            'Thành viên được chia sẻ chỉ được sử dụng xe trong phạm vi chủ xe cho phép.',
            'Khi chuyển nhượng xe cho người khác, bạn phải thực hiện đúng quy trình chuyển quyền sở hữu trong ứng dụng để bảo đảm người chủ mới có toàn quyền và bạn không còn truy cập được xe.',
            'Chúng tôi không phải trọng tài giải quyết tranh chấp về quyền sở hữu xe giữa các bên. Tuy nhiên, chúng tôi có thể tạm khóa quyền truy cập khi nhận được yêu cầu hợp pháp của cơ quan có thẩm quyền.',
          ],
        },
      ],
    },
    {
      id: 'hanh-vi-cam',
      title: '5. Hành vi bị cấm',
      blocks: [
        { kind: 'p', text: 'Khi sử dụng ứng dụng, bạn không được:' },
        {
          kind: 'list',
          items: [
            'Truy cập, điều khiển hoặc theo dõi xe của người khác mà không được phép.',
            'Dùng ứng dụng để theo dõi, giám sát hay quấy rối bất kỳ người nào.',
            'Dịch ngược, dịch mã, can thiệp hoặc tìm cách vượt qua các biện pháp bảo mật của ứng dụng và của xe.',
            'Can thiệp vào firmware của xe hoặc giao thức truyền thông theo cách gây mất an toàn.',
            'Tự động hóa việc truy cập dịch vụ bằng bot, script hay công cụ khai thác dữ liệu trái phép.',
            'Gửi lượng truy cập bất thường nhằm làm gián đoạn hoặc quá tải hệ thống.',
            'Sử dụng ứng dụng cho mục đích trái pháp luật, hoặc vi phạm quyền của người khác.',
          ],
        },
        {
          kind: 'p',
          text:
            'Chúng tôi có quyền tạm ngưng hoặc chấm dứt tài khoản vi phạm các điều khoản này, kèm thông ' +
            'báo cho bạn khi hoàn cảnh cho phép.',
        },
      ],
    },
    {
      id: 'so-huu-tri-tue',
      title: '6. Quyền sở hữu trí tuệ',
      blocks: [
        {
          kind: 'p',
          text:
            `Toàn bộ ứng dụng, gồm mã nguồn, thiết kế giao diện, logo, thương hiệu ${appName} và tài liệu ` +
            'liên quan, thuộc quyền sở hữu của chúng tôi hoặc bên cấp phép cho chúng tôi. Chúng tôi cấp ' +
            'cho bạn quyền sử dụng có giới hạn, không độc quyền, không thể chuyển nhượng, để dùng ứng dụng ' +
            'cho mục đích cá nhân theo đúng các điều khoản này.',
        },
        {
          kind: 'p',
          text:
            'Nội dung bạn tạo ra, ví dụ ảnh xe hay tên xe do bạn đặt, vẫn thuộc về bạn. Bạn cho phép ' +
            'chúng tôi lưu trữ và xử lý nội dung đó trong phạm vi cần thiết để cung cấp dịch vụ.',
        },
      ],
    },
    {
      id: 'thong-bao',
      title: '7. Thông báo và liên lạc',
      blocks: [
        {
          kind: 'p',
          text:
            'Ứng dụng gửi thông báo đẩy cho các sự kiện liên quan tới xe và tài khoản của bạn, ví dụ cảnh ' +
            'báo chống trộm, nhắc sạc và lời mời chia sẻ xe. Bạn có thể tắt từng loại thông báo trong cài ' +
            'đặt, nhưng khi tắt cảnh báo an ninh, bạn sẽ không nhận được cảnh báo khi xe có dấu hiệu bất ' +
            'thường. Thông báo liên quan tới bảo mật tài khoản và thay đổi điều khoản có thể vẫn được gửi ' +
            'qua email.',
        },
      ],
    },
    {
      id: 'mien-trach',
      title: '8. Giới hạn trách nhiệm',
      blocks: [
        {
          kind: 'p',
          text:
            'Ứng dụng được cung cấp "nguyên trạng" theo tình trạng hiện có. Trong phạm vi pháp luật cho ' +
            'phép, chúng tôi không bảo đảm ứng dụng hoạt động liên tục, không lỗi, hay mọi dữ liệu hiển ' +
            'thị đều chính xác tuyệt đối.',
        },
        {
          kind: 'p',
          text: 'Chúng tôi không chịu trách nhiệm đối với thiệt hại phát sinh từ:',
        },
        {
          kind: 'list',
          items: [
            'Việc mất kết nối mạng, mất tín hiệu GPS, mất kết nối Bluetooth hoặc lỗi phần cứng của xe.',
            'Việc xe bị mất, bị hư hỏng hoặc bị xâm nhập, kể cả khi tính năng chống trộm không kịp cảnh báo.',
            'Tai nạn hoặc vi phạm giao thông xảy ra trong quá trình sử dụng xe.',
            'Việc bạn tự chia sẻ quyền truy cập xe cho người khác.',
            'Việc bạn không nhận được thông báo do cài đặt thiết bị, chế độ tiết kiệm pin hoặc lỗi của nhà cung cấp dịch vụ đẩy thông báo.',
            'Dịch vụ của bên thứ ba như bản đồ, dẫn đường và nhận diện giọng nói.',
          ],
        },
        {
          kind: 'p',
          text:
            'Các giới hạn nêu trên không loại trừ trách nhiệm mà pháp luật không cho phép loại trừ, gồm ' +
            'trách nhiệm do cố ý hoặc do lỗi nghiêm trọng của chúng tôi.',
        },
      ],
    },
    {
      id: 'thay-doi-dich-vu',
      title: '9. Thay đổi dịch vụ và điều khoản',
      blocks: [
        {
          kind: 'p',
          text:
            'Chúng tôi có thể cập nhật, thay đổi hoặc ngừng cung cấp một phần tính năng để cải thiện sản ' +
            'phẩm hoặc đáp ứng yêu cầu pháp lý. Khi có thay đổi quan trọng đối với các điều khoản này, ' +
            'chúng tôi sẽ thông báo trong ứng dụng hoặc qua email trước khi thay đổi có hiệu lực. Việc bạn ' +
            'tiếp tục sử dụng ứng dụng sau ngày hiệu lực được xem là chấp nhận điều khoản mới.',
        },
      ],
    },
    {
      id: 'cham-dut',
      title: '10. Chấm dứt',
      blocks: [
        {
          kind: 'p',
          text:
            'Bạn có thể ngừng sử dụng và xóa tài khoản bất kỳ lúc nào trong phần Cài đặt. Chúng tôi có ' +
            'thể chấm dứt hoặc tạm ngưng quyền truy cập của bạn nếu bạn vi phạm nghiêm trọng các điều ' +
            'khoản này, hoặc khi cần thiết theo yêu cầu của pháp luật. Sau khi chấm dứt, các điều khoản ' +
            'về sở hữu trí tuệ và giới hạn trách nhiệm vẫn tiếp tục có hiệu lực.',
        },
      ],
    },
    {
      id: 'luat-ap-dung',
      title: '11. Luật áp dụng và giải quyết tranh chấp',
      blocks: [
        {
          kind: 'p',
          text:
            'Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Hai bên ưu tiên giải quyết tranh ' +
            'chấp thông qua thương lượng, hòa giải. Nếu không đạt được thỏa thuận, tranh chấp sẽ được giải ' +
            'quyết tại Tòa án có thẩm quyền của Việt Nam.',
        },
      ],
    },
    {
      id: 'lien-he-dk',
      title: '12. Liên hệ',
      blocks: [
        {
          kind: 'p',
          text: `Mọi thắc mắc về các điều khoản này, vui lòng liên hệ ${supportEmail}.`,
        },
      ],
    },
  ],
};
