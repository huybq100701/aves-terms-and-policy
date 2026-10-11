import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyLegalNameVi, taxCode, supportEmail, phone, websiteDomain } = appInfo;

const partA = 'Phần A – Điều khoản và điều kiện chung';
const partB = 'Phần B – Điều khoản và điều kiện sử dụng dịch vụ';

export const termsVi: LegalDoc = {
  title: 'Điều kiện giao dịch chung',
  subtitle: `Sử dụng dịch vụ của ${companyLegalNameVi} · Áp dụng cho ứng dụng di động ${appName}`,
  intro:
    'Văn bản gồm hai phần: Phần A quy định các điều khoản và điều kiện chung; Phần B quy định điều ' +
    'khoản và điều kiện riêng cho Dịch Vụ Trạm Sạc và Dịch Vụ Đổi Pin. Vui lòng đọc kỹ trước khi truy ' +
    'cập Nền tảng AVES hoặc sử dụng Dịch Vụ.',
  sections: [
    {
      id: 'quy-dinh-chung',
      part: partA,
      title: '1. Quy định chung',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'Điều kiện giao dịch chung này ("ĐKGD Chung") áp dụng cho tổ chức, cá nhân sử dụng ' +
                // TODO: comment C743 – chờ xác nhận danh sách dịch vụ ("Dịch Vụ ........." trong bản gốc).
                'Dịch Vụ Trạm Sạc, Dịch Vụ Đổi Pin và các Dịch Vụ khác do ' +
                `${companyLegalNameVi} (mã số thuế: ${taxCode}) ("AVES") và các Bên Cung Cấp Dịch Vụ ` +
                'khác cung cấp.',
            },
            {
              num: '1.2.',
              text:
                `ĐKGD Chung cùng các bản sửa đổi, bổ sung được công bố trên Website AVES và/hoặc Ứng Dụng ${appName} ` +
                '(gọi chung là "Nền tảng AVES") sẽ có hiệu lực kể từ thời điểm công bố và điều chỉnh quyền ' +
                'và nghĩa vụ của các bên trong suốt quá trình Khách Hàng và/hoặc Người Sử Dụng truy cập ' +
                'Nền tảng AVES và/hoặc sử dụng Dịch Vụ. Bằng việc truy cập Nền tảng AVES và/hoặc sử dụng ' +
                'Dịch Vụ, Khách Hàng và/hoặc Người Sử Dụng xác nhận đã đọc kỹ, hiểu và đồng ý chịu ràng ' +
                'buộc bởi ĐKGD Chung này.',
            },
            {
              num: '1.3.',
              text:
                'Nếu không đồng ý với ĐKGD Chung và/hoặc các bản sửa đổi, bổ sung của ĐKGD Chung này, ' +
                'Khách Hàng và/hoặc Người Sử Dụng được quyền chấm dứt sử dụng Dịch Vụ vào bất kỳ lúc nào ' +
                'phù hợp với quy định nêu tại Điều 13.2 của ĐKGD Chung này. Việc Khách Hàng và/hoặc Người ' +
                'Sử Dụng tiếp tục truy cập Nền tảng AVES và/hoặc sử dụng Dịch Vụ sau bất kỳ bản sửa đổi ' +
                'hoặc thay thế nào của ĐKGD Chung được công bố sẽ được coi là Khách Hàng và/hoặc Người Sử ' +
                'Dụng đồng ý chịu ràng buộc bởi các sửa đổi hoặc thay thế đó.',
            },
          ],
        },
      ],
    },
    {
      id: 'dinh-nghia',
      part: partA,
      title: '2. Định nghĩa và giải thích từ ngữ',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              title: '"Bên Cung Cấp Dịch Vụ":',
              text:
                'gồm AVES, công ty con, công ty liên kết của AVES và/hoặc Đối Tác của AVES cung cấp Dịch ' +
                'Vụ cho Khách Hàng và/hoặc Người Sử Dụng.',
            },
            {
              num: '2.2.',
              title: '"Chính Sách AVES":',
              text: 'là các chính sách do AVES ban hành và được thông tin công khai tại Nền tảng AVES.',
            },
            {
              num: '2.3.',
              title: '"Dịch Vụ Trạm Sạc":',
              text:
                'là dịch vụ sạc điện cho XMĐ AVES do Bên Cung Cấp Dịch Vụ cung cấp thông qua Hệ Thống ' +
                'Trạm Sạc.',
            },
            {
              num: '2.4.',
              title: '"Dịch Vụ Đổi Pin":',
              text:
                'là dịch vụ đổi Pin XMĐ cho xe máy điện mang thương hiệu AVES ("XMĐ AVES") do Bên Cung ' +
                'Cấp Dịch Vụ cung cấp thông qua Hệ Thống Trạm Đổi Pin.',
            },
            {
              num: '2.5.',
              title: '"Dịch Vụ":',
              text:
                'là tất cả các dịch vụ do AVES hoặc Bên Cung Cấp Dịch Vụ khác cung cấp cho Khách Hàng ' +
                'và/hoặc Người Sử Dụng, bao gồm nhưng không giới hạn ở Dịch Vụ Trạm Sạc, Dịch Vụ Đổi Pin ' +
                'và các tiện ích liên quan đến quá trình sạc điện, đổi pin cho xe điện.',
            },
            {
              num: '2.6.',
              title: '"Đạt Tiêu Chuẩn":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                'là tình trạng XMĐ AVES và/hoặc Pin XMĐ đáp ứng các tiêu chuẩn kỹ thuật và an toàn do ' +
                'AVES công bố tại từng thời điểm, có nguồn gốc rõ ràng, được bảo dưỡng theo quy định và ' +
                'không bị lắp đặt, sửa chữa thông qua các kênh không được AVES phê duyệt.',
            },
            {
              num: '2.7.',
              title: '"Đối Tác":',
              text:
                'là bất kỳ tổ chức, doanh nghiệp hoặc cá nhân nào có hợp đồng/thỏa thuận hợp tác kinh ' +
                'doanh với AVES nhằm mục đích triển khai, vận hành, cung cấp Dịch Vụ.',
            },
            {
              num: '2.8.',
              title: '"Khách Hàng":',
              text:
                'là bất kỳ cá nhân, tổ chức nào sử dụng Dịch Vụ do Bên Cung Cấp Dịch Vụ cung cấp.',
            },
            {
              num: '2.9.',
              title: '"Người Sử Dụng":',
              text:
                'là bất kỳ ai sử dụng Tài Khoản của Khách Hàng và/hoặc được Khách Hàng cho phép liên ' +
                'kết Tài Khoản để sử dụng Dịch Vụ.',
            },
            {
              num: '2.10.',
              title: '"Hệ Thống Trạm Sạc":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                'là hệ thống các trạm sạc, thiết bị sạc và hạ tầng đi kèm do Bên Cung Cấp Dịch Vụ đầu ' +
                'tư, lắp đặt và/hoặc vận hành để cung cấp Dịch Vụ Trạm Sạc.',
            },
            {
              num: '2.11.',
              title: '"Hệ Thống Trạm Đổi Pin":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                'là hệ thống các trạm, tủ đổi pin và hạ tầng đi kèm do Bên Cung Cấp Dịch Vụ đầu tư, ' +
                'lắp đặt và/hoặc vận hành để cung cấp Dịch Vụ Đổi Pin.',
            },
            {
              num: '2.12.',
              title: '"Pin XMĐ":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                'là pin dùng cho XMĐ AVES, bao gồm pin được lắp đặt trên xe và pin được cung cấp, hoán ' +
                'đổi thông qua Hệ Thống Trạm Đổi Pin.',
            },
            {
              num: '2.13.',
              title: '"Tài Khoản":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                'là tài khoản do Khách Hàng đăng ký trên Ứng Dụng để truy cập Nền tảng AVES và sử dụng ' +
                'Dịch Vụ.',
            },
            {
              num: '2.14.',
              title: '"Tín Chỉ Các-bon":',
              text:
                'là chứng nhận có thể giao dịch thương mại và thể hiện quyền phát thải một tấn khí ' +
                'carbon dioxide (CO2) hoặc một tấn khí carbon dioxide (CO2) tương đương.',
            },
            {
              num: '2.15.',
              title: '"Ứng Dụng":',
              // TODO: bản gốc để trống – định nghĩa dự thảo, cần pháp chế xác nhận.
              text:
                `là ứng dụng di động ${appName} do AVES phát triển và phát hành trên các kho ứng dụng, ` +
                'bao gồm các phiên bản cập nhật.',
            },
            {
              num: '2.16.',
              title: '"AVES":',
              text:
                `là ${companyLegalNameVi} hoặc một tên gọi khác (tùy từng thời điểm) sản xuất các sản ` +
                'phẩm XMĐ AVES (gọi chung là "Xe AVES").',
            },
            {
              num: '2.17.',
              title: '"Website AVES":',
              text:
                `là trang website chính thức của AVES tại tên miền "${websiteDomain}" hoặc tên miền khác ` +
                'theo thông báo của AVES tại từng thời điểm.',
            },
          ],
        },
      ],
    },
    {
      id: 'dieu-kien-khach-hang',
      part: partA,
      title: '3. Điều kiện đối với Khách Hàng, Người Sử Dụng',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'Trong suốt thời gian sử dụng Nền tảng AVES và Dịch Vụ, Khách Hàng và/hoặc Người Sử ' +
                'Dụng cam đoan và bảo đảm rằng:',
              sub: [
                {
                  num: 'a.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng có đầy đủ năng lực hành vi dân sự theo quy định ' +
                    'pháp luật để sử dụng Nền tảng AVES và Dịch Vụ. Nếu Khách Hàng và/hoặc Người Sử Dụng ' +
                    'là người chưa thành niên hoặc bị giới hạn năng lực hành vi dân sự theo quy định của ' +
                    'pháp luật, Khách Hàng và/hoặc Người Sử Dụng chỉ được sử dụng Nền tảng AVES và Dịch ' +
                    'Vụ khi có sự hỗ trợ, giám sát và chấp thuận từ cha mẹ hoặc người giám hộ hợp pháp;',
                },
                {
                  num: 'b.',
                  text:
                    'Khách Hàng sử dụng đúng các thông tin hợp pháp của mình để đăng ký Tài Khoản trên ' +
                    'Nền tảng AVES và cam kết những thông tin mà Khách Hàng và/hoặc Người Sử Dụng cung ' +
                    'cấp cho AVES trong quá trình sử dụng Nền tảng AVES và Dịch Vụ là trung thực, không ' +
                    'gây hiểu nhầm, được cập nhật đầy đủ và chính xác;',
                },
                {
                  num: 'c.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng có nghĩa vụ sử dụng Dịch Vụ đúng quy định nêu tại ' +
                    'ĐKGD Chung này, hướng dẫn sạc xe điện được nêu chi tiết trên Nền tảng AVES ("Hướng ' +
                    'Dẫn Sạc Xe Điện") và hướng dẫn sử dụng và bảo quản pin được nêu chi tiết trên Nền ' +
                    'tảng AVES ("Hướng Dẫn Sử Dụng Và Bảo Quản Pin");',
                },
                {
                  num: 'd.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng đồng ý hợp tác và cung cấp thông tin cần thiết ' +
                    'theo yêu cầu của Bên Cung Cấp Dịch Vụ để có thể sử dụng Dịch Vụ;',
                },
                {
                  num: 'e.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng có nghĩa vụ tuân thủ đúng hướng dẫn đảm bảo an ' +
                    'toàn khi sử dụng Ứng Dụng. Khách Hàng và/hoặc Người Sử Dụng phải tạm dừng sử dụng ' +
                    'Dịch Vụ, thông báo ngay và thực hiện theo chỉ dẫn của Bên Cung Cấp Dịch Vụ trong ' +
                    'các trường hợp mất pin hoặc mất an toàn, có nguy cơ mất an toàn hoặc gặp vấn đề ' +
                    'hoặc sự cố trong quá trình sử dụng Dịch Vụ hoặc khi cần bất kỳ sự hỗ trợ nào trong ' +
                    'quá trình sử dụng Dịch Vụ;',
                },
                {
                  num: 'f.',
                  text:
                    'Nếu Khách Hàng là tổ chức, Người Sử Dụng Nền tảng AVES và Dịch Vụ phải là người ' +
                    'đại diện theo pháp luật hoặc người được ủy quyền hợp pháp của Khách Hàng. AVES ' +
                    'không có nghĩa vụ xác minh tư cách của Người Sử Dụng;',
                },
                {
                  num: 'g.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng có nghĩa vụ tuân thủ quy định về quyền sở hữu XMĐ ' +
                    'AVES và chia sẻ:',
                  sub: [
                    {
                      text:
                        'Khách Hàng và/hoặc Người Sử Dụng chỉ được thêm và điều khiển XMĐ AVES mà mình ' +
                        'là chủ sở hữu hợp pháp ("Chủ Xe") hoặc là người được Chủ Xe cho phép. Chủ Xe ' +
                        'chịu trách nhiệm toàn bộ và cuối cùng liên quan đến việc quản lý xe trên ' +
                        `${appName}.`,
                    },
                    {
                      text:
                        'Khi chuyển nhượng XMĐ AVES cho người khác, Khách Hàng và/hoặc Người Sử Dụng ' +
                        'phải thực hiện đúng quy trình chuyển quyền sở hữu trong Ứng Dụng và tuân thủ ' +
                        'quy định pháp luật liên quan để bảo đảm người chủ mới có toàn quyền của chủ sở ' +
                        'hữu và Khách Hàng và/hoặc Người Sử Dụng hiện tại không còn được truy cập và ' +
                        `thực hiện các thao tác trên ${appName} liên quan đến XMĐ AVES. Trường hợp còn ` +
                        `được truy cập và thực hiện các thao tác trên ${appName} liên quan đến XMĐ AVES ` +
                        'đã chuyển quyền sở hữu, Khách Hàng và/hoặc Người Sử Dụng hiện tại phải thông ' +
                        'báo ngay lập tức cho AVES để các bên phối hợp xử lý cho đến khi hoàn tất.',
                    },
                    {
                      text:
                        `AVES hoặc Ứng Dụng ${appName} không có trách nhiệm giải quyết tranh chấp về ` +
                        `quyền sở hữu xe giữa các bên. AVES hoặc Ứng Dụng ${appName} có trách nhiệm ` +
                        'phối hợp cung cấp thông tin liên quan (nếu có) và có thể thực hiện các hành ' +
                        'động cần thiết trong trường hợp nhận được yêu cầu cung cấp thông tin của cá ' +
                        'nhân, cơ quan, tổ chức có thẩm quyền theo quy định của pháp luật.',
                    },
                  ],
                },
              ],
            },
            {
              num: '3.2.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng và/hoặc người giám hộ cam kết chịu hoàn toàn trách ' +
                'nhiệm và bồi thường mọi thiệt hại phát sinh từ việc sử dụng Nền tảng AVES và/hoặc Dịch ' +
                'Vụ khi không đáp ứng/tuân thủ các điều kiện và quy định của ĐKGD Chung này.',
            },
          ],
        },
      ],
    },
    {
      id: 'dang-ky-tai-khoan',
      part: partA,
      title: '4. Đăng ký Tài Khoản',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'Khách Hàng đáp ứng các điều kiện tại Điều 3 ĐKGD Chung thực hiện đăng ký Tài Khoản ' +
                'trên Ứng Dụng và tự quản lý, lưu trữ và bảo mật thông tin Tài Khoản. Mọi hành vi thực ' +
                'hiện trên Ứng Dụng thông qua Tài Khoản của Khách Hàng được xem là hành vi của Khách Hàng.',
            },
            {
              num: '4.2.',
              text:
                'Khách Hàng không được chuyển nhượng, bán, tặng, cho mượn, cho thuê hoặc ủy quyền, cấp ' +
                'phép cho bên thứ ba sử dụng Tài Khoản dưới bất kỳ hình thức nào khác trừ trường hợp ' +
                'được quy định tại ĐKGD Chung này.',
            },
            {
              num: '4.3.',
              text: 'AVES có thể từ chối đăng ký bất kỳ Tài Khoản nào vi phạm ĐKGD Chung này.',
            },
            {
              num: '4.4.',
              text:
                'Nếu Khách Hàng phát hiện thông tin truy cập bị mất hoặc bị đánh cắp hoặc Tài Khoản bị ' +
                'truy cập trái phép hoặc các tình huống bất thường khác đối với Tài Khoản, Khách Hàng ' +
                'cần thông báo ngay cho AVES theo phương thức liên lạc tại Điều 16 của ĐKGD Chung này.',
            },
          ],
        },
      ],
    },
    {
      id: 'thong-tin-nguoi-dung',
      part: partA,
      title: '5. Thông tin người dùng',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '5.1.',
              text:
                'AVES có quyền yêu cầu Khách Hàng cung cấp thông tin cần thiết (bao gồm dữ liệu cá ' +
                'nhân) để cung cấp Dịch Vụ. Các thông tin này sẽ được thu thập, xử lý và sử dụng đúng ' +
                'quy định pháp luật và Chính sách bảo vệ dữ liệu cá nhân của AVES được đăng tải công ' +
                'khai tại Website AVES và/hoặc Ứng Dụng.',
            },
            {
              num: '5.2.',
              text:
                'Việc Khách Hàng từ chối cung cấp thông tin sẽ khiến Bên Cung Cấp Dịch Vụ không thể ' +
                'cung cấp Dịch Vụ và AVES không chịu trách nhiệm đối với các rủi ro, thiệt hại phát sinh ' +
                'từ việc không cung cấp thông tin này.',
            },
          ],
        },
      ],
    },
    {
      id: 'nen-tang-aves',
      part: partA,
      title: '6. Nền tảng AVES',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '6.1.',
              text:
                'AVES có thể thay đổi, chỉnh sửa, tạm ngưng hoặc chấm dứt tất cả hoặc bất kỳ phần nào ' +
                'của Nền tảng AVES vào bất kỳ thời điểm nào.',
            },
            {
              num: '6.2.',
              text:
                'AVES không đảm bảo về tính kịp thời, hữu ích hay đầy đủ của thông tin trên Nền tảng ' +
                'AVES và không chịu trách nhiệm với các thiệt hại gián tiếp phát sinh từ việc sử dụng ' +
                'hoặc không sử dụng Nền tảng AVES.',
            },
            {
              num: '6.3.',
              text:
                'Nền tảng AVES có thể chứa quảng cáo, tài trợ hoặc liên kết hoặc tham chiếu tới các ' +
                'trang web khác được vận hành bởi bên thứ ba nhằm tạo sự thuận tiện cho Khách Hàng. ' +
                'AVES không chịu trách nhiệm với nội dung, tính chính xác hoặc quan điểm được thể hiện ' +
                'trên các quảng cáo, tài trợ hoặc liên kết hay trang web đó. Việc Khách Hàng quyết định ' +
                'truy cập các trang web của bên thứ ba hoặc sử dụng dịch vụ, hàng hóa trên các trang web ' +
                'của bên thứ ba hoàn toàn là quyết định của Khách Hàng và không ràng buộc trách nhiệm ' +
                'pháp lý nào đối với AVES.',
            },
          ],
        },
      ],
    },
    {
      id: 'cung-cap-dich-vu',
      part: partA,
      title: '7. Cung cấp và sử dụng Dịch Vụ',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '7.1.',
              text:
                'AVES sẽ nỗ lực hợp lý để cung cấp quyền truy cập liên tục vào Tài Khoản nhưng không ' +
                'đảm bảo rằng Dịch Vụ sẽ luôn khả dụng. Dịch Vụ có thể không khả dụng trong thời gian ' +
                'bảo trì, trường hợp khẩn cấp, Sự Kiện Bất Khả Kháng hoặc các trường hợp khác theo thông ' +
                'báo của AVES.',
            },
            {
              num: '7.2.',
              text:
                'Người Sử Dụng có nghĩa vụ tuân thủ các quy định trong ĐKGD Chung này. Khách Hàng và ' +
                'Người Sử Dụng cùng thừa nhận hành động của nhau, và hành động được thực hiện bởi một ' +
                'trong các chủ thể sẽ được coi là hành động được thực hiện bởi tất cả các bên. Trong ' +
                'trường hợp một trong các chủ thể vi phạm ĐKGD Chung này, Khách Hàng và Người Sử Dụng ' +
                'sẽ cùng chịu trách nhiệm bồi thường cho Bên Cung Cấp Dịch Vụ.',
            },
            {
              num: '7.3.',
              text:
                'Tín Chỉ Các-bon phát sinh từ Dịch Vụ, Hệ Thống Trạm Sạc và Hệ Thống Trạm Đổi Pin thuộc ' +
                'toàn quyền sở hữu của AVES. AVES được toàn quyền thực hiện việc đăng ký, triển khai, ' +
                'quản lý, khai thác Tín Chỉ Các-bon và hưởng các quyền, lợi ích và doanh thu (nếu có) từ ' +
                'việc đăng ký, triển khai, quản lý và khai thác Tín Chỉ Các-bon này.',
            },
          ],
        },
      ],
    },
    {
      id: 'phi-thanh-toan',
      part: partA,
      title: '8. Phí Dịch Vụ và thanh toán',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '8.1.',
              title: 'Phí Dịch Vụ.',
              text:
                'Chi tiết về mức phí Dịch Vụ, thuế và bất kỳ khoản thanh toán nào liên quan đến việc ' +
                'sử dụng Dịch Vụ sẽ được công bố trên Nền tảng AVES.',
            },
            {
              num: '8.2.',
              title: 'Phương thức thanh toán.',
              text:
                'Khách Hàng và Người Sử Dụng thực hiện thanh toán theo các phương thức được tích hợp ' +
                'trên Nền tảng AVES. AVES có thể tự mình triển khai hoặc hợp tác với các nhà cung cấp ' +
                'dịch vụ để tích hợp phương thức thanh toán điện tử trên Nền tảng AVES theo quy định ' +
                'pháp luật.',
            },
            {
              num: '8.3.',
              title: 'Trách nhiệm thanh toán.',
              sub: [
                {
                  num: 'a.',
                  text:
                    'Khách Hàng có nghĩa vụ thanh toán đầy đủ các khoản phí Dịch Vụ. Người Sử Dụng cũng ' +
                    'có thể thanh toán thay Khách Hàng thông qua Tài Khoản được liên kết. Để làm rõ, ' +
                    'Khách Hàng là bên cuối cùng chịu trách nhiệm đối với mọi nghĩa vụ thanh toán.',
                },
                {
                  num: 'b.',
                  text:
                    'Thời hạn thanh toán cho từng loại phí Dịch Vụ và/hoặc khoản cần thanh toán sẽ được ' +
                    'hiển thị trên giao diện Ứng Dụng hoặc theo quy định do AVES công bố tại từng thời ' +
                    'điểm.',
                },
                {
                  num: 'c.',
                  text:
                    'Các khoản thanh toán của Khách Hàng không được thanh toán đầy đủ, đúng thời hạn theo ' +
                    'thông báo của AVES sẽ được coi là quá hạn và AVES có quyền áp dụng các biện pháp xử ' +
                    'lý vi phạm theo quy định tại Điều 8.4 của ĐKGD Chung này.',
                },
              ],
            },
            {
              num: '8.4.',
              title: 'Xử lý vi phạm nghĩa vụ thanh toán.',
              sub: [
                {
                  num: 'a.',
                  text:
                    'Khi (các) khoản thanh toán của Khách Hàng bị quá hạn, AVES sẽ gửi thông báo nhắc ' +
                    'Khách Hàng thanh toán 03 lần thông qua Ứng Dụng, mỗi lần cách nhau không dưới 05 ' +
                    'ngày.',
                },
                {
                  num: 'b.',
                  text:
                    'Nếu sau 15 ngày kể từ khi AVES gửi thông báo lần đầu mà Khách Hàng không thanh toán ' +
                    'hoặc thanh toán không đầy đủ, AVES có quyền thực hiện một hoặc nhiều biện pháp sau ' +
                    'đây:',
                  sub: [
                    {
                      num: '(i)',
                      text:
                        'yêu cầu Khách Hàng thanh toán tiền lãi đối với khoản tiền chậm thanh toán, với ' +
                        'mức lãi 0,05%/ngày kể từ ngày đến hạn thanh toán cho đến ngày Khách Hàng thực ' +
                        'tế thanh toán đầy đủ cho AVES;',
                    },
                    {
                      num: '(ii)',
                      text:
                        'hạn chế hoặc tạm ngừng quyền sử dụng Dịch Vụ của Khách Hàng và Người Sử Dụng ' +
                        'hoặc hạn chế mức sạc pin và/hoặc khóa kết nối xe và pin bằng biện pháp kỹ thuật ' +
                        'cho đến khi Khách Hàng thanh toán đầy đủ các khoản phí quá hạn; và',
                    },
                    {
                      num: '(iii)',
                      text:
                        'yêu cầu Khách Hàng bồi thường cho AVES và các bên có liên quan mọi tổn thất phát ' +
                        'sinh từ việc Khách Hàng vi phạm nghĩa vụ thanh toán.',
                    },
                  ],
                },
              ],
            },
            {
              num: '8.5.',
              title: 'Thông báo thay đổi phí Dịch Vụ.',
              text:
                'AVES sẽ thông báo về việc thay đổi phí Dịch Vụ thông qua Nền tảng AVES ít nhất 10 ' +
                '(mười) ngày trước khi các thay đổi về phí Dịch Vụ có hiệu lực. Việc Khách Hàng và Người ' +
                'Sử Dụng tiếp tục sử dụng Dịch Vụ sau thời điểm biểu phí mới có hiệu lực đồng nghĩa với ' +
                'việc chấp nhận mức phí mới đó.',
            },
          ],
        },
      ],
    },
    {
      id: 'khuyen-mai',
      part: partA,
      title: '9. Khuyến mại, ưu đãi, chiết khấu',
      blocks: [
        {
          kind: 'p',
          text:
            'Khách Hàng và Người Sử Dụng cam kết sử dụng các chương trình khuyến mại, ưu đãi và chiết ' +
            'khấu do AVES triển khai đúng mục đích, đúng điều kiện áp dụng và không được sao chép, ' +
            'chuyển nhượng, thương mại hóa hoặc sử dụng theo cách gian lận dưới bất kỳ hình thức nào.',
        },
      ],
    },
    {
      id: 'so-huu-tri-tue',
      part: partA,
      title: '10. Quyền sở hữu trí tuệ',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '10.1.',
              text:
                'Quyền sở hữu trí tuệ, bao gồm nhưng không giới hạn ở quyền tác giả, quyền liên quan, ' +
                'nhãn hiệu, tên thương mại, kiểu dáng công nghiệp, sáng chế, giải pháp hữu ích, bí mật ' +
                'kinh doanh, bí quyết (know-how), phần mềm, quy trình, thiết kế, tài liệu, dữ liệu và ' +
                'các quyền sở hữu độc quyền khác, dù đã được đăng ký bảo hộ hay chưa, liên quan đến Dịch ' +
                'Vụ, Nền tảng AVES thuộc quyền sử dụng, sở hữu hợp pháp của AVES và/hoặc bên cấp phép ' +
                'cho AVES (nếu có).',
            },
            {
              num: '10.2.',
              text:
                'Việc Khách Hàng và Người Sử Dụng sử dụng Dịch Vụ, Nền tảng AVES không được hiểu là việc ' +
                'chuyển giao hoặc cấp cho Khách Hàng và Người Sử Dụng bất kỳ quyền sở hữu trí tuệ nào. ' +
                'Khách Hàng và Người Sử Dụng không được sao chép, chỉnh sửa, phát tán, tái bản, khai thác ' +
                'thương mại hoặc tạo sản phẩm phái sinh từ bất kỳ nội dung nào khi chưa có sự chấp thuận ' +
                'bằng văn bản của AVES.',
            },
          ],
        },
      ],
    },
    {
      id: 'bat-kha-khang',
      part: partA,
      title: '11. Sự kiện bất khả kháng',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '11.1.',
              text:
                'Sự Kiện Bất Khả Kháng là sự kiện xảy ra một cách khách quan không thể lường trước được ' +
                'và không thể khắc phục được mặc dù đã áp dụng mọi biện pháp cần thiết và khả năng cho ' +
                'phép, bao gồm nhưng không giới hạn hỏa hoạn, lũ lụt hoặc thiên tai, chiến tranh, đình ' +
                'công, sự thay đổi trong chủ trương, chính sách, pháp luật của Nhà nước. Mọi trường hợp ' +
                'khó khăn về tài chính không được xem là Sự Kiện Bất Khả Kháng.',
            },
            {
              num: '11.2.',
              text:
                'Không bên nào phải chịu trách nhiệm về việc chậm trễ hay gián đoạn thực hiện nghĩa vụ ' +
                'nếu bên đó gặp phải Sự Kiện Bất Khả Kháng, với điều kiện: (i) bên bị ảnh hưởng đã thông ' +
                'báo cho bên còn lại trong thời hạn 07 (bảy) ngày kể từ ngày xảy ra Sự Kiện Bất Khả ' +
                'Kháng; và (ii) bên bị ảnh hưởng đã nỗ lực hợp lý hạn chế tối đa tác động bất lợi của Sự ' +
                'Kiện Bất Khả Kháng. Bên bị ảnh hưởng sẽ được gia hạn một khoảng thời gian hợp lý để ' +
                'thực hiện các nghĩa vụ bị ảnh hưởng bởi Sự Kiện Bất Khả Kháng.',
            },
          ],
        },
      ],
    },
    {
      id: 'boi-thuong',
      part: partA,
      title: '12. Bồi thường và giới hạn trách nhiệm',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '12.1.',
              text:
                'Khách Hàng phải bồi thường và hoàn trả cho Bên Cung Cấp Dịch Vụ đối với tất cả các ' +
                'khoản tổn thất, thiệt hại, chi phí, khiếu nại và trách nhiệm pháp lý dưới bất kỳ hình ' +
                'thức nào mà Bên Cung Cấp Dịch Vụ phải gánh chịu hoặc phát sinh từ vi phạm của Khách ' +
                'Hàng, Người Sử Dụng trái quy định tại ĐKGD Chung và pháp luật có liên quan.',
            },
            {
              num: '12.2.',
              text:
                'Biện pháp khắc phục duy nhất đối với bất kỳ vi phạm của AVES theo quy định tại ĐKGD ' +
                'Chung là AVES sẽ hoàn trả lại phí Dịch Vụ mà Khách Hàng đã thanh toán cho AVES có liên ' +
                'quan đến Dịch Vụ bị vi phạm, trừ trường hợp pháp luật có quy định khác.',
            },
            {
              num: '12.3.',
              text:
                'Nếu tại bất kỳ thời điểm nào AVES xác định một cách hợp lý rằng bất kỳ vụ án nào phát ' +
                'sinh từ hoặc liên quan đến việc sử dụng Dịch Vụ của Khách Hàng và/hoặc Người Sử Dụng có ' +
                'thể ảnh hưởng bất lợi đến AVES, AVES có thể yêu cầu Khách Hàng và/hoặc Người Sử Dụng đề ' +
                'nghị cơ quan có thẩm quyền cho phép AVES tham gia quá trình tố tụng và đưa ra lập luận ' +
                'bảo vệ AVES. Khách Hàng không được tham gia vào bất kỳ thỏa thuận dàn xếp nào có ảnh ' +
                'hưởng tới quyền lợi của AVES mà không có sự đồng ý trước bằng văn bản của AVES.',
            },
          ],
        },
      ],
    },
    {
      id: 'tam-ngung-cham-dut',
      part: partA,
      title: '13. Tạm ngừng, chấm dứt',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '13.1.',
              text:
                'AVES có quyền từ chối, tạm ngừng hoặc chấm dứt một phần hoặc toàn bộ quyền sử dụng ' +
                'Dịch Vụ và/hoặc quyền truy cập vào Nền tảng AVES trong các trường hợp sau:',
              sub: [
                {
                  num: '(i)',
                  text:
                    'Khách Hàng và Người Sử Dụng vi phạm quy định của pháp luật, ĐKGD Chung này và/hoặc ' +
                    'các Chính Sách AVES mà không khắc phục vi phạm trong thời hạn theo thông báo của ' +
                    'AVES;',
                },
                { num: '(ii)', text: 'Xảy ra Sự Kiện Bất Khả Kháng;' },
                {
                  num: '(iii)',
                  text:
                    'Việc sử dụng Nền tảng AVES, Dịch Vụ của Khách Hàng và Người Sử Dụng gây hại tới các ' +
                    'Khách Hàng khác và/hoặc các bên thứ ba;',
                },
                {
                  num: '(iv)',
                  text:
                    'AVES giải thể, phá sản hoặc tạm ngừng hoạt động hoặc AVES tạm dừng/chấm dứt cung ' +
                    'cấp bất kỳ Dịch Vụ nào theo quyết định của AVES với điều kiện AVES hoàn trả cho ' +
                    'Khách Hàng các khoản tiền đã thu trước của Khách Hàng (nếu có) cho các phần Dịch Vụ ' +
                    'mà Khách Hàng chưa sử dụng; hoặc',
                },
                {
                  num: '(v)',
                  text:
                    'Các trường hợp khác theo quy định của pháp luật, hoặc được quy định tại ĐKGD Chung ' +
                    'này và/hoặc các Chính Sách AVES.',
                },
              ],
            },
            {
              num: '13.2.',
              text:
                'Khách Hàng có quyền chấm dứt sử dụng Dịch Vụ vào bất kỳ lúc nào nếu không đồng ý với ' +
                'ĐKGD Chung theo hướng dẫn trên Nền tảng AVES với điều kiện Khách Hàng đã hoàn thành các ' +
                'nghĩa vụ của mình quy định tại ĐKGD Chung này và các chính sách của AVES.',
            },
            {
              num: '13.3.',
              text:
                'Việc tạm ngừng, chấm dứt Dịch Vụ sẽ không ảnh hưởng đến các quyền, biện pháp khắc phục, ' +
                'nghĩa vụ và trách nhiệm của các bên đã phát sinh trước ngày chấm dứt.',
            },
          ],
        },
      ],
    },
    {
      id: 'luat-dieu-chinh',
      part: partA,
      title: '14. Luật điều chỉnh và giải quyết tranh chấp',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '14.1.',
              text: 'ĐKGD Chung này sẽ được điều chỉnh và giải thích theo pháp luật Việt Nam.',
            },
            {
              num: '14.2.',
              text:
                'Mọi tranh chấp phát sinh từ hoặc liên quan đến ĐKGD Chung này, các Chính Sách AVES ' +
                'hoặc việc sử dụng Dịch Vụ, Nền tảng AVES sẽ được ưu tiên giải quyết thông qua thương ' +
                'lượng, hòa giải. Nếu tranh chấp không được giải quyết bằng cách thương lượng hoặc hòa ' +
                'giải trong vòng 90 ngày kể từ ngày phát sinh, các bên đồng ý tranh chấp đó sẽ được giải ' +
                'quyết tại Tòa án nơi AVES đặt trụ sở chính.',
            },
          ],
        },
      ],
    },
    {
      id: 'hop-tac-co-quan-nha-nuoc',
      part: partA,
      title: '15. Hợp tác với cơ quan nhà nước',
      blocks: [
        {
          kind: 'p',
          text:
            'Khách Hàng thừa nhận rằng AVES có quyền xác minh và xử lý các hành vi vi phạm ĐKGD Chung ' +
            'này và Chính Sách AVES trong phạm vi tối đa pháp luật cho phép. AVES có thể báo cáo các ' +
            'hành vi vi phạm tới, và tham gia và hợp tác với các cơ quan có thẩm quyền hoặc bên thứ ba ' +
            'khác trong việc xử lý hành vi vi phạm.',
        },
      ],
    },
    {
      id: 'lien-he-ho-tro',
      part: partA,
      title: '16. Thông báo, liên hệ và hỗ trợ',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '16.1.',
              text:
                'Khách Hàng và Người Sử Dụng có thể liên hệ với AVES bằng cách gửi yêu cầu bằng văn bản ' +
                `tới địa chỉ email: ${supportEmail} hoặc liên hệ tới Hotline: ${phone}.`,
            },
            {
              num: '16.2.',
              text:
                'AVES có thể gửi thông báo cho Khách Hàng và Người Sử Dụng bằng một trong các phương ' +
                'tiện: thông báo qua Nền tảng AVES, tin nhắn điện thoại SMS, email, gọi điện thoại hoặc ' +
                'gửi văn bản thông báo tới thông tin đăng ký Tài Khoản hoặc theo cách thức khác đã được ' +
                'thỏa thuận với Khách Hàng.',
            },
          ],
        },
      ],
    },
    {
      id: 'dieu-khoan-khac',
      part: partA,
      title: '17. Các điều khoản và điều kiện khác',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '17.1.',
              text:
                'Để xác minh danh tính Khách Hàng và/hoặc Người Sử Dụng, bảo đảm an ninh, an toàn trong ' +
                'quá trình cung cấp Dịch Vụ và bảo vệ quyền, lợi ích hợp pháp của các bên có liên quan, ' +
                'Bên Cung Cấp Dịch Vụ sẽ sử dụng camera của địa điểm đặt Trạm Sạc/Trạm Đổi Pin và các ' +
                'biện pháp thích hợp khác để nhận diện Khách Hàng và/hoặc Người Sử Dụng, Pin XMĐ, loại ' +
                'xe và biển số xe và hoạt động của Khách Hàng và/hoặc Người Sử Dụng tại khu vực Trạm ' +
                'Sạc/Trạm Đổi Pin. Các thông tin này sẽ được AVES lưu trữ, quản lý, bảo mật và chỉ cung ' +
                'cấp theo yêu cầu của pháp luật và cơ quan nhà nước có thẩm quyền.',
            },
            {
              num: '17.2.',
              text:
                'Khách Hàng không được chuyển nhượng, chuyển giao hoặc định đoạt theo cách khác bất kỳ ' +
                'các quyền và nghĩa vụ của mình theo ĐKGD Chung này nếu không có sự đồng ý trước bằng ' +
                'văn bản của AVES.',
            },
            {
              num: '17.3.',
              text:
                'AVES có quyền chuyển nhượng, chuyển giao hoặc định đoạt theo cách khác bất kỳ hoặc tất ' +
                'cả các quyền và nghĩa vụ của mình theo ĐKGD Chung này bằng cách gửi thông báo cho Khách ' +
                'Hàng hoặc đăng tải thông tin trên Nền tảng AVES. Việc Khách Hàng và Người Sử Dụng tiếp ' +
                'tục sử dụng Dịch Vụ, truy cập và sử dụng Nền tảng AVES sau bất kỳ việc chuyển nhượng, ' +
                'chuyển giao hoặc định đoạt nào cấu thành sự đồng ý của Khách Hàng và Người Sử Dụng với ' +
                'việc chuyển nhượng, chuyển giao hoặc định đoạt đó.',
            },
            {
              num: '17.4.',
              text:
                'Việc AVES không hoặc chậm thực hiện bất kỳ quyền hoặc biện pháp khắc phục nào theo ' +
                'ĐKGD Chung này, các Chính Sách AVES hoặc pháp luật sẽ không được xem là từ bỏ quyền ' +
                'hoặc biện pháp khắc phục đó, trừ khi việc từ bỏ được lập thành văn bản.',
            },
            {
              num: '17.5.',
              text:
                'Nếu bất kỳ quy định hoặc một phần quy định nào của ĐKGD Chung này trở nên vô hiệu, trái ' +
                'pháp luật hoặc không thể thi hành, quy định đó sẽ được coi là bị xóa bỏ, nhưng sẽ không ' +
                'ảnh hưởng đến hiệu lực và khả năng thi hành của phần còn lại của ĐKGD Chung này.',
            },
            {
              num: '17.6.',
              text:
                'ĐKGD Chung này được lập bằng tiếng Việt và tiếng Anh. Trong trường hợp có bất kỳ sự ' +
                'không thống nhất nào giữa bản tiếng Việt và bản dịch bằng tiếng Anh, bản tiếng Việt sẽ ' +
                'được ưu tiên áp dụng.',
            },
          ],
        },
      ],
    },
    {
      id: 'dich-vu-tram-sac',
      part: partB,
      title: 'I. Dịch Vụ Trạm Sạc',
      blocks: [
        // TODO: comment C2034 – chờ bổ sung quy định an toàn khi sử dụng trạm sạc.
        { kind: 'h3', text: '1. Sử dụng Dịch Vụ Trạm Sạc' },
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng đồng ý tuân thủ các quy định do Bên Cung Cấp Dịch Vụ ' +
                'đặt ra liên quan đến tài sản của Bên Cung Cấp Dịch Vụ và việc sử dụng, bao gồm nhưng ' +
                'không giới hạn ở các quy tắc ứng xử, quy định về đỗ xe, giới hạn thời gian đỗ xe, v.v. ' +
                'Khách Hàng và/hoặc Người Sử Dụng hoàn toàn chịu trách nhiệm về bất kỳ thiệt hại, phí, ' +
                'tiền phạt hoặc tổn thất nào do Khách Hàng và/hoặc Người Sử Dụng không tuân thủ bất kỳ ' +
                'quy định nào của Bên Cung Cấp Dịch Vụ.',
            },
            {
              num: '1.2.',
              text:
                'Trong trường hợp khẩn cấp hoặc bất kỳ tình huống nào đe dọa gây thiệt hại đến tài sản, ' +
                'gây thương tích, đe dọa tính mạng con người, Khách Hàng và/hoặc Người Sử Dụng cần gọi ' +
                `ngay đến Hotline: ${phone} hoặc số điện thoại khẩn cấp của cơ quan nhà nước có thẩm ` +
                'quyền (113, 114, 115) và làm theo hướng dẫn được đưa ra.',
            },
          ],
        },
        { kind: 'h3', text: '2. Phí Dịch Vụ Trạm Sạc và thanh toán' },
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              text:
                'Chi phí cho một lần sử dụng Dịch Vụ Trạm Sạc sẽ tùy thuộc vào mức phí hiển thị trên ' +
                'giao diện Ứng Dụng và theo đơn giá do AVES công bố tại từng thời điểm trên các nền tảng ' +
                'của AVES.',
            },
            {
              num: '2.2.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng sẽ tự chịu mọi chi phí và rủi ro phát sinh trong quá ' +
                'trình sử dụng Dịch Vụ Trạm Sạc (bao gồm nhưng không giới hạn chi phí di chuyển xe tới ' +
                'Trạm Sạc, phí đỗ xe, phí cầu đường, thương tích cá nhân và/hoặc thiệt hại tài sản do ' +
                'Khách Hàng và/hoặc Người Sử Dụng ra vào địa điểm Trạm Sạc và sử dụng Dịch Vụ Trạm Sạc ' +
                'mà không phải do lỗi cố ý của Bên Cung Cấp Dịch Vụ, v.v.).',
            },
          ],
        },
        { kind: 'h3', text: '3. Miễn trừ trách nhiệm' },
        {
          kind: 'p',
          text:
            'Bên Cung Cấp Dịch Vụ có thể đơn phương từ chối hoặc hủy yêu cầu sử dụng Dịch Vụ Trạm Sạc ' +
            'của Khách Hàng và/hoặc Người Sử Dụng, và Bên Cung Cấp Dịch Vụ sẽ không chịu trách nhiệm ' +
            'đối với bất kỳ thiệt hại nào đối với Khách Hàng và/hoặc Người Sử Dụng do những nguyên nhân ' +
            'sau:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'Xe AVES của Khách Hàng/Người Sử Dụng đã gặp tai nạn hoặc tham gia thử nghiệm xe vượt ' +
                'quá phạm vi sử dụng thông thường;',
            },
            {
              num: '3.2.',
              text:
                'Có vật lạ hoặc dấu hiệu lạ trên bề mặt pin của Xe AVES của Khách Hàng/Người Sử Dụng;',
            },
            {
              num: '3.3.',
              text:
                'Xe AVES và/hoặc pin được lắp đặt trong Xe AVES của Khách Hàng/Người Sử Dụng không Đạt ' +
                'Tiêu Chuẩn (bao gồm nhưng không giới hạn ở xe/pin bị hư hỏng, không rõ nguồn gốc, không ' +
                'được bảo trì theo quy định và/hoặc được lắp đặt, sửa chữa thông qua các kênh không được ' +
                'Bên Cung Cấp Dịch Vụ hoặc AVES phê duyệt);',
            },
            {
              num: '3.4.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng chưa khắc phục các vi phạm nghĩa vụ thanh toán cho ' +
                'AVES theo quy định;',
            },
            {
              num: '3.5.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng vi phạm/không thực hiện đúng các nghĩa vụ khác theo ' +
                'quy định ĐKGD Chung và pháp luật hiện hành;',
            },
            { num: '3.6.', text: 'Xảy ra Sự Kiện Bất Khả Kháng;' },
            {
              num: '3.7.',
              text:
                'Trong trường hợp vì lý do kỹ thuật, Bên Cung Cấp Dịch Vụ không thể cung cấp Dịch Vụ ' +
                'Trạm Sạc; hoặc',
            },
            {
              num: '3.8.',
              text: 'Các trường hợp khác được quy định trong văn bản pháp luật, chính sách của nhà nước.',
            },
          ],
        },
        { kind: 'h3', text: '4. Bồi thường thiệt hại' },
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'Ngoài các trường hợp bồi thường theo quy định tại ĐKGD Chung và các Chính Sách AVES, ' +
                'trong trường hợp Khách Hàng và/hoặc Người Sử Dụng sử dụng thiết bị sạc, phương tiện, pin ' +
                'không được phép trên Hệ Thống Trạm Sạc hoặc không thực hiện đúng Hướng Dẫn Sạc Xe Điện, ' +
                'thì:',
              sub: [
                {
                  num: 'a.',
                  text:
                    'Khách Hàng và/hoặc Người Sử Dụng có nghĩa vụ bồi thường cho Bên Cung Cấp Dịch Vụ ' +
                    'và/hoặc bên thứ ba các tổn thất và thiệt hại liên quan, bao gồm nhưng không giới ' +
                    'hạn các chi phí sửa chữa, khắc phục, thay thế, các chi phí hợp lý mà Bên Cung Cấp ' +
                    'Dịch Vụ và/hoặc bên thứ ba phải chịu để tránh hoặc giảm thiểu tổn thất; và',
                },
                {
                  num: 'b.',
                  text:
                    'Bên Cung Cấp Dịch Vụ có quyền đơn phương từ chối hoặc hủy bỏ yêu cầu sử dụng Dịch ' +
                    'Vụ Trạm Sạc của Khách Hàng và/hoặc Người Sử Dụng trong quá trình giải quyết bồi ' +
                    'thường, khiếu nại/khiếu kiện.',
                },
              ],
            },
            {
              num: '4.2.',
              // TODO: bản gốc để trống mức tiền (…VNĐ/giờ, tối đa …VNĐ/lần) – cần bổ sung.
              text:
                'Việc Khách Hàng và/hoặc Người Sử Dụng dừng, đỗ phương tiện trong khu vực của Trạm Sạc ' +
                'nhưng không sử dụng Dịch Vụ Trạm Sạc sẽ ảnh hưởng đến hoạt động kinh doanh và gây thiệt ' +
                'hại đến doanh thu của Bên Cung Cấp Dịch Vụ. Theo đó, Khách Hàng và/hoặc Người Sử Dụng ' +
                'đồng ý thanh toán cho Bên Cung Cấp Dịch Vụ khoản tiền bồi thường thiệt hại doanh thu ' +
                'tính theo mỗi giờ phương tiện dừng, đỗ trong khu vực của Trạm Sạc, theo mức và mức tối ' +
                'đa cho mỗi lần dừng, đỗ xe do AVES công bố trên Nền tảng AVES tại từng thời điểm. Khách ' +
                'Hàng và/hoặc Người Sử Dụng công nhận rằng khoản thanh toán theo điều khoản này là thỏa ' +
                'thuận dân sự mà các bên đã tự do cam kết và thỏa thuận.',
            },
          ],
        },
      ],
    },
    {
      id: 'dich-vu-doi-pin',
      part: partB,
      title: 'II. Dịch Vụ Đổi Pin',
      blocks: [
        // TODO: comment C2376 – chờ bổ sung quy định an toàn khi sử dụng dịch vụ đổi pin.
        { kind: 'h3', text: '1. Sử dụng Dịch Vụ Đổi Pin' },
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng đồng ý tuân thủ các quy định do Bên Cung Cấp Dịch Vụ ' +
                'đặt ra liên quan đến tài sản của Bên Cung Cấp Dịch Vụ và việc sử dụng Trạm Đổi Pin, bao ' +
                'gồm nhưng không giới hạn ở các quy tắc ứng xử, quy định về đỗ xe, giới hạn thời gian đỗ ' +
                'xe, v.v. Khách Hàng và/hoặc Người Sử Dụng hoàn toàn chịu trách nhiệm về bất kỳ thiệt ' +
                'hại, phí, tiền phạt hoặc tổn thất nào do Khách Hàng và/hoặc Người Sử Dụng không tuân ' +
                'thủ bất kỳ quy định nào của Bên Cung Cấp Dịch Vụ.',
            },
            {
              num: '1.2.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng đảm bảo đã có quyền sở hữu hoặc được sự ủy quyền từ ' +
                'chủ sở hữu và/hoặc người có quyền hợp pháp đối với Pin XMĐ được đưa vào hoán đổi trong ' +
                'Trạm Đổi Pin.',
            },
            {
              num: '1.3.',
              text:
                'Trong trường hợp khẩn cấp hoặc bất kỳ tình huống nào đe dọa gây thiệt hại đến tài sản, ' +
                'gây thương tích, đe dọa tính mạng con người, Khách Hàng và/hoặc Người Sử Dụng cần gọi ' +
                `ngay đến Hotline: ${phone} hoặc số điện thoại khẩn cấp của cơ quan nhà nước có thẩm ` +
                'quyền (113, 114, 115) và làm theo hướng dẫn được đưa ra.',
            },
          ],
        },
        { kind: 'h3', text: '2. Phí Dịch Vụ Đổi Pin và thanh toán' },
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              text:
                'Chi phí cho một lần sử dụng Dịch Vụ Đổi Pin sẽ tùy thuộc vào mức phí hiển thị trên giao ' +
                'diện Ứng Dụng và theo đơn giá do AVES công bố tại từng thời điểm tại Nền tảng AVES.',
            },
            {
              num: '2.2.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng sẽ tự chịu mọi chi phí và rủi ro phát sinh trong quá ' +
                'trình sử dụng Dịch Vụ Đổi Pin (bao gồm nhưng không giới hạn chi phí di chuyển XMĐ AVES ' +
                'tới địa điểm đặt Trạm Đổi Pin, phí đỗ xe, phí cầu đường, thương tích cá nhân và/hoặc ' +
                'thiệt hại tài sản do Khách Hàng và/hoặc Người Sử Dụng ra vào địa điểm Trạm Đổi Pin và ' +
                'sử dụng Dịch Vụ Đổi Pin mà không phải do lỗi cố ý của Bên Cung Cấp Dịch Vụ, v.v.).',
            },
          ],
        },
        { kind: 'h3', text: '3. Miễn trừ trách nhiệm' },
        {
          kind: 'p',
          text:
            'Bên Cung Cấp Dịch Vụ có thể đơn phương từ chối hoặc hủy yêu cầu sử dụng Dịch Vụ Đổi Pin ' +
            'của Khách Hàng và/hoặc Người Sử Dụng và sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại ' +
            'nào đối với Khách Hàng và/hoặc Người Sử Dụng do những nguyên nhân sau:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'XMĐ AVES của Khách Hàng và/hoặc Người Sử Dụng đã gặp tai nạn hoặc tham gia thử nghiệm ' +
                'xe vượt quá phạm vi sử dụng thông thường;',
            },
            {
              num: '3.2.',
              text:
                'Có vật lạ hoặc dấu hiệu lạ trên bề mặt Pin XMĐ được lắp đặt trong XMĐ AVES của Khách ' +
                'Hàng và/hoặc Người Sử Dụng;',
            },
            {
              num: '3.3.',
              text:
                'XMĐ AVES và/hoặc Pin XMĐ được lắp đặt trong XMĐ AVES của Khách Hàng và/hoặc Người Sử ' +
                'Dụng không Đạt Tiêu Chuẩn (bao gồm nhưng không giới hạn ở xe/Pin XMĐ bị hư hỏng, pin ' +
                'không rõ nguồn gốc, không được bảo trì theo quy định và/hoặc được lắp đặt, sửa chữa ' +
                'thông qua các kênh không được Bên Cung Cấp Dịch Vụ hoặc AVES phê duyệt);',
            },
            {
              num: '3.4.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng chưa khắc phục các vi phạm nghĩa vụ thanh toán cho ' +
                'AVES theo quy định;',
            },
            {
              num: '3.5.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng vi phạm/không thực hiện đúng các nghĩa vụ khác theo ' +
                'quy định ĐKGD Chung và pháp luật hiện hành;',
            },
            { num: '3.6.', text: 'Xảy ra Sự Kiện Bất Khả Kháng;' },
            {
              num: '3.7.',
              text:
                'Trong trường hợp vì lý do kỹ thuật, AVES hiện không thể cung cấp Dịch Vụ Đổi Pin; hoặc',
            },
            {
              num: '3.8.',
              text: 'Các trường hợp khác được quy định trong văn bản pháp luật, chính sách của nhà nước.',
            },
          ],
        },
        { kind: 'h3', text: '4. Bồi thường thiệt hại' },
        {
          kind: 'p',
          text:
            'Ngoài các trường hợp bồi thường theo quy định tại ĐKGD Chung và các Chính Sách AVES, trong ' +
            'trường hợp Pin XMĐ bị hư hỏng, mất, thất lạc hoặc không Đạt Tiêu Chuẩn do lỗi của Khách ' +
            'Hàng và/hoặc Người Sử Dụng hoặc do Khách Hàng và/hoặc Người Sử Dụng không thực hiện đúng ' +
            'Hướng Dẫn Sử Dụng Và Bảo Quản Pin, thì:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'Khách Hàng và/hoặc Người Sử Dụng có nghĩa vụ bồi thường cho Bên Cung Cấp Dịch Vụ ' +
                'và/hoặc bên thứ ba các tổn thất và thiệt hại liên quan, bao gồm nhưng không giới hạn các ' +
                'chi phí sửa chữa, khắc phục và thay thế Pin XMĐ, Trạm Đổi Pin, thiệt hại gây ra bởi các ' +
                'khiếu nại/khiếu kiện liên quan đến Pin XMĐ, Trạm Đổi Pin (bao gồm cả phí luật sư hợp ' +
                'lý), các chi phí hợp lý mà Bên Cung Cấp Dịch Vụ phải chịu để tránh hoặc giảm thiểu tổn ' +
                'thất; và',
            },
            {
              num: '4.2.',
              text:
                'Bên Cung Cấp Dịch Vụ có quyền đơn phương từ chối hoặc hủy bỏ yêu cầu sử dụng Dịch Vụ ' +
                'Đổi Pin của Khách Hàng và/hoặc Người Sử Dụng trong quá trình giải quyết bồi thường, ' +
                'khiếu nại/khiếu kiện.',
            },
          ],
        },
      ],
    },
  ],
};
