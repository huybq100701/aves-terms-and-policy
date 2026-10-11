import { appInfo, docDate } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyLegalNameVi, supportEmail, phone, addressVi, websiteDomain, effectiveDate } =
  appInfo;

export const privacyVi: LegalDoc = {
  title: 'Chính sách bảo vệ dữ liệu cá nhân',
  subtitle: `Của ${companyLegalNameVi} · Áp dụng cho ứng dụng di động ${appName}`,
  intro:
    `Chính sách bảo vệ dữ liệu cá nhân này mô tả cách thức ${companyLegalNameVi} (sau đây gọi là ` +
    '"Công Ty") thu thập, sử dụng và xử lý dữ liệu cá nhân phát sinh trong quá trình hoạt động, kinh ' +
    'doanh của Công Ty.',
  sections: [
    {
      id: 'quy-dinh-chung',
      title: '1. Quy định chung',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              title: 'Dữ Liệu Cá Nhân:',
              text:
                'là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự ' +
                'trên môi trường điện tử gắn liền với con người cụ thể hoặc giúp xác định con người cụ ' +
                'thể. Dữ Liệu Cá Nhân bao gồm Dữ Liệu Cá Nhân cơ bản và Dữ Liệu Cá Nhân nhạy cảm.',
            },
            {
              num: '1.2.',
              title: 'Chủ Thể Dữ Liệu Cá Nhân:',
              text:
                'là cá nhân được Dữ Liệu Cá Nhân phản ánh, bao gồm tất cả các khách hàng cá nhân đang ' +
                'sử dụng sản phẩm, dịch vụ của Công Ty, người lao động của Công Ty, cổ đông và/hoặc các ' +
                'cá nhân khác có phát sinh quan hệ pháp lý với Công Ty.',
            },
            {
              num: '1.3.',
              title: 'Xử Lý Dữ Liệu Cá Nhân:',
              text:
                'là một hoặc nhiều hoạt động tác động tới Dữ Liệu Cá Nhân, như: thu thập, ghi, phân ' +
                'tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã ' +
                'hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy Dữ Liệu Cá ' +
                'Nhân hoặc các hành động khác có liên quan.',
            },
            {
              num: '1.4.',
              text:
                'Khi Dữ Liệu Cá Nhân của người liên quan của Chủ Thể Dữ Liệu Cá Nhân (bao gồm nhưng không ' +
                'giới hạn ở thông tin của người phụ thuộc, người có liên quan theo quy định pháp luật, ' +
                'vợ/chồng, con và/hoặc cha mẹ và/hoặc người giám hộ, bạn bè, bên thụ hưởng, người được ủy ' +
                'quyền, đối tác, người liên hệ trong các trường hợp khẩn cấp hoặc cá nhân khác của Chủ ' +
                'Thể Dữ Liệu Cá Nhân) được cung cấp cho Công Ty, Chủ Thể Dữ Liệu Cá Nhân và người liên ' +
                'quan của Chủ Thể Dữ Liệu Cá Nhân cam đoan, bảo đảm và chịu trách nhiệm rằng thông tin đã ' +
                'được cung cấp đầy đủ và đã được Chủ Thể Dữ Liệu Cá Nhân đồng ý/chấp thuận hợp pháp để ' +
                'được xử lý cho các mục đích được nêu tại Chính sách này. Chủ Thể Dữ Liệu Cá Nhân và người ' +
                'liên quan của Chủ Thể Dữ Liệu Cá Nhân đồng ý rằng Công Ty không có trách nhiệm phải thẩm ' +
                'định về tính hợp pháp, hợp lệ của sự đồng ý/chấp thuận này và việc lưu trữ bằng chứng ' +
                'chứng minh thuộc trách nhiệm của người liên quan của Chủ Thể Dữ Liệu Cá Nhân và Chủ Thể ' +
                'Dữ Liệu Cá Nhân. Công Ty được miễn trách và được yêu cầu bồi thường các thiệt hại, chi ' +
                'phí liên quan khi Chủ Thể Dữ Liệu Cá Nhân hoặc/và người liên quan của Chủ Thể Dữ Liệu Cá ' +
                'Nhân không thực hiện đúng nội dung quy định tại đây.',
            },
            {
              num: '1.5.',
              text:
                'Bằng việc đăng ký, sử dụng các sản phẩm, dịch vụ của Công Ty, giao kết hợp đồng và/hoặc ' +
                'cho phép Công Ty Xử Lý Dữ Liệu Cá Nhân, Chủ Thể Dữ Liệu Cá Nhân chấp nhận toàn bộ và ' +
                'không kèm theo bất kỳ điều kiện nào đối với các chính sách được đề cập tại đây và các ' +
                'thay đổi (nếu có) trong từng thời kỳ.',
            },
            {
              num: '1.6.',
              text:
                'Chính sách này có thể được Công Ty cập nhật, sửa đổi, bổ sung hoặc thay thế trong từng ' +
                'thời kỳ và được Công Ty đăng tải trên trang thông tin điện tử chính thức của Công Ty ' +
                `(${websiteDomain}). Quý vị nên truy cập và kiểm tra trên trang web của chúng tôi thường ` +
                'xuyên để cập nhật những thay đổi gần nhất.',
            },
            {
              num: '1.7.',
              text: 'Công Ty cam kết tuân thủ các nguyên tắc sau khi Xử Lý Dữ Liệu Cá Nhân:',
              sub: [
                {
                  text:
                    'Công Ty xử lý và bảo vệ Dữ Liệu Cá Nhân phù hợp với quy định của pháp luật Việt ' +
                    'Nam; tuân thủ đầy đủ theo các hợp đồng, thỏa thuận, văn kiện khác xác lập với Chủ ' +
                    'Thể Dữ Liệu Cá Nhân;',
                },
                {
                  text:
                    'Công Ty thu thập Dữ Liệu Cá Nhân với mục đích cụ thể, rõ ràng, hợp pháp, trong phạm ' +
                    'vi các mục đích nêu tại Mục 3 của Chính sách này và phù hợp với quy định của pháp ' +
                    'luật Việt Nam;',
                },
                {
                  text:
                    'Công Ty luôn áp dụng và cập nhật các biện pháp kỹ thuật phù hợp với quy định của ' +
                    'pháp luật Việt Nam nhằm đảm bảo tính an toàn của Dữ Liệu Cá Nhân, bao gồm cả các ' +
                    'biện pháp bảo vệ khỏi sự truy cập trái phép và/hoặc sự phá hủy, mất, thiệt hại cho ' +
                    'Dữ Liệu Cá Nhân;',
                },
                {
                  text:
                    'Công Ty lưu trữ Dữ Liệu Cá Nhân một cách thích hợp và trong phạm vi cần thiết nhằm ' +
                    'xử lý phù hợp với quy định của pháp luật Việt Nam;',
                },
                {
                  text: 'Công Ty cam kết tuân thủ các quy định liên quan đến bảo vệ dữ liệu của trẻ em.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'du-lieu-duoc-xu-ly',
      title: '2. Dữ liệu cá nhân được xử lý',
      blocks: [
        // TODO: comment C3697 – chờ bộ phận kỹ thuật xác nhận danh sách dữ liệu.
        {
          kind: 'p',
          text:
            'Để Công Ty có thể Xử Lý Dữ Liệu Cá Nhân cho các mục đích nêu tại Mục 3 của Chính sách này, ' +
            'Công Ty có thể xử lý các loại Dữ Liệu Cá Nhân bao gồm:',
        },
        {
          kind: 'list',
          items: [
            'Họ tên, email, số điện thoại, ảnh đại diện, mật khẩu, khuôn mặt, vân tay, vị trí;',
            'Tên xe, số VIN/serial, model, trạng thái khóa, mức pin, tình trạng pin (SOH), lịch sạc;',
            'Định danh thiết bị BLE của xe, kết quả quét, log kết nối;',
            'Đoạn âm thanh khi bạn kích hoạt điều khiển bằng giọng nói;',
            'Tên và số điện thoại người liên hệ do bạn tự nhập;',
            'Email hoặc số điện thoại người bạn mời, trạng thái lời mời, quyền truy cập xe;',
            'Model thiết bị, phiên bản hệ điều hành, phiên bản ứng dụng, mã thiết bị nhận thông báo, log sự cố;',
            'Sự kiện trong ứng dụng ở dạng tổng hợp: màn hình đã xem, tính năng đã dùng.',
          ],
        },
      ],
    },
    {
      id: 'muc-dich',
      title: '3. Mục đích xử lý dữ liệu cá nhân',
      blocks: [
        { kind: 'p', text: 'Dữ Liệu Cá Nhân có thể được xử lý cho một hoặc nhiều mục đích như sau:' },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'Đánh giá khả năng cung cấp sản phẩm, dịch vụ hoặc/và giao kết hợp đồng với Chủ Thể Dữ ' +
                'Liệu Cá Nhân, bao gồm nhưng không giới hạn các mục đích sau:',
              sub: [
                { text: 'Nhận biết, xác minh thông tin về Chủ Thể Dữ Liệu Cá Nhân;' },
                {
                  text:
                    'Đánh giá, thẩm định và phê duyệt việc cung cấp sản phẩm, dịch vụ theo các văn bản ' +
                    'đăng ký, đơn đề nghị, hợp đồng của Chủ Thể Dữ Liệu Cá Nhân và/hoặc người liên quan ' +
                    'của Chủ Thể Dữ Liệu Cá Nhân;',
                },
                {
                  text:
                    'Cân nhắc việc cung cấp hoặc tiếp tục cung cấp bất kỳ sản phẩm, dịch vụ nào của Công ' +
                    'Ty cho Chủ Thể Dữ Liệu Cá Nhân.',
                },
              ],
            },
            {
              num: '3.2.',
              text:
                'Thực hiện các nghĩa vụ trong hợp đồng, thỏa thuận, điều khoản, điều kiện và các văn ' +
                'kiện khác giữa Công Ty và Chủ Thể Dữ Liệu Cá Nhân, hỗ trợ khách hàng bao gồm nhưng không ' +
                'giới hạn các mục đích sau:',
              sub: [
                {
                  text:
                    'Thực hiện các nghĩa vụ theo hợp đồng, thỏa thuận và cung cấp sản phẩm, dịch vụ cho ' +
                    'Chủ Thể Dữ Liệu Cá Nhân;',
                },
                { text: 'Cập nhật, xử lý thông tin của Chủ Thể Dữ Liệu Cá Nhân;' },
                { text: 'Chăm sóc, giải quyết khiếu nại, khiếu kiện của Chủ Thể Dữ Liệu Cá Nhân;' },
                {
                  text:
                    'Sử dụng, chuyển giao cho đối tác Dữ Liệu Cá Nhân và các thông tin có liên quan để ' +
                    'xác định và khắc phục sự cố của sản phẩm, dịch vụ; sửa chữa sản phẩm;',
                },
                { text: 'Liên hệ, thông báo với Chủ Thể Dữ Liệu Cá Nhân;' },
                { text: 'Thực hiện các chương trình khuyến mại, đổi quà, trao thưởng, giao quà tặng;' },
                { text: 'Thực hiện hoạt động chăm sóc và hỗ trợ khách hàng khác.' },
              ],
            },
            {
              num: '3.3.',
              text: 'Nâng cao chất lượng sản phẩm, dịch vụ của Công Ty bao gồm nhưng không giới hạn:',
              sub: [
                {
                  text:
                    'Cung cấp thông tin mà khách hàng đã yêu cầu hoặc Công Ty thấy hữu ích cho khách hàng;',
                },
                {
                  text:
                    'Cải tiến công nghệ, giao diện trang thông tin điện tử, mạng xã hội, ứng dụng đảm bảo ' +
                    'tiện lợi cho khách hàng;',
                },
                {
                  text:
                    'Quản lý tài khoản khách hàng và các chương trình khách hàng thân thiết do Công Ty ' +
                    'triển khai thực hiện;',
                },
                {
                  text:
                    'Thống kê, phân tích dữ liệu để nghiên cứu, xây dựng, phát triển và cải tiến sản ' +
                    'phẩm, dịch vụ; nâng cao trải nghiệm khách hàng;',
                },
                {
                  text:
                    'Phát triển, cung cấp sản phẩm, dịch vụ mới được cá nhân hóa theo nhu cầu, điều kiện ' +
                    'thực tế của khách hàng;',
                },
                {
                  text:
                    'Giới thiệu, cung cấp các chương trình khuyến mại, ưu đãi cho sản phẩm, dịch vụ của ' +
                    'Công Ty và của Công Ty hợp tác với đối tác;',
                },
                {
                  text:
                    'Đề xuất sản phẩm, dịch vụ mà khách hàng có thể quan tâm thông qua nhận diện sở thích ' +
                    'của khách hàng.',
                },
              ],
            },
            {
              num: '3.4.',
              text:
                'Phục vụ hoạt động kinh doanh, vận hành của Công Ty bao gồm nhưng không giới hạn việc ' +
                'thực hiện các nghĩa vụ về báo cáo, tài chính, kế toán và thuế, các hoạt động có mục đích ' +
                'kiểm toán, tuân thủ và các hoạt động khác phục vụ việc kinh doanh hợp pháp của Công Ty ' +
                'trong những trường hợp mà Công Ty cho là cần thiết.',
            },
            {
              num: '3.5.',
              title: 'Tái cấu trúc, chuyển nhượng dự án/doanh nghiệp:',
              text:
                'Trong quá trình kinh doanh, Công Ty có thể bán hoặc mua các doanh nghiệp hoặc tái cấu ' +
                'trúc doanh nghiệp hoặc chuyển nhượng dự án hoặc dịch vụ khác phù hợp với quy định của ' +
                'pháp luật. Theo đó, Dữ Liệu Cá Nhân và quyền sử dụng thông tin nói chung là một trong ' +
                'những tài sản được chuyển nhượng. Trong mọi trường hợp, việc chuyển giao và xử lý dữ ' +
                'liệu sẽ được các bên thực hiện phù hợp với quy định của pháp luật và Chính sách này.',
            },
            {
              num: '3.6.',
              title: 'Tiếp thị:',
              text:
                'Xây dựng chiến dịch tiếp thị, quảng bá sản phẩm, dịch vụ trong đó bao gồm xây dựng các ' +
                'chiến dịch dựa trên sở thích của khách hàng.',
            },
            { num: '3.7.', text: 'Phòng, chống, ngăn ngừa, điều tra, phát hiện tội phạm.' },
            {
              num: '3.8.',
              text:
                'Bảo vệ trật tự an toàn xã hội, bảo vệ quyền và lợi ích hợp pháp của Chủ Thể Dữ Liệu Cá ' +
                'Nhân, Công Ty và các bên liên quan khác.',
            },
            {
              num: '3.9.',
              text:
                'Tuân thủ quy định của pháp luật, điều ước quốc tế mà Việt Nam là thành viên bao gồm ' +
                'nhưng không giới hạn bởi:',
              sub: [
                { text: 'Để cung cấp cho các cơ quan nhà nước có thẩm quyền theo quy định của pháp luật;' },
                {
                  text:
                    'Để thực hiện các nghĩa vụ theo quy định của pháp luật, các điều ước quốc tế mà Công ' +
                    'Ty phải tuân thủ (nếu có).',
                },
              ],
            },
            { num: '3.10.', text: 'Các mục đích khác nếu được sự đồng ý của Chủ Thể Dữ Liệu Cá Nhân.' },
          ],
        },
      ],
    },
    {
      id: 'cach-thuc-xu-ly',
      title: '4. Cách thức xử lý dữ liệu cá nhân',
      blocks: [
        { kind: 'h3', text: '4.1. Cách thức thu thập' },
        { kind: 'p', text: 'Dữ Liệu Cá Nhân được thu thập như sau:' },
        {
          kind: 'clauses',
          items: [
            {
              title: 'Từ các trang thông tin điện tử, ứng dụng của Công Ty:',
              text:
                'Dữ Liệu Cá Nhân được thu thập khi Chủ Thể Dữ Liệu Cá Nhân điền vào các biểu mẫu được ' +
                'đưa trên các trang thông tin điện tử, ứng dụng của Công Ty.',
            },
            {
              title:
                'Từ việc cung cấp các sản phẩm, dịch vụ, thực hiện các nghĩa vụ theo hợp đồng, thỏa ' +
                'thuận của Công Ty:',
              text:
                'Dữ Liệu Cá Nhân được thu thập khi Chủ Thể Dữ Liệu Cá Nhân mua, đăng ký sử dụng, sử dụng ' +
                'bất kỳ sản phẩm, dịch vụ, ký kết hợp đồng với Công Ty.',
            },
            {
              title: 'Từ các trao đổi, liên lạc với Chủ Thể Dữ Liệu Cá Nhân:',
              text:
                'Dữ Liệu Cá Nhân được thu thập thông qua tương tác giữa Công Ty và Chủ Thể Dữ Liệu Cá ' +
                'Nhân (gặp trực tiếp, qua thư, điện thoại, trực tuyến, hệ thống tổng đài, liên lạc điện ' +
                'tử hoặc bất kỳ phương tiện nào khác) bao gồm cả các cuộc khảo sát.',
            },
            {
              title: 'Từ mạng xã hội:',
              text:
                'là các mạng xã hội của Công Ty và/hoặc các mạng xã hội do Công Ty hợp tác với các đối tác.',
            },
            {
              title: 'Từ các thiết bị ghi âm, ghi hình:',
              text:
                'được đặt tại các cửa hàng, điểm kinh doanh hoặc nơi thực hiện một phần hoặc toàn bộ ' +
                'hoạt động kinh doanh của Công Ty mà Chủ Thể Dữ Liệu Cá Nhân gặp, xuất hiện hoặc tương ' +
                'tác với Công Ty.',
            },
            {
              title: 'Từ các tương tác hoặc các công nghệ thu thập dữ liệu tự động:',
              text: 'Công Ty có thể thu thập thông tin được ghi tự động từ kết nối:',
              sub: [
                { text: 'Cookie, thẻ pixel và các công nghệ tương tự khác;' },
                {
                  text:
                    'Bất kỳ công nghệ nào có khả năng theo dõi hoạt động cá nhân trên các thiết bị hoặc ' +
                    'trang thông tin điện tử;',
                },
                { text: 'Thông tin dữ liệu khác được cung cấp bởi một thiết bị.' },
              ],
            },
            {
              title: 'Các phương tiện khác:',
              text:
                'Công Ty có thể thu thập Dữ Liệu Cá Nhân thông qua các nguồn thông tin công khai, chính ' +
                'thống hoặc thông qua việc nhận chia sẻ dữ liệu cần thiết từ công ty mẹ, công ty con, ' +
                'công ty liên kết, đối tác trong quá trình hợp tác với Công Ty phù hợp với quy định của ' +
                'pháp luật.',
            },
          ],
        },
        { kind: 'h3', text: '4.2. Cách thức lưu trữ' },
        {
          kind: 'p',
          text:
            'Dữ Liệu Cá Nhân được lưu trữ tại Việt Nam tại hệ thống cơ sở dữ liệu của Công Ty hoặc tại ' +
            'bất cứ đâu mà chúng tôi hoặc các chi nhánh, công ty con, công ty liên kết, đối tác hoặc nhà ' +
            'cung cấp dịch vụ của chúng tôi có cơ sở.',
        },
        {
          kind: 'p',
          text:
            'Thời gian lưu trữ dữ liệu cá nhân được xác định căn cứ vào mục đích sử dụng như nêu tại ' +
            'Chính sách này và phù hợp với quy định pháp luật.',
        },
        { kind: 'h3', text: '4.3. Cách thức chuyển giao/chia sẻ dữ liệu' },
        {
          kind: 'p',
          text:
            'Công Ty sẽ không bán Dữ Liệu Cá Nhân cho bất cứ bên nào. Công Ty sử dụng các biện pháp bảo ' +
            'mật cần thiết để đảm bảo việc chuyển giao/chia sẻ Dữ Liệu Cá Nhân được an toàn. Dữ Liệu Cá ' +
            'Nhân được Công Ty chia sẻ cho (i) công ty mẹ, công ty con, công ty liên kết của Công Ty; ' +
            '(ii) cá nhân/tổ chức tham gia vào quá trình Xử Lý Dữ Liệu Cá Nhân quy định tại Chính sách ' +
            'này; hoặc (iii) cơ quan nhà nước có thẩm quyền hoặc các trường hợp khác phù hợp với quy ' +
            'định của pháp luật.',
        },
        {
          kind: 'p',
          text:
            'Nếu bên nhận Dữ Liệu Cá Nhân có trụ sở ngoài lãnh thổ Việt Nam thì khi cung cấp/chuyển Dữ ' +
            'Liệu Cá Nhân ra nước ngoài (bao gồm nhưng không giới hạn ở hoạt động sử dụng không gian ' +
            'mạng, thiết bị, phương tiện điện tử hoặc các hình thức khác để chuyển Dữ Liệu Cá Nhân ra ' +
            'ngoài lãnh thổ Việt Nam), Công Ty sẽ yêu cầu bên tiếp nhận đảm bảo an toàn, bảo mật đối với ' +
            'Dữ Liệu Cá Nhân được cung cấp/chuyển giao. Công Ty cam kết tuân thủ đầy đủ quy định, yêu ' +
            'cầu tuân thủ của pháp luật Việt Nam để bảo vệ an toàn cho Dữ Liệu Cá Nhân.',
        },
        { kind: 'h3', text: '4.4. Cách thức phân tích' },
        {
          kind: 'p',
          text:
            'Dữ Liệu Cá Nhân được phân tích dựa trên quy trình nội bộ của Công Ty, nguyên tắc bảo mật dữ ' +
            'liệu và bảo đảm an toàn thông tin đối với hệ thống công nghệ thông tin.',
        },
        { kind: 'h3', text: '4.5. Cách thức mã hóa' },
        {
          kind: 'p',
          text:
            'Khi cần thiết, Dữ Liệu Cá Nhân thu thập được mã hóa theo các tiêu chuẩn mã hóa phù hợp ' +
            'trong quá trình lưu trữ hoặc chuyển giao và xử lý dữ liệu để đảm bảo các dữ liệu luôn được ' +
            'bảo vệ.',
        },
        { kind: 'h3', text: '4.6. Cách thức xóa dữ liệu' },
        {
          kind: 'p',
          text:
            'Theo quy định của pháp luật hoặc theo yêu cầu hợp lệ từ Chủ Thể Dữ Liệu Cá Nhân, Công Ty sẽ ' +
            'xóa Dữ Liệu Cá Nhân đang được lưu trữ trừ trường hợp sau đây:',
        },
        {
          kind: 'list',
          items: [
            'Pháp luật quy định không cho phép xóa dữ liệu hoặc yêu cầu bắt buộc phải lưu trữ dữ liệu;',
            'Dữ Liệu Cá Nhân được xử lý bởi cơ quan nhà nước có thẩm quyền với mục đích phục vụ hoạt động của cơ quan nhà nước theo quy định pháp luật;',
            'Dữ Liệu Cá Nhân đã được công khai theo quy định pháp luật;',
            'Dữ Liệu Cá Nhân được xử lý nhằm phục vụ yêu cầu pháp lý, nghiên cứu khoa học, thống kê theo quy định pháp luật;',
            'Trong trường hợp tình trạng khẩn cấp về quốc phòng, an ninh quốc gia, trật tự an toàn xã hội, thảm họa lớn, dịch bệnh nguy hiểm; khi có nguy cơ đe dọa an ninh, quốc phòng nhưng chưa đến mức ban bố tình trạng khẩn cấp; phòng, chống bạo loạn, khủng bố, phòng, chống tội phạm và vi phạm pháp luật;',
            'Ứng phó với tình huống khẩn cấp đe dọa đến tính mạng, sức khỏe hoặc sự an toàn của Chủ Thể Dữ Liệu Cá Nhân hoặc cá nhân khác.',
          ],
        },
        {
          kind: 'p',
          text:
            'Trong suốt quá trình Xử Lý Dữ Liệu Cá Nhân, bảo mật là ưu tiên cao nhất của Công Ty. Công Ty ' +
            'có các biện pháp thích hợp về kỹ thuật để ngăn chặn việc truy cập, sử dụng trái phép Dữ Liệu ' +
            'Cá Nhân. Chúng tôi cũng thường xuyên phối hợp với các chuyên gia bảo mật nhằm cập nhật những ' +
            'kỹ thuật mới nhất về an ninh mạng để đảm bảo sự an toàn cho Dữ Liệu Cá Nhân. Các dữ liệu về ' +
            'thẻ thanh toán của Quý vị do các tổ chức tài chính phát hành được Công Ty bảo vệ với nguyên ' +
            'tắc không ghi nhận các dữ liệu quan trọng của thẻ thanh toán (số thẻ, họ tên, số CVV) trên ' +
            'hệ thống của chúng tôi. Giao dịch thanh toán của Quý vị được thực hiện trên hệ thống của ' +
            'ngân hàng liên quan.',
        },
      ],
    },
    {
      id: 'tre-em',
      title: '5. Xử lý dữ liệu cá nhân của trẻ em',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '5.1.',
              text:
                'Công Ty sẽ Xử Lý Dữ Liệu Cá Nhân của trẻ em theo nguyên tắc bảo vệ các quyền và vì lợi ' +
                'ích tốt nhất của trẻ em và phù hợp với quy định của pháp luật.',
            },
            {
              num: '5.2.',
              text:
                'Công Ty chỉ Xử Lý Dữ Liệu Cá Nhân của trẻ em và cung cấp sản phẩm, dịch vụ cho trẻ em ' +
                'nếu cha, mẹ hoặc người giám hộ đồng ý cho trẻ em được sử dụng sản phẩm, dịch vụ của Công ' +
                'Ty, đồng ý để Công Ty Xử Lý Dữ Liệu Cá Nhân của trẻ em, đồng ý với Chính sách này và tuân ' +
                'thủ các yêu cầu của pháp luật có liên quan. Trong trường hợp trẻ em từ 7 tuổi trở lên sử ' +
                'dụng sản phẩm, dịch vụ của Công Ty, ngoài các yêu cầu nêu tại đây, Công Ty chỉ Xử Lý Dữ ' +
                'Liệu Cá Nhân của trẻ em khi có được sự đồng ý của trẻ em đó. Bố, mẹ hoặc người giám hộ ' +
                'chịu trách nhiệm xin sự đồng ý của trẻ em trước khi cung cấp Dữ Liệu Cá Nhân của trẻ em ' +
                'cho Công Ty.',
            },
          ],
        },
      ],
    },
    {
      id: 'hau-qua',
      title: '6. Hậu quả, thiệt hại không mong muốn có khả năng xảy ra',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '6.1.',
              text:
                'Công Ty sử dụng nhiều công nghệ bảo mật thông tin khác nhau như hệ thống tường lửa, các ' +
                'biện pháp kiểm soát truy cập, mã hóa… nhằm bảo vệ và ngăn chặn việc Dữ Liệu Cá Nhân bị ' +
                'truy cập, sử dụng hoặc chia sẻ trái phép. Tuy nhiên, Công Ty không thể cam kết bảo đảm ' +
                'an toàn một cách tuyệt đối Dữ Liệu Cá Nhân trong một số trường hợp như:',
              sub: [
                {
                  text:
                    'Lỗi phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất dữ liệu của Chủ Thể ' +
                    'Dữ Liệu Cá Nhân;',
                },
                {
                  text:
                    'Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát của Công Ty, hệ thống bị hacker tấn ' +
                    'công gây lộ, lọt dữ liệu.',
                },
              ],
            },
            {
              num: '6.2.',
              text:
                'Công Ty khuyến cáo Chủ Thể Dữ Liệu Cá Nhân bảo mật các thông tin liên quan đến mật khẩu ' +
                'đăng nhập vào tài khoản, mã OTP và không chia sẻ nội dung này với bất kỳ người nào khác.',
            },
            {
              num: '6.3.',
              text:
                'Chủ Thể Dữ Liệu Cá Nhân cần biết rõ rằng bất kỳ thời điểm nào khi Chủ Thể Dữ Liệu Cá ' +
                'Nhân tiết lộ và công khai Dữ Liệu Cá Nhân của mình, dữ liệu đó có thể bị người khác thu ' +
                'thập và sử dụng cho các mục đích nằm ngoài tầm kiểm soát của Chủ Thể Dữ Liệu Cá Nhân và ' +
                'Công Ty.',
            },
            {
              num: '6.4.',
              text:
                'Công Ty khuyến cáo Chủ Thể Dữ Liệu Cá Nhân bảo quản thiết bị cá nhân (máy điện thoại, ' +
                'máy tính bảng, máy tính cá nhân…) trong quá trình sử dụng. Chủ Thể Dữ Liệu Cá Nhân nên ' +
                'đăng xuất khỏi tài khoản của mình khi không sử dụng.',
            },
            {
              num: '6.5.',
              text:
                'Trong trường hợp máy chủ lưu trữ dữ liệu bị tấn công dẫn đến bị mất, lộ, lọt Dữ Liệu Cá ' +
                'Nhân, Công Ty sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý ' +
                'kịp thời và thông báo cho Chủ Thể Dữ Liệu Cá Nhân được biết theo quy định pháp luật.',
            },
            {
              num: '6.6.',
              text:
                'Không gian mạng không phải là một môi trường an toàn và Công Ty không thể đảm bảo tuyệt ' +
                'đối rằng Dữ Liệu Cá Nhân được chia sẻ qua không gian mạng sẽ luôn được bảo mật. Khi ' +
                'truyền tải Dữ Liệu Cá Nhân qua không gian mạng, Chủ Thể Dữ Liệu Cá Nhân chỉ nên sử dụng ' +
                'các hệ thống an toàn để truy cập trang thông tin điện tử, ứng dụng hoặc thiết bị. Chủ ' +
                'Thể Dữ Liệu Cá Nhân có trách nhiệm giữ thông tin xác thực truy cập của mình cho từng ' +
                'trang thông tin điện tử, ứng dụng hoặc thiết bị an toàn và bí mật.',
            },
          ],
        },
      ],
    },
    {
      id: 'thoi-gian-xu-ly',
      title: '7. Thời gian bắt đầu, thời gian kết thúc xử lý dữ liệu cá nhân',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '7.1.',
              text:
                'Dữ Liệu Cá Nhân được xử lý kể từ thời điểm Công Ty nhận được Dữ Liệu Cá Nhân một cách ' +
                'hợp pháp và Công Ty đã có cơ sở pháp lý phù hợp để xử lý dữ liệu theo quy định pháp luật.',
            },
            {
              num: '7.2.',
              text: 'Dữ Liệu Cá Nhân sẽ được xử lý cho đến khi các mục đích xử lý dữ liệu đã được hoàn thành.',
            },
            {
              num: '7.3.',
              text:
                'Công Ty có thể phải lưu trữ Dữ Liệu Cá Nhân ngay cả khi hợp đồng giữa các bên đã chấm ' +
                'dứt để thực hiện các nghĩa vụ theo quy định pháp luật và/hoặc yêu cầu của cơ quan nhà ' +
                'nước có thẩm quyền.',
            },
          ],
        },
      ],
    },
    {
      id: 'ben-tham-gia',
      title: '8. Tổ chức, cá nhân tham gia quá trình xử lý dữ liệu cá nhân',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '8.1.',
              text:
                'Tùy từng trường hợp, Công Ty có thể là bên kiểm soát dữ liệu cá nhân hoặc bên kiểm soát ' +
                'và xử lý dữ liệu cá nhân.',
            },
            {
              num: '8.2.',
              text:
                'Trong phạm vi pháp luật cho phép, Chủ Thể Dữ Liệu Cá Nhân hiểu rõ rằng Công Ty có thể ' +
                'chia sẻ Dữ Liệu Cá Nhân nhằm các mục đích như nêu tại Chính sách này với các tổ chức, cá ' +
                'nhân dưới đây:',
              sub: [
                { text: 'Công ty mẹ, công ty con, công ty liên kết của Công Ty;' },
                {
                  text:
                    'Tổ chức, cá nhân cung cấp dịch vụ và/hoặc hợp tác với Công Ty, bao gồm nhưng không ' +
                    'giới hạn: đại lý, kiểm toán, luật sư, các đối tác hợp tác kinh doanh, cung cấp giải ' +
                    'pháp công nghệ thông tin, phần mềm, ứng dụng, các dịch vụ vận hành, quản lý, xử lý ' +
                    'sự cố, phát triển hạ tầng;',
                },
                {
                  text:
                    'Bất kỳ cá nhân, tổ chức nào là bên đại diện, bên được ủy quyền của Chủ Thể Dữ Liệu ' +
                    'Cá Nhân, hành động thay mặt Chủ Thể Dữ Liệu Cá Nhân.',
                },
              ],
            },
          ],
        },
        {
          kind: 'p',
          text:
            'Việc chia sẻ dữ liệu sẽ được thực hiện theo đúng trình tự, cách thức và quy định pháp luật ' +
            'hiện hành. Các bên tiếp nhận Dữ Liệu Cá Nhân có nghĩa vụ bảo mật Dữ Liệu Cá Nhân phù hợp với ' +
            'Chính sách này, các quy định nội bộ, tiêu chuẩn về bảo vệ Dữ Liệu Cá Nhân của Công Ty và quy ' +
            'định pháp luật hiện hành.',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '8.3.',
              text:
                'Công Ty có thể phải chia sẻ Dữ Liệu Cá Nhân với cơ quan nhà nước có thẩm quyền theo quy ' +
                'định pháp luật.',
            },
          ],
        },
      ],
    },
    {
      id: 'quyen-chu-the',
      title: '9. Quyền của chủ thể dữ liệu cá nhân',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '9.1.',
              text:
                'Quyền được biết về hoạt động Xử Lý Dữ Liệu Cá Nhân của mình, trừ trường hợp pháp luật có ' +
                'quy định khác.',
            },
            {
              num: '9.2.',
              text:
                'Quyền đồng ý hoặc không đồng ý cho phép Xử Lý Dữ Liệu Cá Nhân của mình, trừ trường hợp ' +
                'pháp luật quy định khác.',
            },
            {
              num: '9.3.',
              text:
                'Quyền truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa Dữ Liệu Cá Nhân của mình, trừ ' +
                'trường hợp pháp luật có quy định khác.',
            },
            { num: '9.4.', text: 'Quyền rút lại sự đồng ý.' },
            { num: '9.5.', text: 'Quyền xóa dữ liệu.' },
            {
              num: '9.6.',
              text: 'Quyền hạn chế Xử Lý Dữ Liệu Cá Nhân của mình theo quy định pháp luật.',
            },
            {
              num: '9.7.',
              text:
                'Quyền yêu cầu cung cấp cho bản thân Dữ Liệu Cá Nhân của mình, trừ trường hợp pháp luật ' +
                'có quy định khác.',
            },
            { num: '9.8.', text: 'Quyền phản đối xử lý dữ liệu.' },
            { num: '9.9.', text: 'Quyền khiếu nại, tố cáo, khởi kiện.' },
            { num: '9.10.', text: 'Quyền yêu cầu bồi thường thiệt hại.' },
            { num: '9.11.', text: 'Quyền tự bảo vệ.' },
          ],
        },
        {
          kind: 'p',
          text:
            'Chủ Thể Dữ Liệu Cá Nhân có thể thực hiện các quyền này bằng việc đưa ra yêu cầu cho Công ' +
            'Ty. Phiếu yêu cầu phải gửi cho Công Ty và có các nội dung cơ bản như thông tin của người ' +
            'yêu cầu, nội dung yêu cầu chi tiết [ví dụ như loại dữ liệu cần cung cấp, cần xóa, tên văn ' +
            'bản, hồ sơ (nếu có)], lý do, mục đích khi đưa ra yêu cầu, các thông tin có liên quan phụ ' +
            'thuộc vào đặc thù của yêu cầu (ví dụ như tài liệu yêu cầu cung cấp cần ở dạng file hay giấy ' +
            'tờ, địa chỉ nhận tài liệu…). Mọi chi phí (nếu có) phát sinh từ việc thực hiện các yêu cầu ' +
            'như nêu tại đây bao gồm nhưng không giới hạn như chi phí in ấn, sao chụp, phí bưu điện, phí ' +
            'chuyển phát nhanh để gửi dữ liệu sẽ do người yêu cầu chịu và phải thanh toán muộn nhất khi ' +
            'nhận được dữ liệu hoặc một thời hạn do Công Ty ấn định.',
        },
        {
          kind: 'p',
          text:
            'Công Ty sẽ xử lý các yêu cầu của Chủ Thể Dữ Liệu Cá Nhân phù hợp với quy định của pháp luật ' +
            'và cân nhắc quyền lợi chính đáng của Chủ Thể Dữ Liệu Cá Nhân. Tuy nhiên, trong trường hợp ' +
            'Chủ Thể Dữ Liệu Cá Nhân rút lại sự đồng ý của mình, yêu cầu xóa dữ liệu và/hoặc thực hiện ' +
            'các quyền có liên quan khác đối với bất kỳ hoặc tất cả các Dữ Liệu Cá Nhân làm ảnh hưởng ' +
            'đến khả năng cung cấp/duy trì các sản phẩm, dịch vụ của Công Ty đối với Chủ Thể Dữ Liệu Cá ' +
            'Nhân hoặc duy trì quan hệ hợp đồng, tùy thuộc vào tính chất yêu cầu của Chủ Thể Dữ Liệu Cá ' +
            'Nhân, Công Ty có thể sẽ xem xét và quyết định về việc không tiếp tục cung cấp các sản phẩm, ' +
            'dịch vụ của Công Ty cho Chủ Thể Dữ Liệu Cá Nhân hoặc chấm dứt quan hệ hợp đồng giữa Công Ty ' +
            'và Chủ Thể Dữ Liệu Cá Nhân. Các hành vi được thực hiện bởi Chủ Thể Dữ Liệu Cá Nhân theo quy ' +
            'định này sẽ được xem là sự đơn phương chấm dứt từ phía Chủ Thể Dữ Liệu Cá Nhân cho bất kỳ ' +
            'mối quan hệ nào giữa Chủ Thể Dữ Liệu Cá Nhân với Công Ty và hoàn toàn có thể dẫn đến sự vi ' +
            'phạm nghĩa vụ hoặc các cam kết theo hợp đồng giữa Chủ Thể Dữ Liệu Cá Nhân với Công Ty, đồng ' +
            'thời Công Ty bảo lưu các quyền và biện pháp khắc phục hợp pháp của Công Ty trong những ' +
            'trường hợp đó. Theo đó, Công Ty sẽ không chịu trách nhiệm đối với Chủ Thể Dữ Liệu Cá Nhân ' +
            'cho bất kỳ tổn thất nào phát sinh và các quyền hợp pháp của Công Ty sẽ được bảo lưu một cách ' +
            'đầy đủ. Bằng nỗ lực hợp lý, Công Ty sẽ thực hiện yêu cầu hợp pháp và hợp lệ từ Chủ Thể Dữ ' +
            'Liệu Cá Nhân trong thời gian phù hợp với quy định của pháp luật. Tuy nhiên, vì mục đích bảo ' +
            'mật, Công Ty có thể yêu cầu Chủ Thể Dữ Liệu Cá Nhân xác minh danh tính trước khi xử lý yêu ' +
            'cầu của Chủ Thể Dữ Liệu Cá Nhân.',
        },
        {
          kind: 'p',
          text:
            'Công Ty có quyền từ chối thực hiện các yêu cầu của Chủ Thể Dữ Liệu Cá Nhân trong một số ' +
            'trường hợp nhất định, bao gồm nhưng không giới hạn ở trường hợp: (i) Chủ Thể Dữ Liệu Cá ' +
            'Nhân không thực hiện đúng trình tự, thủ tục do Công Ty hướng dẫn trong đó nội dung yêu cầu ' +
            'thiếu thông tin hoặc không hợp lệ; (ii) Chủ Thể Dữ Liệu Cá Nhân không cung cấp hoặc cung cấp ' +
            'không đầy đủ các giấy tờ, tài liệu để xác minh danh tính; (iii) Công Ty đánh giá có dấu hiệu ' +
            'gian lận, vi phạm về bảo vệ Dữ Liệu Cá Nhân; hoặc (iv) quy định của pháp luật không cho phép ' +
            'thực hiện yêu cầu của Chủ Thể Dữ Liệu Cá Nhân.',
        },
      ],
    },
    {
      id: 'nghia-vu-chu-the',
      title: '10. Nghĩa vụ của chủ thể dữ liệu cá nhân',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '10.1.',
              text:
                'Tự bảo vệ Dữ Liệu Cá Nhân; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ Dữ Liệu ' +
                'Cá Nhân của mình. Thông báo kịp thời cho Công Ty khi phát hiện thấy có sai sót, nhầm lẫn, ' +
                'rò rỉ về Dữ Liệu Cá Nhân hoặc nghi ngờ Dữ Liệu Cá Nhân đang bị xâm phạm.',
            },
            { num: '10.2.', text: 'Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.' },
            {
              num: '10.3.',
              text:
                'Cung cấp đầy đủ, chính xác Dữ Liệu Cá Nhân khi đồng ý cho phép Xử Lý Dữ Liệu Cá Nhân. ' +
                'Nếu có bất kỳ thông tin sai lệch nào, Chủ Thể Dữ Liệu Cá Nhân sẽ tự chịu bằng chi phí ' +
                'của mình trong trường hợp thông tin đó làm ảnh hưởng hoặc hạn chế quyền lợi của Chủ Thể ' +
                'Dữ Liệu Cá Nhân.',
            },
            {
              num: '10.4.',
              text:
                'Thực hiện quy định pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành ' +
                'vi vi phạm quy định về bảo vệ dữ liệu cá nhân.',
            },
            { num: '10.5.', text: 'Các trách nhiệm khác theo quy định pháp luật.' },
          ],
        },
      ],
    },
    {
      id: 'nguoi-tieu-dung-de-bi-ton-thuong',
      title: '11. Bảo vệ quyền lợi của người tiêu dùng dễ bị tổn thương',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '11.1.',
              text:
                'Trường hợp Khách Hàng thuộc nhóm người tiêu dùng dễ bị tổn thương theo pháp luật áp ' +
                'dụng, việc Xử Lý Dữ Liệu Cá Nhân của Khách Hàng phải được thực hiện cẩn trọng, phù hợp ' +
                'và tăng cường bảo vệ, nhằm bảo đảm quyền và lợi ích hợp pháp của Khách Hàng.',
            },
            {
              num: '11.2.',
              text:
                'Khi cần thiết để tiếp nhận và xử lý yêu cầu của Khách Hàng, Công Ty có thể thu thập các ' +
                'thông tin, tài liệu liên quan nhằm xác định tình trạng người tiêu dùng dễ bị tổn thương, ' +
                'trên cơ sở:',
              sub: [
                { text: 'Chỉ thu thập trong phạm vi cần thiết;' },
                { text: 'Sử dụng dữ liệu đúng mục đích tiếp nhận và xử lý yêu cầu;' },
                { text: 'Áp dụng các biện pháp bảo mật phù hợp đối với Dữ Liệu Cá Nhân phát sinh;' },
                {
                  text:
                    'Trường hợp quyền lợi của Khách Hàng bị xâm phạm và Khách Hàng có yêu cầu được bảo ' +
                    'vệ: cán bộ tiếp nhận có trách nhiệm gửi yêu cầu của Khách Hàng về đúng cấp có thẩm ' +
                    'quyền giải quyết khiếu nại của Khách Hàng theo quy định của Công Ty tại từng thời ' +
                    'điểm trên cơ sở đảm bảo Khách Hàng được hỗ trợ, phục vụ, giải đáp trong thời gian ' +
                    'sớm nhất có thể;',
                },
                {
                  text:
                    'Công Ty ưu tiên trực tiếp tiếp nhận, xử lý các yêu cầu của Khách Hàng là người tiêu ' +
                    'dùng dễ bị tổn thương trước các yêu cầu của Khách Hàng thông thường.',
                },
              ],
            },
            {
              num: '11.3.',
              text: 'Xử Lý Dữ Liệu Cá Nhân của trẻ em và người bị mất hoặc hạn chế năng lực hành vi dân sự:',
              sub: [
                {
                  num: '11.3.1.',
                  text:
                    'Công Ty chỉ xử lý Dữ Liệu Cá Nhân trong phạm vi cần thiết, nhằm bảo đảm quyền, lợi ' +
                    'ích hợp pháp và sự an toàn của các đối tượng nêu trên, ví dụ như:',
                  sub: [
                    {
                      text:
                        'Giúp trẻ em hoặc người dễ bị tổn thương tiếp cận và sử dụng các dịch vụ, tiện ích;',
                    },
                    {
                      text:
                        'Bảo đảm an ninh, an toàn và môi trường cung cấp dịch vụ, sản phẩm phù hợp, thân ' +
                        'thiện;',
                    },
                    { text: 'Thực hiện các nghĩa vụ cần thiết theo quy định pháp luật.' },
                  ],
                },
                {
                  num: '11.3.2.',
                  text:
                    'Trong những trường hợp pháp luật yêu cầu phải có sự đồng ý đối với việc Xử Lý Dữ ' +
                    'Liệu Cá Nhân, việc đồng ý sẽ do người đại diện theo pháp luật thực hiện thay mặt trẻ ' +
                    'em hoặc người không có đầy đủ năng lực hành vi dân sự, trừ trường hợp pháp luật có ' +
                    'quy định khác. Riêng đối với trẻ em từ đủ 07 tuổi trở lên, nếu việc xử lý dữ liệu ' +
                    'nhằm công bố hoặc tiết lộ thông tin về đời sống riêng tư, bí mật cá nhân, Công Ty ' +
                    'chỉ thực hiện khi có sự đồng ý của cả trẻ em và người đại diện theo pháp luật.',
                },
              ],
            },
            {
              num: '11.4.',
              text:
                'Trường hợp từ chối giải quyết yêu cầu của Khách Hàng, Công Ty sẽ phản hồi Khách Hàng bằng ' +
                'văn bản; trong đó, nêu rõ căn cứ pháp lý và sự không phù hợp trong yêu cầu của Khách Hàng.',
            },
          ],
        },
      ],
    },
    {
      id: 'quy-dinh-khac',
      title: '12. Các quy định khác',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '12.1.',
              text:
                'Chủ Thể Dữ Liệu Cá Nhân xác nhận rằng, bằng việc chấp nhận Chính sách này, Chủ Thể Dữ ' +
                'Liệu Cá Nhân đã đồng ý để Dữ Liệu Cá Nhân được xử lý bởi Công Ty, tổ chức, cá nhân tham ' +
                'gia quá trình Xử Lý Dữ Liệu Cá Nhân như nêu tại Chính sách này, biết rõ loại dữ liệu ' +
                'được xử lý, mục đích xử lý dữ liệu, tổ chức cá nhân được Xử Lý Dữ Liệu Cá Nhân, quyền và ' +
                'nghĩa vụ của mình liên quan đến Dữ Liệu Cá Nhân. Chủ Thể Dữ Liệu Cá Nhân đã được Công Ty ' +
                'thông báo, đã biết và đồng ý với toàn bộ các nội dung cần được thông báo trước khi Dữ ' +
                'Liệu Cá Nhân được xử lý bởi Công Ty, tổ chức, cá nhân tham gia quá trình Xử Lý Dữ Liệu ' +
                'Cá Nhân. Chủ Thể Dữ Liệu Cá Nhân đồng ý rằng Công Ty, tổ chức, cá nhân tham gia quá ' +
                'trình Xử Lý Dữ Liệu Cá Nhân không cần thực hiện thông báo lại trước khi Xử Lý Dữ Liệu ' +
                'Cá Nhân.',
            },
            {
              num: '12.2.',
              text:
                'Nếu có bất kỳ câu hỏi nào về bảo vệ dữ liệu cá nhân của Công Ty, vui lòng liên hệ với ' +
                'chúng tôi và chúng tôi sẽ cố gắng trả lời câu hỏi của Quý vị trong thời gian sớm nhất. ' +
                'Quý vị cũng có thể liên hệ với chúng tôi theo địa chỉ dưới đây:',
              sub: [
                { title: 'Địa chỉ liên hệ:', text: addressVi },
                { title: 'Địa chỉ email:', text: supportEmail },
                { title: 'Điện thoại:', text: phone },
              ],
            },
            {
              num: '12.3.',
              text: `Chính sách này được áp dụng từ ngày ${docDate(effectiveDate)}.`,
            },
          ],
        },
      ],
    },
  ],
};
