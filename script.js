// ========================
// GAME DATA — 6 VỤ ÁN × 5 CÂU HỎI
// Mỗi vụ án có 5 câu hỏi theo cấu trúc:
//   Q1: Bệnh tiêu cực nào? (Phần 2)
//   Q2: Nguyên nhân mắc bệnh? (Phần 3)
//   Q3: Án phạt phù hợp? (Phần 4 — BP2, BP3)
//   Q4: Biện pháp khắc phục? (Phần 4 — tổng hợp)
//   Q5: Kiểm soát lại như thế nào? (Phần 1)
// ========================

const QUESTION_LABELS = [
    "🔍 Xác định bệnh tiêu cực",
    "🧠 Nguyên nhân mắc bệnh",
    "⚖️ Tuyên án phạt",
    "🛡️ Biện pháp khắc phục",
    "🔒 Kiểm soát lại"
];

const CASES = [
    {
        id: 1,
        title: "Vụ án Giám đốc Sở tham ô",
        defendant: { name: "Nguyễn Văn A", role: "Giám đốc Sở Tài nguyên - Môi trường tỉnh H", avatar: "🧑‍💼" },
        description: `Ông Nguyễn Văn A, Giám đốc Sở Tài nguyên - Môi trường tỉnh H, trong suốt 5 năm giữ chức đã lợi dụng quyền hạn để thu lợi bất chính hơn 8 tỉ đồng. Ông ta nhận hối lộ từ các doanh nghiệp khai thác khoáng sản, cấp giấy phép trái quy định, đồng thời sử dụng xe công, tài sản công cho mục đích cá nhân. Tiền tham ô được chuyển vào tài khoản người thân để che giấu.`,
        questions: [
            {
                text: "Hành vi lấy của công dùng vào việc tư, nhận hối lộ và lợi dụng chức quyền thu lợi bất chính của ông A thuộc loại bệnh tiêu cực nào?",
                options: [
                    "Quan liêu — xa rời thực tế, chỉ xem báo cáo trên giấy",
                    "Tham ô — lấy của công dùng vào việc tư, quên cả thanh liêm, đạo đức",
                    "Lãng phí — lãng phí sức lao động, thời gian và tiền của",
                    "Cậy thế — ỷ vào vị trí để coi thường kỷ luật"
                ],
                correct: 1,
                explanation: `Đây là hành vi **THAM Ô** — thuộc nhóm "Giặc nội xâm". Hồ Chí Minh định nghĩa tham ô là **lấy của công dùng vào việc tư, quên cả thanh liêm, đạo đức**. Ông A nhận hối lộ, cấp phép trái quy định, sử dụng tài sản công cho cá nhân — tất cả đều là biểu hiện điển hình.`
            },
            {
                text: "Theo Hồ Chí Minh, nguyên nhân gốc rễ (chủ quan) khiến ông A sa vào tham ô là gì?",
                options: [
                    "Do công tác cán bộ của Đảng và Nhà nước chưa tốt",
                    "Do tàn dư của chế độ thực dân, phong kiến",
                    "Do chủ nghĩa cá nhân — căn \"bệnh mẹ\", thiếu tu dưỡng rèn luyện bản thân",
                    "Do trình độ phát triển xã hội còn thấp"
                ],
                correct: 2,
                explanation: `Hồ Chí Minh chỉ rõ nguyên nhân chủ quan bắt nguồn từ căn **"bệnh mẹ" là CHỦ NGHĨA CÁ NHÂN**, từ sự **thiếu tu dưỡng, rèn luyện** của bản thân cán bộ. Từ "bệnh mẹ" này sinh ra tất cả "bệnh con": tham ô, lãng phí, quan liêu... Ông A đã đặt lợi ích cá nhân lên trên lợi ích nhân dân.`
            },
            {
                text: "Với hành vi tham ô 8 tỉ đồng, theo tư tưởng Hồ Chí Minh, án phạt phù hợp cho ông A là gì?",
                options: [
                    "Phê bình nhẹ nhàng, cho cơ hội sửa sai vì có nhiều đóng góp",
                    "Chuyển sang vị trí khác, giảm quyền hạn",
                    "Xử phạt nghiêm minh theo pháp luật — \"thẳng tay trừng trị\", không có vùng cấm",
                    "Chỉ yêu cầu hoàn trả tài sản là đủ, không cần truy tố"
                ],
                correct: 2,
                explanation: `Hồ Chí Minh khẳng định: **"Trăm điều phải có thần linh pháp quyền"** — tuyệt nhiên **KHÔNG CÓ VÙNG CẤM**. Phải **"thẳng tay trừng trị"** kẻ thoái hóa, biến chất, **dù ở địa vị nào**. Người đã từng ký **sắc lệnh tử hình** đối với tội tham ô ở mức cao nhất để làm gương. Kết hợp "Chống" (xử phạt) và "Xây" (giáo dục).`
            },
            {
                text: "Ngoài việc xử phạt, biện pháp khắc phục nào cần được áp dụng để ngăn tái phạm?",
                options: [
                    "Chỉ cần tăng lương cho cán bộ là đủ",
                    "Kết hợp \"Xây\" và \"Chống\": xử phạt nghiêm minh + giáo dục đạo đức cách mạng, khơi dậy lương tâm",
                    "Chỉ cần giáo dục, không cần xử phạt",
                    "Cho nghỉ hưu sớm, không cần biện pháp thêm"
                ],
                correct: 1,
                explanation: `Biện pháp 3 theo Hồ Chí Minh: **Kết hợp "Xây" và "Chống"**. "Chống" = xử phạt nghiêm minh, đúng người đúng tội. "Xây" = coi trọng giáo dục đạo đức cách mạng, khơi dậy lương tâm. **Phương châm: làm cho cái tốt được phát huy, cái xấu mất dần đi.** Cán bộ phải giữ cái "tâm" trong sạch, tránh "dĩ công vi tư".`
            },
            {
                text: "Để ngăn chặn tình trạng tham ô trong Sở TN-MT, cần kiểm soát lại như thế nào?",
                options: [
                    "Chỉ cần kiểm soát bên trong (giữa các cơ quan) là đủ",
                    "Chỉ cần kiểm soát từ trên xuống là đủ",
                    "Kết hợp kiểm soát bên trong (Nhà nước) VÀ bên ngoài (nhân dân), cả từ trên xuống và từ dưới lên",
                    "Không cần kiểm soát thêm, pháp luật đã đủ răn đe"
                ],
                correct: 2,
                explanation: `Hồ Chí Minh nêu rõ cần kết hợp: **Kiểm soát bên trong** (phân công, phân nhiệm, bỏ phiếu tín nhiệm) VÀ **Kiểm soát bên ngoài** (của nhân dân). Đồng thời áp dụng **hai cách**: từ trên xuống VÀ từ dưới lên. Người nhấn mạnh: "Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì cũng phải có **quần chúng giúp** mới được".`
            }
        ]
    },
    {
        id: 2,
        title: "Vụ án Chủ tịch huyện quan liêu",
        defendant: { name: "Trần Thị B", role: "Chủ tịch UBND huyện M, tỉnh N", avatar: "👩‍💼" },
        description: `Bà Trần Thị B giữ chức Chủ tịch UBND huyện M suốt 8 năm. Bà chỉ ngồi trong phòng đọc báo cáo, ký giấy tờ mà không bao giờ xuống cơ sở kiểm tra thực tế. Nhiều công trình xây dựng bị rút ruột, chất lượng kém nhưng bà không hay biết. Khi người dân phản ánh, bà phớt lờ và nói "đã có cấp dưới lo". Hậu quả: 3 công trình trường học sập sau 2 năm sử dụng, nhiều dự án đội vốn hàng chục tỉ đồng.`,
        questions: [
            {
                text: "Bà B chỉ xem báo cáo trên giấy, không kiểm tra thực tế, xa rời quần chúng, dẫn đến cấp dưới rút ruột công trình. Bà mắc bệnh tiêu cực nào?",
                options: [
                    "Tham ô — lấy của công dùng vào việc tư",
                    "Đặc quyền, đặc lợi — hách dịch với dân",
                    "Quan liêu — \"bệnh gốc\" sinh ra tham ô, lãng phí",
                    "Tư túng — kéo bè kéo cánh"
                ],
                correct: 2,
                explanation: `Đây là **QUAN LIÊU** — "bệnh gốc" sinh ra tham ô, lãng phí. Hồ Chí Minh mô tả: chỉ biết khai hội, viết chỉ thị, xem báo cáo trên giấy mà **không kiểm tra thực tế**, xa rời quần chúng — **"có mắt mà không thấy suốt, có tai mà không nghe thấu"**. Bệnh quan liêu đã **ấp ủ, dung túng, che chở** cho nạn tham ô (rút ruột công trình).`
            },
            {
                text: "Ngoài nguyên nhân chủ quan (chủ nghĩa cá nhân), nguyên nhân khách quan nào trực tiếp tạo điều kiện cho bà B quan liêu?",
                options: [
                    "Do âm mưu chống phá của lực lượng phản động",
                    "Do cách tổ chức, vận hành và sự phối hợp chưa khoa học, hiệu quả",
                    "Do trình độ phát triển xã hội thấp",
                    "Do tàn dư chế độ thực dân, phong kiến"
                ],
                correct: 1,
                explanation: `Nguyên nhân khách quan trực tiếp là **cách tổ chức, vận hành trong Đảng, Nhà nước và sự phối hợp chưa thật sự khoa học, hiệu quả**. Khi bộ máy thiếu cơ chế giám sát chặt chẽ, thiếu quy trình báo cáo minh bạch, người đứng đầu dễ rơi vào quan liêu mà không bị phát hiện kịp thời.`
            },
            {
                text: "Bà B để xảy ra hậu quả nghiêm trọng (3 trường học sập). Theo nguyên tắc Hồ Chí Minh, bà phải chịu án phạt như thế nào?",
                options: [
                    "Miễn trách nhiệm vì bà không trực tiếp rút ruột công trình",
                    "Nghiêm minh xử lý — dù ở địa vị nào cũng phải bị xử lý, không có vùng cấm",
                    "Chỉ khiển trách nhẹ vì bà là phụ nữ",
                    "Cho thôi chức là đủ, không cần kỷ luật thêm"
                ],
                correct: 1,
                explanation: `**"Thẳng tay trừng trị"** — dù ở **địa vị nào, làm nghề nghiệp gì** cũng phải bị xử lý. Bà B với cương vị Chủ tịch huyện phải chịu trách nhiệm về mọi hậu quả xảy ra trên địa bàn. **"Chức vụ càng cao, trách nhiệm nêu gương càng lớn"** — bà không nêu gương mà còn để xảy ra sai phạm nghiêm trọng.`
            },
            {
                text: "Muốn trừ sạch nạn rút ruột công trình (tham ô, lãng phí) ở huyện M, trước hết phải làm gì?",
                options: [
                    "Đầu tư thêm ngân sách cho huyện",
                    "Mời chuyên gia nước ngoài giám sát",
                    "Tẩy sạch bệnh quan liêu trước — vì quan liêu là bệnh gốc",
                    "Tăng lương cho cán bộ huyện"
                ],
                correct: 2,
                explanation: `Hồ Chí Minh nhấn mạnh: **"Muốn trừ sạch tham ô, lãng phí thì TRƯỚC HẾT phải TẨY SẠCH BỆNH QUAN LIÊU"**. Quan liêu là **"bệnh gốc"** — nếu lãnh đạo xa rời thực tế, không giám sát sát sao thì tham ô, lãng phí sẽ được ấp ủ, dung túng, che chở. Chữa bệnh phải chữa từ gốc.`
            },
            {
                text: "Để lãnh đạo huyện không rơi vào bệnh quan liêu, cần tăng cường hình thức kiểm soát nào?",
                options: [
                    "Kiểm soát bên ngoài (của nhân dân) — dựa hẳn vào quần chúng để đôn đốc, kiểm tra",
                    "Không cần kiểm soát, chỉ cần chọn người tốt vào vị trí",
                    "Chỉ cần kiểm soát từ trên xuống là đủ",
                    "Bỏ phiếu tín nhiệm 10 năm một lần"
                ],
                correct: 0,
                explanation: `Cần tăng cường **Kiểm soát bên ngoài (của nhân dân)**. Hồ Chí Minh nhấn mạnh: Đảng và Nhà nước phải **"dựa hẳn vào quần chúng"** để đôn đốc và kiểm tra công việc. Nhân dân là **chủ thể tối cao** của quyền lực, có quyền kiểm soát. Nếu quần chúng được tổ chức giám sát tốt, bà B không thể "ngồi phòng đọc báo cáo" suốt 8 năm mà không ai phát hiện.`
            }
        ]
    },
    {
        id: 3,
        title: "Vụ án Phó Giám đốc lãng phí",
        defendant: { name: "Lê Văn C", role: "Phó Giám đốc Sở Xây dựng tỉnh P", avatar: "🧑‍💼" },
        description: `Ông Lê Văn C, Phó Giám đốc Sở Xây dựng, liên tục tổ chức các buổi hội nghị, hội thảo xa hoa với kinh phí hàng trăm triệu đồng từ ngân sách nhà nước. Mỗi chuyến công tác, ông đều ở khách sạn 5 sao, đặt vé máy bay hạng thương gia, tổ chức tiệc chiêu đãi hoành tráng. Ông coi những quyền lợi xa hoa này là "hiển nhiên" với chức vụ của mình. Trong khi đó, nhiều dự án nhà ở cho người nghèo bị đình trệ vì thiếu kinh phí. Ngân sách sở chi sai mục đích lên đến 15 tỉ đồng.`,
        questions: [
            {
                text: "Hành vi chi tiêu xa hoa, sử dụng ngân sách sai mục đích, coi đặc quyền là \"hiển nhiên\" của ông C thuộc bệnh tiêu cực nào?",
                options: [
                    "Tham ô — lấy của công dùng vào việc tư",
                    "Quan liêu — xa rời quần chúng",
                    "Lãng phí + Đặc quyền, đặc lợi — lãng phí mồ hôi nước mắt của dân, hưởng đặc lợi bất chính",
                    "Tư túng — kéo bè kéo cánh"
                ],
                correct: 2,
                explanation: `Ông C mắc đồng thời:\n• **LÃNG PHÍ** — lãng phí sức lao động, thời gian và tiền của. Người lên án gay gắt vì đó là **mồ hôi nước mắt của dân**.\n• **ĐẶC QUYỀN, ĐẶC LỢI** — tư tưởng "cửa quyền", tự cho mình quyền hưởng thụ xa hoa từ chức vụ. Đây là biểu hiện của **chủ nghĩa cá nhân**.`
            },
            {
                text: "Ông C coi việc hưởng thụ xa hoa là \"hiển nhiên\" với chức vụ. Tư tưởng này có nguồn gốc khách quan từ đâu?",
                options: [
                    "Do công tác cán bộ chưa tốt",
                    "Do âm mưu lực lượng phản động",
                    "Do tàn dư chế độ thực dân, phong kiến — tư tưởng \"làm quan để hưởng lộc\"",
                    "Do trình độ phát triển xã hội thấp"
                ],
                correct: 2,
                explanation: `Tư tưởng "làm quan để hưởng lộc", "một người làm quan cả họ được nhờ" là **tàn dư của chính sách phản động của chế độ thực dân, phong kiến**. Tư tưởng này còn ăn sâu trong tiềm thức xã hội, khiến cán bộ coi chức vụ như phương tiện hưởng thụ thay vì công cụ phục vụ nhân dân. Đây là nguyên nhân khách quan thứ 4 theo Hồ Chí Minh.`
            },
            {
                text: "Về án phạt, nguyên tắc nào của Hồ Chí Minh cần được áp dụng cho ông C?",
                options: [
                    "Xem xét giảm nhẹ vì ông C không trực tiếp ăn cắp tiền",
                    "Cho thôi chức, không cần xử lý hình sự",
                    "\"Trăm điều phải có thần linh pháp quyền\" — xử phạt nghiêm minh, đúng người đúng tội, không có vùng cấm",
                    "Chỉ cần phê bình nội bộ"
                ],
                correct: 2,
                explanation: `**"Trăm điều phải có thần linh pháp quyền"** — KHÔNG CÓ VÙNG CẤM. Pháp luật phải **nghiêm minh**, công tác kiểm tra phải **thường xuyên**. Dù ông C "chỉ" lãng phí chứ không trực tiếp ăn cắp, nhưng lãng phí vẫn là "giặc nội xâm" vì đó là mồ hôi nước mắt của dân. Cần xử phạt **đúng người đúng tội**.`
            },
            {
                text: "Biện pháp khắc phục CĂN BẢN và có ý nghĩa LÂU DÀI nhất để ngăn chặn lãng phí trong bộ máy nhà nước là gì?",
                options: [
                    "Siết chặt kỷ luật Đảng và pháp luật",
                    "Cán bộ phải nêu gương",
                    "Phát huy dân chủ trong xã hội — nâng cao dân trí, thực hành dân chủ rộng rãi",
                    "Kết hợp \"Xây\" và \"Chống\""
                ],
                correct: 2,
                explanation: `**Biện pháp 1: Phát huy dân chủ trong xã hội** — đây là giải pháp **CĂN BẢN và có ý nghĩa LÂU DÀI** nhất. Nâng cao trình độ **dân trí về dân chủ**, thực hành dân chủ rộng rãi để nhân dân thực hiện **quyền làm chủ** — từ đó giám sát chi tiêu ngân sách, phát hiện lãng phí.`
            },
            {
                text: "HCM nêu 2 điều kiện để kiểm soát quyền lực hiệu quả. Đó là gì?",
                options: [
                    "Kiểm soát phải có hệ thống + Người kiểm soát phải rất có uy tín",
                    "Kiểm soát phải bất ngờ + Người kiểm soát phải là cấp trên",
                    "Kiểm soát phải theo mùa + Người kiểm soát phải là thanh tra",
                    "Kiểm soát phải có giấy phép + Người kiểm soát phải qua đào tạo"
                ],
                correct: 0,
                explanation: `Hồ Chí Minh nêu **2 điều kiện**: ① **Kiểm soát phải có hệ thống** — tổ chức bài bản, có quy trình rõ ràng, không tùy tiện. ② **Người đi kiểm soát phải là những người RẤT CÓ UY TÍN** — có đạo đức, năng lực, được nhân dân tin tưởng. Đồng thời có **2 cách**: từ trên xuống và từ dưới lên. Phải **"khéo kiểm soát"**.`
            }
        ]
    },
    {
        id: 4,
        title: "Vụ án Bí thư huyện tư túng",
        defendant: { name: "Phạm Văn D", role: "Bí thư Huyện ủy huyện K", avatar: "🧑‍💼" },
        description: `Ông Phạm Văn D trúng cử Bí thư Huyện ủy huyện K. Ngay sau khi nhậm chức, ông bổ nhiệm em trai vào vị trí Trưởng phòng Tài chính, cháu ruột làm Phó phòng Nội vụ, bạn thân thời đại học giữ chức Giám đốc Ban QLDA — mặc dù cả ba đều không đủ tiêu chuẩn chuyên môn. Nhiều cán bộ có năng lực bị gạt ra ngoài. Khi bị chất vấn, ông kiêu ngạo tuyên bố: "Tôi là Bí thư, tôi có quyền quyết định nhân sự". Nội bộ huyện K mất đoàn kết nghiêm trọng.`,
        questions: [
            {
                text: "Ông D kéo bè kéo cánh, bổ nhiệm người thân không đủ tài năng, kiêu ngạo coi thường tập thể. Ông mắc những bệnh tiêu cực nào?",
                options: [
                    "Tham ô + Lãng phí",
                    "Quan liêu + Đặc quyền đặc lợi",
                    "Tư túng, chia rẽ + Kiêu ngạo + Cậy thế",
                    "Chỉ mắc bệnh Kiêu ngạo"
                ],
                correct: 2,
                explanation: `Ông D mắc đồng thời 3 bệnh:\n• **TƯ TÚNG, CHIA RẼ** — kéo bè kéo cánh, đưa người thân cận **không có tài năng** vào chức vụ, gây **mất đoàn kết nội bộ**.\n• **KIÊU NGẠO** — tự cao tự đại, không lắng nghe ý kiến người khác.\n• **CẬY THẾ** — ỷ vào vị trí Bí thư để coi thường kỷ luật, coi thường người khác.\nTất cả đều bắt nguồn từ **chủ nghĩa cá nhân**.`
            },
            {
                text: "Nguyên nhân khách quan nào trực tiếp để ông D có thể tự ý bổ nhiệm người thân?",
                options: [
                    "Do trình độ phát triển xã hội thấp",
                    "Do công tác cán bộ của Đảng và Nhà nước chưa tốt — quy trình bổ nhiệm thiếu minh bạch",
                    "Do âm mưu lực lượng phản động",
                    "Do tàn dư chế độ thực dân"
                ],
                correct: 1,
                explanation: `**Công tác cán bộ của Đảng và Nhà nước chưa tốt** — khi quy trình bổ nhiệm thiếu minh bạch, thiếu cơ chế giám sát chặt chẽ, thiếu tiêu chuẩn rõ ràng thì người có quyền dễ dàng "lách luật" để bổ nhiệm người thân. Đây là nguyên nhân khách quan thứ 1 theo Hồ Chí Minh.`
            },
            {
                text: "Quy định nào của Bộ Chính trị trực tiếp quy định về kiểm soát quyền lực trong công tác cán bộ?",
                options: [
                    "QĐ 131-QĐ/TW ngày 27/10/2023 — về kiểm tra, giám sát, kỷ luật đảng",
                    "QĐ 132-QĐ/TW ngày 27/10/2023 — về điều tra, truy tố, xét xử",
                    "QĐ 114-QĐ/TW ngày 11/7/2023 — về kiểm soát quyền lực trong công tác cán bộ",
                    "QĐ 144-QĐ/TW ngày 09/5/2024 — về chuẩn mực đạo đức cách mạng"
                ],
                correct: 2,
                explanation: `**Quy định số 114-QĐ/TW ngày 11/7/2023** của Bộ Chính trị — về kiểm soát quyền lực và phòng, chống tham nhũng, tiêu cực **trong công tác cán bộ**. Quy định này trực tiếp ngăn chặn hành vi tư túng, bổ nhiệm "cánh hẩu" như trường hợp ông D.`
            },
            {
                text: "Theo Hồ Chí Minh, ông D với cương vị Bí thư cần thực hiện biện pháp nào trước tiên?",
                options: [
                    "Huy động sức mạnh chủ nghĩa yêu nước",
                    "Phát huy dân chủ trong xã hội",
                    "Cán bộ phải nêu gương — chức vụ càng cao, trách nhiệm nêu gương càng lớn",
                    "Siết chặt kỷ luật Đảng"
                ],
                correct: 2,
                explanation: `**Biện pháp 4: Cán bộ phải nêu gương**. Hồ Chí Minh nhấn mạnh: **"Chức vụ càng cao, trách nhiệm nêu gương càng lớn"**. Sự gương mẫu của người lãnh đạo là **mệnh lệnh không lời** có sức thuyết phục nhất. Ông D là Bí thư huyện — chức vụ rất cao — lẽ ra phải là tấm gương sáng, nhưng lại làm ngược lại.`
            },
            {
                text: "Theo Hiến pháp 1946, cơ chế kiểm soát bên trong nào có thể áp dụng khi cán bộ mất uy tín?",
                options: [
                    "Mời thanh tra quốc tế vào kiểm tra",
                    "Chế độ bỏ phiếu tín nhiệm — \"ai không được tín nhiệm thì phải từ chức\"",
                    "Chuyển sang tỉnh khác công tác",
                    "Tổ chức biểu tình phản đối"
                ],
                correct: 1,
                explanation: `Theo Hiến pháp 1946, Nghị viện nhân dân có quyền **"Kiểm soát và phê bình Chính phủ"** và áp dụng chế độ **bỏ phiếu tín nhiệm**: **"Bộ trưởng nào không được Nghị viện tín nhiệm thì phải từ chức"**. Đây là cơ chế kiểm soát **bên trong (của Nhà nước)** — đảm bảo chỉ người được tin tưởng mới giữ chức vụ quan trọng.`
            }
        ]
    },
    {
        id: 5,
        title: "Vụ án Chánh Thanh tra cậy thế",
        defendant: { name: "Hoàng Văn E", role: "Chánh Thanh tra tỉnh Q", avatar: "🧑‍💼" },
        description: `Ông Hoàng Văn E, Chánh Thanh tra tỉnh Q, thường xuyên dùng chức vụ gây áp lực lên doanh nghiệp bị thanh tra. Ông đòi "lót tay" trước khi ký kết luận thanh tra. Khi người dân đến khiếu nại, ông hạch dịch, quát nạt và đuổi dân ra khỏi phòng. Ông tự cho mình quyền "ban phát" thuận lợi hoặc khó khăn cho bất kỳ ai. Nhiều doanh nghiệp nhỏ phá sản vì bị "hành" thủ tục. Một cán bộ cấp dưới biết sai phạm nhưng không dám tố cáo vì sợ bị trả thù.`,
        questions: [
            {
                text: "Ông E hách dịch với dân, vòi vĩnh \"lót tay\", ỷ vào chức vụ coi thường kỷ luật. Ông mắc bệnh tiêu cực nào?",
                options: [
                    "Quan liêu + Lãng phí",
                    "Cậy thế + Đặc quyền, đặc lợi — ỷ quyền coi thường kỷ luật, hách dịch vơ vét",
                    "Tư túng + Chia rẽ",
                    "Chỉ mắc bệnh Kiêu ngạo"
                ],
                correct: 1,
                explanation: `Ông E mắc:\n• **CẬY THẾ** — ỷ vào vị trí trong cơ quan Chính phủ để **coi thường kỷ luật, coi thường người khác**.\n• **ĐẶC QUYỀN, ĐẶC LỢI** — tư tưởng "cửa quyền", **hách dịch với dân**, lạm dụng chức quyền để **vơ vét tiền của** (đòi lót tay). Cả hai đều là biểu hiện của **chủ nghĩa cá nhân**.`
            },
            {
                text: "Các nguyên nhân tiêu cực theo HCM có đặc điểm gì?",
                options: [
                    "Mỗi nguyên nhân tồn tại biệt lập, không liên quan nhau",
                    "Chỉ có nguyên nhân chủ quan, không có nguyên nhân khách quan",
                    "Các nguyên nhân KHÔNG tồn tại biệt lập mà có sự KẾT HỢP với nhau",
                    "Chỉ có nguyên nhân khách quan, không liên quan đến cán bộ"
                ],
                correct: 2,
                explanation: `Hồ Chí Minh chỉ rõ: các nguyên nhân **KHÔNG tồn tại biệt lập** mà có **sự kết hợp với nhau**. Nguyên nhân chủ quan (chủ nghĩa cá nhân) và 5 nguyên nhân khách quan tác động qua lại, tạo điều kiện cho nhau. Trường hợp ông E: bản thân thiếu tu dưỡng (chủ quan) + cơ chế tổ chức lỏng lẻo (khách quan) = cậy thế hành dân.`
            },
            {
                text: "Ông E hành vi nghiêm trọng (đòi hối lộ, hạch dịch dân). Hồ Chí Minh từng ký văn bản nào thể hiện quyết tâm trừng trị tham nhũng?",
                options: [
                    "Sắc lệnh miễn thuế cho cán bộ",
                    "Sắc lệnh tử hình đối với tội tham ô, trộm cắp ở mức cao nhất",
                    "Sắc lệnh giảm nhẹ hình phạt cho cán bộ cấp cao",
                    "Sắc lệnh chuyển cán bộ sai phạm ra nước ngoài"
                ],
                correct: 1,
                explanation: `Hồ Chí Minh đã từng **ký sắc lệnh tử hình** đối với tội tham ô, trộm cắp **ở mức cao nhất** để **làm gương**. Điều này thể hiện nguyên tắc: xử phạt cần **nghiêm minh, đúng người đúng tội**. Kết hợp "Chống" (trừng phạt nghiêm) và "Xây" (giáo dục đạo đức) — làm cho cái tốt phát huy, cái xấu mất dần.`
            },
            {
                text: "Cán bộ cấp dưới biết sai phạm nhưng không dám tố cáo vì sợ trả thù. Điều này phản ánh thiếu sót biện pháp nào?",
                options: [
                    "Thiếu phát huy dân chủ + thiếu chính sách bảo vệ cán bộ hiệu quả",
                    "Thiếu tăng lương cho cán bộ cấp dưới",
                    "Thiếu huy động sức mạnh yêu nước",
                    "Thiếu cán bộ cấp trên nêu gương"
                ],
                correct: 0,
                explanation: `Phản ánh thiếu **Biện pháp 1: Phát huy dân chủ** — tạo cơ chế để cấp dưới và nhân dân dám lên tiếng. Đồng thời theo Hồ Chí Minh: nếu không có biện pháp phòng, chống và **chính sách bảo vệ cán bộ hiệu quả** thì **nguy cơ mất cán bộ là rất lớn**. Cần tạo môi trường an toàn để người tố cáo được bảo vệ.`
            },
            {
                text: "Hồ Chí Minh nhấn mạnh phải \"khéo kiểm soát\". Điều này có nghĩa là gì?",
                options: [
                    "Kiểm soát phải bí mật, không cho ai biết",
                    "Kiểm soát phải đúng cách, đúng phương pháp, vừa nghiêm khắc vừa linh hoạt",
                    "Kiểm soát phải nhẹ nhàng, tránh gây mất lòng",
                    "Kiểm soát phải hình thức cho đẹp báo cáo"
                ],
                correct: 1,
                explanation: `**"Khéo kiểm soát"** nghĩa là kiểm soát phải **đúng cách, đúng phương pháp**, vừa **nghiêm khắc** vừa **linh hoạt**, không máy móc cứng nhắc. Kết hợp 2 điều kiện (có hệ thống + người có uy tín) và 2 cách (từ trên xuống + từ dưới lên) một cách thông minh, hiệu quả.`
            }
        ]
    },
    {
        id: 6,
        title: "Vụ án Chánh án bẻ cong công lý",
        defendant: { name: "Vũ Văn F", role: "Chánh án Tòa án nhân dân tỉnh T", avatar: "🧑‍⚖️" },
        description: `Ông Vũ Văn F, Chánh án TAND tỉnh T, bị phát hiện đã nhận hối lộ 5 tỉ đồng để giảm nhẹ hình phạt cho một bị cáo trong vụ án tham nhũng lớn. Ông lợi dụng quyền hạn trong hoạt động xét xử để bẻ cong công lý — bị cáo vốn đáng 20 năm tù chỉ nhận 5 năm tù treo. Khi bị chất vấn, ông nói "Đây là quyền xét xử độc lập của tòa". Vụ việc gây mất niềm tin của nhân dân vào hệ thống tư pháp. Năm 2024, đã có 130 người đứng đầu và cấp phó bị kỷ luật.`,
        questions: [
            {
                text: "Ông F nhận hối lộ 5 tỉ, bẻ cong công lý trong xét xử. Đây là biểu hiện của bệnh tiêu cực nào?",
                options: [
                    "Quan liêu — không kiểm tra thực tế",
                    "Lãng phí — lãng phí tiền của",
                    "Tham ô + Đặc quyền, đặc lợi — lấy của công, lạm dụng quyền xét xử để vơ vét",
                    "Tư túng — kéo bè kéo cánh"
                ],
                correct: 2,
                explanation: `Ông F mắc:\n• **THAM Ô** — nhận hối lộ 5 tỉ, lấy tiền bất chính, quên cả thanh liêm, đạo đức.\n• **ĐẶC QUYỀN, ĐẶC LỢI** — lạm dụng chức quyền xét xử (quyền tư pháp) để vơ vét tiền cho cá nhân. Coi quyền xét xử như "tài sản riêng" để mua bán.\nCả hai đều là biểu hiện nghiêm trọng của **chủ nghĩa cá nhân**.`
            },
            {
                text: "Nguyên nhân chủ quan — \"bệnh mẹ\" — sinh ra mọi biểu hiện tiêu cực là gì?",
                options: [
                    "Bệnh quan liêu",
                    "Bệnh hình thức",
                    "Chủ nghĩa cá nhân — gốc rễ của mọi \"bệnh con\"",
                    "Bệnh thành tích"
                ],
                correct: 2,
                explanation: `**CHỦ NGHĨA CÁ NHÂN** — Hồ Chí Minh gọi đây là **"bệnh mẹ"** vì từ căn bệnh này sinh ra tất cả các **"bệnh con"** khác: tham ô, lãng phí, quan liêu, đặc quyền đặc lợi, tư túng, cậy thế, kiêu ngạo... Bắt nguồn từ sự **thiếu tu dưỡng, rèn luyện** của bản thân cán bộ. Muốn chữa bệnh con, phải chữa từ bệnh mẹ.`
            },
            {
                text: "Hành vi lợi dụng quyền xét xử của ông F vi phạm trực tiếp quy định nào?",
                options: [
                    "QĐ 114-QĐ/TW — về công tác cán bộ",
                    "QĐ 131-QĐ/TW — về kiểm tra, giám sát, kỷ luật đảng",
                    "QĐ 132-QĐ/TW ngày 27/10/2023 — về kiểm soát quyền lực trong điều tra, truy tố, XÉT XỬ, thi hành án",
                    "QĐ 144-QĐ/TW — về chuẩn mực đạo đức"
                ],
                correct: 2,
                explanation: `**Quy định số 132-QĐ/TW ngày 27/10/2023** của Bộ Chính trị — về kiểm soát quyền lực, phòng, chống tham nhũng, tiêu cực **trong hoạt động điều tra, truy tố, XÉT XỬ, thi hành án**. Ông F đã vi phạm nghiêm trọng quy định này bằng việc lợi dụng quyền xét xử để bẻ cong công lý.`
            },
            {
                text: "Biện pháp nào biến cuộc chiến chống tiêu cực thành \"cuộc chiến\" của toàn dân?",
                options: [
                    "Phát huy dân chủ trong xã hội",
                    "Siết chặt kỷ luật Đảng",
                    "Cán bộ phải nêu gương",
                    "Huy động sức mạnh chủ nghĩa yêu nước — trách nhiệm của mọi người Việt Nam"
                ],
                correct: 3,
                explanation: `**Biện pháp 5: Huy động sức mạnh chủ nghĩa yêu nước**. Biến cuộc chiến chống tiêu cực thành **"cuộc chiến" của TOÀN DÂN** dựa trên lòng tự hào và tự tôn dân tộc. **Bất kỳ người Việt Nam nào**, dù là dân thường hay cán bộ, đều phải có trách nhiệm tu dưỡng và thực hành đạo đức cách mạng để **bảo vệ danh dự đất nước**.`
            },
            {
                text: "Theo kết quả thực tiễn năm 2024, bao nhiêu người đứng đầu và cấp phó bị kỷ luật, và thu hồi được bao nhiêu tài sản?",
                options: [
                    "50 người, thu hồi 5.000 tỉ",
                    "80 người, thu hồi 10.000 tỉ",
                    "130 người, thu hồi hơn 22.000 tỉ đồng",
                    "200 người, thu hồi 50.000 tỉ"
                ],
                correct: 2,
                explanation: `Năm 2024: kỷ luật **130** người đứng đầu và cấp phó vì để xảy ra tham nhũng, tiêu cực. Thu hồi tài sản **hơn 22.000 tỉ đồng** từ án tham nhũng và kinh tế. Đây là minh chứng cho thấy các biện pháp theo tư tưởng HCM đang phát huy hiệu quả — **"không có vùng cấm, không có ngoại lệ"**.`
            }
        ]
    }
];

// ========================
// GLOBAL STATE
// ========================
let currentCase = 0;
let currentQuestion = 0;
let score = 0;
let totalQuestions = 0;
let firstTryCorrect = 0;
let totalAttempts = 0;
let timerInterval = null;
let timeLeft = 900; // 15 minutes
let caseResults = [];
let gameStarted = false;
let currentAttempts = 0; // attempts for current question

// ========================
// SCREEN MANAGEMENT
// ========================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    window.scrollTo(0, 0);
}

// ========================
// THEORY TABS
// ========================
function showTab(index) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.tab-content').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

// ========================
// PARTICLES
// ========================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
    }
}

// ========================
// GAME LOGIC
// ========================
function startGame() {
    currentCase = 0;
    currentQuestion = 0;
    score = 0;
    firstTryCorrect = 0;
    totalAttempts = 0;
    currentAttempts = 0;
    timeLeft = 900; // 15 minutes
    totalQuestions = CASES.reduce((acc, c) => acc + c.questions.length, 0);
    caseResults = CASES.map(c => ({
        title: c.title,
        questions: c.questions.map(() => ({ correct: false, attempts: 0 }))
    }));
    gameStarted = true;

    showScreen('screen-game');
    startTimer();
    renderCase();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = document.getElementById('timer-display');
    const timerEl = document.getElementById('game-timer');
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timerEl.classList.remove('warning', 'danger');
    if (timeLeft <= 60) {
        timerEl.classList.add('danger');
    } else if (timeLeft <= 180) {
        timerEl.classList.add('warning');
    }
}

function renderCase() {
    const caseData = CASES[currentCase];

    document.getElementById('case-current').textContent = currentCase + 1;
    document.getElementById('case-total').textContent = CASES.length;

    renderQuestionDots();

    const casePanel = document.getElementById('case-panel');
    casePanel.innerHTML = `
        <div class="case-header">
            <span class="case-badge">VỤ ÁN #${caseData.id}</span>
            <span class="case-title">${caseData.title}</span>
        </div>
        <div class="case-description">${caseData.description}</div>
        <div class="case-defendant">
            <span class="defendant-avatar">${caseData.defendant.avatar}</span>
            <div class="defendant-info">
                <strong>Bị cáo: ${caseData.defendant.name}</strong>
                <span>Chức vụ: ${caseData.defendant.role}</span>
            </div>
        </div>
    `;

    renderQuestion();

    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestionDots() {
    const dotsContainer = document.getElementById('question-dots');
    const caseData = CASES[currentCase];
    dotsContainer.innerHTML = '';

    caseData.questions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'q-dot';
        if (i === currentQuestion) dot.classList.add('active');

        const result = caseResults[currentCase].questions[i];
        if (result.correct) dot.classList.add('correct');
        else if (result.attempts > 0 && i < currentQuestion) dot.classList.add('wrong');

        dotsContainer.appendChild(dot);
    });
}

function renderQuestion() {
    const caseData = CASES[currentCase];
    const q = caseData.questions[currentQuestion];
    const letters = ['A', 'B', 'C', 'D'];
    currentAttempts = 0;

    const questionPanel = document.getElementById('question-panel');
    questionPanel.innerHTML = `
        <div class="question-step-label">${QUESTION_LABELS[currentQuestion]}</div>
        <div class="question-label">Phán quyết ${currentQuestion + 1}/5</div>
        <div class="question-text">${q.text}</div>
        <div class="options-grid">
            ${q.options.map((opt, i) => `
                <button class="option-btn" onclick="selectAnswer(${i})" id="option-${i}">
                    <span class="option-letter">${letters[i]}</span>
                    <span>${opt}</span>
                </button>
            `).join('')}
        </div>
        <div class="retry-hint hidden" id="retry-hint">
            💡 Chưa đúng! Hãy thử chọn đáp án khác...
        </div>
    `;

    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.add('hidden');

    renderQuestionDots();

    document.getElementById('score-display').textContent = score;
}

function selectAnswer(index) {
    const caseData = CASES[currentCase];
    const q = caseData.questions[currentQuestion];
    const isCorrect = index === q.correct;
    currentAttempts++;
    totalAttempts++;

    const selectedBtn = document.getElementById(`option-${index}`);

    if (!isCorrect) {
        // WRONG: eliminate this option, let player try again
        selectedBtn.classList.add('wrong', 'disabled');
        selectedBtn.onclick = null;

        // Show retry hint
        const retryHint = document.getElementById('retry-hint');
        if (retryHint) {
            retryHint.classList.remove('hidden');
            retryHint.classList.add('shake-hint');
            setTimeout(() => retryHint.classList.remove('shake-hint'), 500);
        }

        // Track attempts
        caseResults[currentCase].questions[currentQuestion].attempts = currentAttempts;
        return; // Don't proceed — let them try again
    }

    // CORRECT: lock all buttons, show explanation
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.add('disabled');
        btn.onclick = null;
        if (i === q.correct) {
            btn.classList.add('correct');
        }
    });

    // Score based on attempts: 1st try = 10, 2nd = 7, 3rd = 4, 4th = 1
    const pointsMap = [10, 7, 4, 1];
    const points = pointsMap[Math.min(currentAttempts - 1, 3)];
    score += points;

    if (currentAttempts === 1) firstTryCorrect++;

    caseResults[currentCase].questions[currentQuestion] = {
        correct: true,
        attempts: currentAttempts
    };

    document.getElementById('score-display').textContent = score;
    renderQuestionDots();

    // Hide retry hint
    const retryHint = document.getElementById('retry-hint');
    if (retryHint) retryHint.classList.add('hidden');

    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.remove('hidden');

    const attemptsText = currentAttempts === 1
        ? `<span class="verdict-bonus">🌟 Đúng ngay lần đầu! +${points} điểm</span>`
        : `<span class="verdict-retry-info">Đúng sau ${currentAttempts} lần thử · +${points} điểm</span>`;

    verdictPanel.className = `verdict-panel verdict-correct`;

    const isLastQuestion = currentQuestion >= caseData.questions.length - 1;
    const isLastCase = currentCase >= CASES.length - 1;
    let nextLabel = '→ Phán quyết tiếp theo';
    if (isLastQuestion && !isLastCase) nextLabel = '→ Vụ án tiếp theo';
    if (isLastQuestion && isLastCase) nextLabel = '📊 Xem kết quả';

    verdictPanel.innerHTML = `
        <div class="verdict-header">
            ✅ Phán quyết chính xác!
        </div>
        ${attemptsText}
        <div class="verdict-explanation">${q.explanation}</div>
        <button class="verdict-next-btn" onclick="nextStep()">
            ${nextLabel}
        </button>
    `;

    verdictPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function nextStep() {
    const caseData = CASES[currentCase];

    if (currentQuestion < caseData.questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else if (currentCase < CASES.length - 1) {
        currentCase++;
        currentQuestion = 0;
        renderCase();
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;

    const maxScore = totalQuestions * 10;
    const percentage = Math.round((score / maxScore) * 100);
    const timeUsed = 900 - timeLeft;
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;

    let rank, icon, titleClass, message;
    if (percentage >= 90) {
        rank = "THẨM PHÁN XUẤT SẮC";
        icon = "🏆";
        titleClass = "excellent";
        message = "Bạn thể hiện sự am hiểu sâu sắc về tư tưởng Hồ Chí Minh trong xây dựng Nhà nước trong sạch, vững mạnh! Xứng đáng đứng trên bục vinh quang!";
    } else if (percentage >= 70) {
        rank = "THẨM PHÁN GIỎI";
        icon = "🎖️";
        titleClass = "good";
        message = "Bạn có kiến thức tốt về phòng chống tiêu cực. Hãy ôn lại một vài điểm nhỏ để hoàn thiện hơn nhé!";
    } else if (percentage >= 50) {
        rank = "THẨM PHÁN KHÁ";
        icon = "📜";
        titleClass = "average";
        message = "Bạn nắm được nội dung cơ bản nhưng cần nghiên cứu sâu hơn để đưa ra phán quyết chính xác hơn.";
    } else {
        rank = "CẦN HỌC THÊM";
        icon = "📚";
        titleClass = "poor";
        message = "Hãy quay lại xem lí thuyết kỹ hơn rồi thử lại. Kiến thức về tư tưởng Hồ Chí Minh rất quan trọng!";
    }

    // Build case review with per-question detail
    let caseReviewHTML = '';
    caseResults.forEach((cr, i) => {
        const firstTryCount = cr.questions.filter(q => q.attempts === 1).length;
        const totalQ = cr.questions.length;
        const caseIcon = firstTryCount === totalQ ? '🌟' : firstTryCount >= 3 ? '✅' : '⚠️';

        let detailDots = '';
        cr.questions.forEach((q, qi) => {
            const labels = ['🔍', '🧠', '⚖️', '🛡️', '🔒'];
            let status, cls;
            if (q.attempts === 1) {
                status = '✓';
                cls = 'dot-correct';
            } else if (q.attempts > 1) {
                status = q.attempts + '×';
                cls = 'dot-retry';
            } else {
                status = '—';
                cls = 'dot-skip';
            }
            detailDots += `<span class="review-dot ${cls}" title="${QUESTION_LABELS[qi]}">${labels[qi]}${status}</span> `;
        });

        caseReviewHTML += `
            <div class="review-item">
                <span class="review-icon">${caseIcon}</span>
                <div>
                    <div class="review-case-name">${cr.title}</div>
                    <div class="review-detail">${firstTryCount}/${totalQ} đúng ngay lần đầu</div>
                    <div class="review-dots">${detailDots}</div>
                </div>
            </div>
        `;
    });

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="result-icon">${icon}</div>
        <h2 class="result-title ${titleClass}">${rank}</h2>
        <p class="result-subtitle">${message}</p>

        <div class="result-score-card">
            <div class="result-score-big">${score}/${maxScore}</div>
            <div class="result-score-label">Điểm Liêm Chính</div>
            <div class="result-bar">
                <div class="result-bar-fill" style="width: 0%"></div>
            </div>
            <div class="result-stats">
                <div class="result-stat">
                    <div class="result-stat-num green">${firstTryCorrect}</div>
                    <div class="result-stat-label">Đúng lần đầu</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-num gold">${totalQuestions - firstTryCorrect}</div>
                    <div class="result-stat-label">Cần thử lại</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-num gold">${minutesUsed}:${secondsUsed.toString().padStart(2, '0')}</div>
                    <div class="result-stat-label">Thời gian</div>
                </div>
            </div>
        </div>

        <div class="case-review">
            <h4>📋 Chi tiết từng vụ án</h4>
            <div class="review-legend">
                <span>🔍 Bệnh tiêu cực</span>
                <span>🧠 Nguyên nhân</span>
                <span>⚖️ Án phạt</span>
                <span>🛡️ Khắc phục</span>
                <span>🔒 Kiểm soát</span>
            </div>
            ${caseReviewHTML}
        </div>

        <div class="result-actions">
            <button class="btn btn-primary btn-glow" onclick="startGame()">
                🔄 Chơi lại
            </button>
            <button class="btn btn-secondary" onclick="showScreen('screen-theory')">
                📖 Xem lí thuyết
            </button>
            <button class="btn btn-secondary" onclick="showScreen('screen-landing')">
                🏠 Về trang chủ
            </button>
        </div>
    `;

    showScreen('screen-result');

    setTimeout(() => {
        const bar = document.querySelector('.result-bar-fill');
        if (bar) bar.style.width = percentage + '%';
    }, 300);
}

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});
