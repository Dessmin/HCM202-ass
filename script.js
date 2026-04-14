// ========================
// GAME DATA
// ========================

const CASES = [
    {
        id: 1,
        title: "Vụ án Giám đốc Sở X",
        defendant: { name: "Nguyễn Văn A", role: "Giám đốc Sở Tài nguyên - Môi trường tỉnh H", avatar: "🧑‍💼" },
        description: `Ông Nguyễn Văn A, Giám đốc Sở Tài nguyên - Môi trường tỉnh H, trong suốt 5 năm giữ chức đã lợi dụng quyền hạn để thu lợi bất chính hơn 8 tỉ đồng. Ông ta nhận hối lộ từ các doanh nghiệp khai thác khoáng sản, cấp giấy phép trái quy định, đồng thời sử dụng xe công, tài sản công cho mục đích cá nhân. Tiền tham ô được chuyển vào tài khoản người thân để che giấu.`,
        questions: [
            {
                label: "Câu hỏi 1: Xác định loại vi phạm",
                text: "Hành vi của ông Nguyễn Văn A thuộc loại tiêu cực nào theo phân loại của Hồ Chí Minh?",
                options: [
                    "Quan liêu",
                    "Tham ô (Giặc nội xâm)",
                    "Lãng phí",
                    "Cậy thế"
                ],
                correct: 1,
                explanation: `Đúng! Đây là hành vi **THAM Ô** — lấy của công dùng vào việc tư, quên cả thanh liêm, đạo đức. Hồ Chí Minh xếp tham ô vào nhóm "Giặc nội xâm" cùng với lãng phí và quan liêu. Ông A đã nhận hối lộ, cấp phép trái quy định, sử dụng tài sản công cho cá nhân — tất cả đều là biểu hiện điển hình của tham ô.`
            },
            {
                label: "Câu hỏi 2: Xác định nguyên nhân gốc rễ",
                text: "Nguyên nhân gốc rễ (chủ quan) dẫn đến hành vi sai phạm của ông A là gì?",
                options: [
                    "Do công tác cán bộ của Đảng chưa tốt",
                    "Do tàn dư chế độ thực dân, phong kiến",
                    "Do chủ nghĩa cá nhân — \"bệnh mẹ\"",
                    "Do trình độ phát triển xã hội còn thấp"
                ],
                correct: 2,
                explanation: `Chính xác! Hồ Chí Minh chỉ rõ nguyên nhân chủ quan bắt nguồn từ căn **"bệnh mẹ" là CHỦ NGHĨA CÁ NHÂN**, từ sự thiếu tu dưỡng, rèn luyện của bản thân cán bộ. Ông A đã đặt lợi ích cá nhân lên trên lợi ích nhân dân, quên đi nhiệm vụ phục vụ dân.`
            },
            {
                label: "Câu hỏi 3: Chọn biện pháp xử lý",
                text: "Theo tư tưởng Hồ Chí Minh, biện pháp xử lý phù hợp nhất cho trường hợp này là gì?",
                options: [
                    "Chỉ giáo dục, phê bình nhẹ nhàng vì ông A có nhiều đóng góp",
                    "Xử phạt nghiêm minh theo pháp luật, không có vùng cấm",
                    "Chuyển công tác sang vị trí khác",
                    "Chỉ yêu cầu hoàn trả tài sản là đủ"
                ],
                correct: 1,
                explanation: `Đúng! Theo Hồ Chí Minh: **"Trăm điều phải có thần linh pháp quyền"**, tuyệt nhiên không có vùng cấm. Cần **thẳng tay trừng trị** đối với kẻ thoái hóa, biến chất, dù ở địa vị nào. Người đã từng ký sắc lệnh tử hình đối với tội tham ô ở mức cao nhất. Kết hợp "Xây" và "Chống": xử phạt nghiêm minh, đúng người đúng tội.`
            }
        ]
    },
    {
        id: 2,
        title: "Vụ án Chủ tịch huyện B",
        defendant: { name: "Trần Thị B", role: "Chủ tịch UBND huyện M, tỉnh N", avatar: "👩‍💼" },
        description: `Bà Trần Thị B giữ chức Chủ tịch UBND huyện M suốt 8 năm. Trong thời gian đó, bà chỉ ngồi trong phòng đọc báo cáo, ký giấy tờ mà không bao giờ xuống cơ sở kiểm tra thực tế. Nhiều công trình xây dựng tại huyện bị rút ruột, chất lượng kém nhưng bà không hề hay biết. Khi người dân phản ánh, bà phớt lờ và cho rằng "đã có cấp dưới lo". Hậu quả: 3 công trình trường học bị sập sau 2 năm sử dụng.`,
        questions: [
            {
                label: "Câu hỏi 1: Xác định loại vi phạm",
                text: "Hành vi của bà B thuộc loại tiêu cực nào?",
                options: [
                    "Đặc quyền, đặc lợi",
                    "Tham ô",
                    "Quan liêu (Bệnh gốc)",
                    "Tư túng, chia rẽ"
                ],
                correct: 2,
                explanation: `Chính xác! Đây là biểu hiện điển hình của **QUAN LIÊU** — "bệnh gốc" sinh ra tham ô, lãng phí. Bà B "chỉ biết khai hội, viết chỉ thị, xem báo cáo trên giấy mà không kiểm tra thực tế, xa rời quần chúng" — đúng như Hồ Chí Minh mô tả: "có mắt mà không thấy suốt, có tai mà không nghe thấu". Bệnh quan liêu đã ấp ủ, dung túng, che chở cho nạn tham ô (rút ruột công trình).`
            },
            {
                label: "Câu hỏi 2: Mối quan hệ giữa các loại tiêu cực",
                text: "Theo Hồ Chí Minh, để trừ sạch nạn rút ruột công trình (tham ô, lãng phí) ở huyện M, trước hết phải làm gì?",
                options: [
                    "Tăng lương cho cán bộ",
                    "Tẩy sạch bệnh quan liêu trước",
                    "Mời chuyên gia nước ngoài giám sát",
                    "Đầu tư thêm ngân sách"
                ],
                correct: 1,
                explanation: `Đúng! Hồ Chí Minh nhấn mạnh: **"Muốn trừ sạch tham ô, lãng phí thì trước hết phải TẨY SẠCH BỆNH QUAN LIÊU"**. Quan liêu là bệnh gốc — nếu lãnh đạo xa rời thực tế, không kiểm tra giám sát thì tham ô, lãng phí sẽ được ấp ủ và che chở.`
            },
            {
                label: "Câu hỏi 3: Vai trò kiểm soát",
                text: "Để ngăn chặn tình trạng tương tự, hình thức kiểm soát nào cần được tăng cường?",
                options: [
                    "Chỉ cần kiểm soát bên trong (của Nhà nước) là đủ",
                    "Chỉ cần kiểm soát bên ngoài (của nhân dân) là đủ",
                    "Cần kết hợp cả kiểm soát bên trong và bên ngoài (nhân dân)",
                    "Không cần kiểm soát, chỉ cần giáo dục"
                ],
                correct: 2,
                explanation: `Chính xác! Cần kết hợp cả hai hình thức: **Kiểm soát bên trong** (phân công, phân nhiệm, bỏ phiếu tín nhiệm) và **Kiểm soát bên ngoài** (của nhân dân). Hồ Chí Minh nhấn mạnh: "Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì cũng phải có quần chúng giúp mới được". Đảng và Nhà nước phải dựa hẳn vào quần chúng.`
            }
        ]
    },
    {
        id: 3,
        title: "Vụ án Phó Giám đốc C",
        defendant: { name: "Lê Văn C", role: "Phó Giám đốc Sở Xây dựng tỉnh P", avatar: "🧑‍💼" },
        description: `Ông Lê Văn C, Phó Giám đốc Sở Xây dựng, liên tục tổ chức các buổi hội nghị, hội thảo xa hoa với kinh phí hàng trăm triệu đồng từ ngân sách nhà nước. Mỗi chuyến công tác, ông đều ở khách sạn 5 sao, đặt vé máy bay hạng thương gia, tổ chức tiệc chiêu đãi hoành tráng. Trong khi đó, nhiều dự án nhà ở cho người nghèo bị đình trệ vì thiếu kinh phí. Ngân sách sở chi sai mục đích lên đến 15 tỉ đồng.`,
        questions: [
            {
                label: "Câu hỏi 1: Xác định loại vi phạm",
                text: "Hành vi chi tiêu xa hoa, sử dụng ngân sách sai mục đích của ông C thuộc loại tiêu cực nào?",
                options: [
                    "Tham ô",
                    "Lãng phí (Giặc nội xâm)",
                    "Kiêu ngạo",
                    "Quan liêu"
                ],
                correct: 1,
                explanation: `Đúng! Đây là hành vi **LÃNG PHÍ** — lãng phí tiền của, sức lao động và thời gian. Hồ Chí Minh lên án gay gắt tội lãng phí vì đó là **mồ hôi nước mắt của dân**. Ông C dùng tiền ngân sách (tiền thuế của dân) cho các hoạt động xa hoa không cần thiết, trong khi dân nghèo thiếu nhà ở — đây là biểu hiện điển hình của lãng phí.`
            },
            {
                label: "Câu hỏi 2: Liên hệ đặc quyền đặc lợi",
                text: "Ngoài lãng phí, hành vi của ông C còn thể hiện biểu hiện tiêu cực nào khác?",
                options: [
                    "Tư túng, chia rẽ",
                    "Đặc quyền, đặc lợi — biểu hiện của chủ nghĩa cá nhân",
                    "Cậy thế",
                    "Không có biểu hiện nào khác"
                ],
                correct: 1,
                explanation: `Chính xác! Hành vi của ông C còn thể hiện **ĐẶC QUYỀN, ĐẶC LỢI** — hách dịch, lạm dụng chức quyền để hưởng thụ cuộc sống xa hoa bằng tiền công. Đây là biểu hiện của chủ nghĩa cá nhân — đặt lợi ích cá nhân lên trên tất cả, coi mình là "quan" chứ không phải "đầy tớ" của nhân dân.`
            },
            {
                label: "Câu hỏi 3: Biện pháp phòng ngừa",
                text: "Biện pháp nào mang tính căn bản và lâu dài nhất để ngăn chặn tình trạng lãng phí như trên?",
                options: [
                    "Siết chặt kỷ luật và pháp luật",
                    "Cán bộ phải nêu gương",
                    "Phát huy dân chủ trong xã hội",
                    "Huy động sức mạnh chủ nghĩa yêu nước"
                ],
                correct: 2,
                explanation: `Chính xác! **Phát huy dân chủ trong xã hội** là giải pháp **căn bản và có ý nghĩa lâu dài** nhất. Nâng cao trình độ dân trí về dân chủ, thực hành dân chủ rộng rãi để nhân dân thực hiện quyền làm chủ — từ đó nhân dân có thể giám sát việc chi tiêu ngân sách, phát hiện và tố cáo lãng phí.`
            }
        ]
    },
    {
        id: 4,
        title: "Vụ án Bí thư huyện D",
        defendant: { name: "Phạm Văn D", role: "Bí thư Huyện ủy huyện K", avatar: "🧑‍💼" },
        description: `Ông Phạm Văn D trúng cử Bí thư Huyện ủy huyện K. Ngay sau khi nhậm chức, ông bổ nhiệm em trai vào vị trí Trưởng phòng Tài chính, cháu ruột vào vị trí Phó phòng Nội vụ, và bạn thân thời đại học vào chức Giám đốc Ban Quản lý dự án — mặc dù cả ba đều không đáp ứng đủ tiêu chuẩn chuyên môn. Nhiều cán bộ có năng lực bị gạt ra ngoài, gây bất bình lớn trong nội bộ.`,
        questions: [
            {
                label: "Câu hỏi 1: Xác định loại vi phạm",
                text: "Hành vi bổ nhiệm người thân không đủ tiêu chuẩn của ông D thuộc loại tiêu cực nào?",
                options: [
                    "Quan liêu",
                    "Tham ô",
                    "Tư túng, chia rẽ, kiêu ngạo",
                    "Lãng phí"
                ],
                correct: 2,
                explanation: `Đúng! Đây là biểu hiện điển hình của **TƯ TÚNG, CHIA RẼ** — kéo bè kéo cánh, đưa người thân cận không có tài năng vào chức vụ, gây mất đoàn kết nội bộ. Ông D đã bổ nhiệm em trai, cháu ruột, bạn thân vào các vị trí quan trọng dù không đủ tiêu chuẩn — đây là hành vi "cài cắm" người thân rất nguy hại.`
            },
            {
                label: "Câu hỏi 2: Nguyên nhân khách quan",
                text: "Ngoài nguyên nhân chủ quan (chủ nghĩa cá nhân), nguyên nhân khách quan nào đã tạo điều kiện cho hành vi này?",
                options: [
                    "Do trình độ phát triển xã hội thấp",
                    "Do công tác cán bộ của Đảng và Nhà nước chưa tốt",
                    "Do tàn dư chế độ thực dân",
                    "Do âm mưu của lực lượng phản động"
                ],
                correct: 1,
                explanation: `Chính xác! **Công tác cán bộ của Đảng và Nhà nước chưa tốt** là nguyên nhân khách quan chính. Khi quy trình bổ nhiệm thiếu minh bạch, thiếu cơ chế giám sát chặt chẽ, thiếu tiêu chuẩn rõ ràng thì người có quyền dễ dàng "lách luật" để bổ nhiệm người thân. Đây là vấn đề mà QĐ 114-QĐ/TW (11/7/2023) đã đề cập rõ.`
            },
            {
                label: "Câu hỏi 3: Quy định liên quan",
                text: "Quy định nào của Bộ Chính trị trực tiếp liên quan đến việc kiểm soát quyền lực trong công tác cán bộ?",
                options: [
                    "QĐ 131-QĐ/TW về kiểm tra, giám sát, kỷ luật đảng",
                    "QĐ 132-QĐ/TW về điều tra, truy tố, xét xử",
                    "QĐ 114-QĐ/TW về kiểm soát quyền lực trong công tác cán bộ",
                    "QĐ 144-QĐ/TW về chuẩn mực đạo đức cách mạng"
                ],
                correct: 2,
                explanation: `Đúng! **Quy định số 114-QĐ/TW ngày 11/7/2023** của Bộ Chính trị quy định về kiểm soát quyền lực và phòng, chống tham nhũng, tiêu cực **trong công tác cán bộ**. Đây là quy định trực tiếp liên quan đến việc ngăn chặn hành vi tư túng, bổ nhiệm "cánh hẩu" như trường hợp ông D.`
            }
        ]
    },
    {
        id: 5,
        title: "Vụ án Thanh tra E",
        defendant: { name: "Hoàng Văn E", role: "Chánh Thanh tra tỉnh Q", avatar: "🧑‍💼" },
        description: `Ông Hoàng Văn E, Chánh Thanh tra tỉnh Q, thường xuyên sử dụng chức vụ để gây áp lực lên các doanh nghiệp bị thanh tra. Ông hạch sách, đòi hỏi "lót tay" trước khi ký kết luận thanh tra. Khi người dân đến khiếu nại, ông tỏ thái độ hách dịch, khinh thường, quát nạt và đuổi dân ra khỏi phòng. Ông tự cho mình quyền "ban phát" sự thuận lợi hoặc khó khăn cho bất kỳ ai. Nhiều doanh nghiệp nhỏ bị phá sản vì bị "hành" thủ tục.`,
        questions: [
            {
                label: "Câu hỏi 1: Xác định loại vi phạm",
                text: "Hành vi hách dịch, coi thường người dân, lạm dụng chức vụ của ông E thuộc loại tiêu cực nào?",
                options: [
                    "Lãng phí",
                    "Quan liêu",
                    "Cậy thế + Đặc quyền, đặc lợi",
                    "Tư túng, chia rẽ"
                ],
                correct: 2,
                explanation: `Chính xác! Ông E thể hiện cả hai dạng tiêu cực: **CẬY THẾ** — ỷ vào vị trí trong cơ quan chính phủ để coi thường kỷ luật, coi thường người khác; và **ĐẶC QUYỀN, ĐẶC LỢI** — tư tưởng "cửa quyền", hách dịch với dân, lạm dụng chức quyền để vơ vét tiền cho cá nhân. Cả hai đều là biểu hiện của chủ nghĩa cá nhân.`
            },
            {
                label: "Câu hỏi 2: Bản chất quyền lực",
                text: "Hành vi của ông E đi ngược lại nguyên tắc cơ bản nào về quyền lực nhà nước?",
                options: [
                    "Quyền lực nhà nước là do nhân dân ủy thác, cán bộ là đầy tớ của dân",
                    "Quyền lực nhà nước là vĩnh viễn không thể thay đổi",
                    "Cán bộ có quyền tự quyết mọi việc",
                    "Nhà nước không cần sự giám sát"
                ],
                correct: 0,
                explanation: `Chính xác! Hồ Chí Minh khẳng định: **Quyền lực nhà nước là do nhân dân ủy thác**. Cán bộ, công chức là người được nhân dân giao phó quyền lực để phục vụ nhân dân, chứ không phải để hách dịch, cửa quyền. Ông E đã quên bản chất này và biến quyền lực nhân dân thành quyền lực cá nhân.`
            },
            {
                label: "Câu hỏi 3: Biện pháp kết hợp",
                text: "Theo phương châm 'Xây' và 'Chống', điều quan trọng cần làm với trường hợp ông E là gì?",
                options: [
                    "Chỉ cần 'Xây' — giáo dục đạo đức là đủ",
                    "Chỉ cần 'Chống' — xử phạt nghiêm là đủ",
                    "Kết hợp xử phạt nghiêm minh VÀ giáo dục đạo đức cách mạng",
                    "Không cần xử lý vì đây là chuyện nhỏ"
                ],
                correct: 2,
                explanation: `Đúng! Hồ Chí Minh chủ trương **kết hợp "XÂY" và "CHỐNG"**: Xử phạt nghiêm minh, đúng người đúng tội (Chống); đồng thời coi trọng giáo dục đạo đức cách mạng, khơi dậy lương tâm (Xây). Phương châm: làm cho cái tốt được phát huy và cái xấu mất dần đi. Cán bộ phải giữ cái "tâm" trong sạch.`
            }
        ]
    },
    {
        id: 6,
        title: "Vụ án Phó Chủ tịch F",
        defendant: { name: "Đỗ Thị F", role: "Phó Chủ tịch UBND tỉnh R", avatar: "👩‍💼" },
        description: `Bà Đỗ Thị F, Phó Chủ tịch tỉnh R, là một cán bộ có năng lực chuyên môn tốt nhưng dần trở nên kiêu ngạo sau nhiều năm giữ chức. Bà từ chối lắng nghe ý kiến phản biện của cấp dưới, tự ý ra quyết định mà không thông qua tập thể. Khi Nghị viện nhân dân yêu cầu giải trình về một dự án kém hiệu quả trị giá 500 tỉ đồng, bà né tránh và coi nhẹ việc bỏ phiếu tín nhiệm. Bà tuyên bố: "Tôi biết mình làm đúng, không cần ai phê bình".`,
        questions: [
            {
                label: "Câu hỏi 1: Hình thức kiểm soát",
                text: "Việc Nghị viện nhân dân yêu cầu giải trình và tổ chức bỏ phiếu tín nhiệm thuộc hình thức kiểm soát nào?",
                options: [
                    "Kiểm soát bên ngoài (của nhân dân)",
                    "Kiểm soát bên trong (của Nhà nước)",
                    "Không thuộc hình thức kiểm soát nào",
                    "Kiểm soát của tổ chức quốc tế"
                ],
                correct: 1,
                explanation: `Đúng! Đây là **Kiểm soát BÊN TRONG** (Kiểm soát của Nhà nước). Theo Hiến pháp 1946, Nghị viện nhân dân có quyền "Kiểm soát và phê bình Chính phủ". Chế độ **bỏ phiếu tín nhiệm** là cơ chế kiểm soát quan trọng: "Bộ trưởng nào không được Nghị viện tín nhiệm thì phải từ chức".`
            },
            {
                label: "Câu hỏi 2: Loại vi phạm",
                text: "Thái độ từ chối lắng nghe và coi thường sự giám sát của bà F thuộc biểu hiện nào?",
                options: [
                    "Tham ô",
                    "Lãng phí",
                    "Kiêu ngạo + Cậy thế",
                    "Đặc quyền đặc lợi"
                ],
                correct: 2,
                explanation: `Chính xác! Bà F thể hiện sự **KIÊU NGẠO** — tự cao tự đại, không lắng nghe ý kiến người khác; và **CẬY THẾ** — ỷ vào vị trí quyền lực để coi thường kỷ luật, coi thường cơ chế giám sát. Điều này vi phạm nguyên tắc quan trọng mà Hồ Chí Minh đề ra.`
            },
            {
                label: "Câu hỏi 3: Trách nhiệm nêu gương",
                text: "Theo Hồ Chí Minh, bà F với cương vị Phó Chủ tịch tỉnh phải thực hiện nguyên tắc gì?",
                options: [
                    "Chức vụ càng cao, quyền lợi càng nhiều",
                    "Chức vụ càng cao, trách nhiệm nêu gương càng lớn",
                    "Cán bộ cấp cao được miễn trách nhiệm nêu gương",
                    "Nêu gương chỉ dành cho cán bộ cấp thấp"
                ],
                correct: 1,
                explanation: `Chính xác! Hồ Chí Minh nhấn mạnh: **"Chức vụ càng cao, trách nhiệm nêu gương càng lớn"**. Sự gương mẫu của người lãnh đạo là **mệnh lệnh không lời** có sức thuyết phục nhất đối với nhân dân. Bà F với cương vị Phó Chủ tịch tỉnh lại không thể hiện sự gương mẫu, phản bội lại kỳ vọng của nhân dân.`
            }
        ]
    },
    {
        id: 7,
        title: "Vụ án Giám đốc BQL G",
        defendant: { name: "Ngô Văn G", role: "Giám đốc Ban Quản lý Dự án huyện S", avatar: "🧑‍💼" },
        description: `Ông Ngô Văn G, Giám đốc Ban Quản lý Dự án huyện S, phụ trách dự án xây dựng đường giao thông nông thôn ngân sách 200 tỉ đồng. Ông biết rõ một quan chức cấp trên đang nhận hối lộ từ nhà thầu để trúng gói thầu, nhưng vì sợ bị trả thù nên im lặng. Bản thân ông không tham ô nhưng cũng không dám tố cáo. Khi được hỏi, ông nói: "Tôi chỉ là cấp dưới, biết gì mà nói". Kết quả: con đường bị rút ruột, hư hỏng nặng sau 1 năm.`,
        questions: [
            {
                label: "Câu hỏi 1: Trách nhiệm công dân",
                text: "Theo tư tưởng Hồ Chí Minh, thái độ im lặng của ông G phản ánh sự thiếu sót về biện pháp nào?",
                options: [
                    "Thiếu siết chặt kỷ luật Đảng",
                    "Thiếu huy động sức mạnh chủ nghĩa yêu nước — trách nhiệm của toàn dân",
                    "Thiếu giáo dục đạo đức",
                    "Thiếu phát huy dân chủ"
                ],
                correct: 1,
                explanation: `Đúng! Hồ Chí Minh chủ trương biến cuộc chiến chống tiêu cực thành **cuộc chiến của TOÀN DÂN** dựa trên lòng tự hào và tự tôn dân tộc. **Bất kỳ người Việt Nam nào**, dù là dân thường hay cán bộ, đều phải có trách nhiệm. Ông G đã thiếu tinh thần yêu nước, thiếu dũng khí đấu tranh — đây là biểu hiện của sự thiếu huy động sức mạnh chủ nghĩa yêu nước.`
            },
            {
                label: "Câu hỏi 2: Vai trò kiểm soát từ dưới lên",
                text: "Theo Hồ Chí Minh, các cách kiểm soát quyền lực là gì?",
                options: [
                    "Chỉ kiểm soát từ trên xuống",
                    "Chỉ kiểm soát từ dưới lên",
                    "Hai cách: từ trên xuống và từ dưới lên",
                    "Không cần kiểm soát nếu đã có pháp luật"
                ],
                correct: 2,
                explanation: `Chính xác! Hồ Chí Minh nêu rõ **hai cách kiểm soát**: từ trên xuống VÀ từ dưới lên. Ngoài ra, cần **hai điều kiện**: kiểm soát phải có hệ thống và người đi kiểm soát phải là những người rất có uy tín. Người nhấn mạnh phải "khéo kiểm soát". Trường hợp ông G cho thấy cần tăng cường kiểm soát từ dưới lên — tạo cơ chế bảo vệ để cấp dưới dám tố cáo sai phạm.`
            },
            {
                label: "Câu hỏi 3: Nguyên nhân tổng hợp",
                text: "Việc ông G không dám tố cáo phản ánh nguyên nhân khách quan nào?",
                options: [
                    "Do tàn dư chế độ phong kiến",
                    "Do cách tổ chức, vận hành và chính sách bảo vệ cán bộ chưa hiệu quả",
                    "Do trình độ phát triển xã hội thấp",
                    "Do âm mưu lực lượng phản động"
                ],
                correct: 1,
                explanation: `Đúng! Việc ông G sợ bị trả thù khi tố cáo phản ánh nguyên nhân khách quan: **cách tổ chức, vận hành trong Đảng, Nhà nước và chính sách bảo vệ cán bộ chưa hiệu quả**. Hồ Chí Minh đã cảnh báo: nếu không có biện pháp phòng, chống và **chính sách bảo vệ cán bộ** hiệu quả thì nguy cơ mất cán bộ là rất lớn.`
            }
        ]
    },
    {
        id: 8,
        title: "Vụ án Chánh án H",
        defendant: { name: "Vũ Văn H", role: "Chánh án Tòa án nhân dân tỉnh T", avatar: "🧑‍⚖️" },
        description: `Ông Vũ Văn H, Chánh án Tòa án nhân dân tỉnh T, bị phát hiện đã nhận hối lộ 5 tỉ đồng để giảm nhẹ hình phạt cho một bị cáo trong vụ án tham nhũng lớn. Ông ta lợi dụng quyền hạn trong hoạt động xét xử để bẻ cong công lý. Kết quả: bị cáo vốn đáng bị phạt 20 năm tù chỉ nhận 5 năm tù treo. Vụ việc gây bức xúc dư luận, làm mất niềm tin của nhân dân vào hệ thống tư pháp.`,
        questions: [
            {
                label: "Câu hỏi 1: Quy định liên quan",
                text: "Hành vi lợi dụng quyền hạn trong xét xử của ông H vi phạm quy định nào của Bộ Chính trị?",
                options: [
                    "QĐ 114-QĐ/TW về công tác cán bộ",
                    "QĐ 131-QĐ/TW về kiểm tra, giám sát, kỷ luật đảng",
                    "QĐ 132-QĐ/TW về kiểm soát quyền lực trong điều tra, truy tố, xét xử, thi hành án",
                    "QĐ 144-QĐ/TW về chuẩn mực đạo đức"
                ],
                correct: 2,
                explanation: `Chính xác! **Quy định số 132-QĐ/TW ngày 27/10/2023** của Bộ Chính trị quy định về kiểm soát quyền lực, phòng, chống tham nhũng, tiêu cực **trong hoạt động điều tra, truy tố, XÉT XỬ, thi hành án**. Ông H đã vi phạm nghiêm trọng quy định này bằng việc lợi dụng quyền xét xử để bẻ cong công lý.`
            },
            {
                label: "Câu hỏi 2: Mức độ nghiêm trọng",
                text: "Theo tư tưởng Hồ Chí Minh, với trường hợp nghiêm trọng như ông H (Chánh án nhận hối lộ), thái độ xử lý cần như thế nào?",
                options: [
                    "Nên xem xét giảm nhẹ vì ông có chức vụ cao, có nhiều đóng góp",
                    "Thẳng tay trừng trị, không có vùng cấm, dù ở địa vị nào",
                    "Chỉ cần kỷ luật Đảng, không cần xử lý hình sự",
                    "Cho nghỉ hưu sớm là đủ"
                ],
                correct: 1,
                explanation: `Đúng! Hồ Chí Minh khẳng định: phải **"thẳng tay trừng trị"** đối với những kẻ thoái hóa, biến chất, **dù ở địa vị nào, làm nghề nghiệp gì** cũng phải bị xử lý. "Trăm điều phải có thần linh pháp quyền" — tuyệt nhiên **KHÔNG CÓ VÙNG CẤM** cho sự sai phạm. Chức vụ càng cao, trách nhiệm càng lớn.`
            },
            {
                label: "Câu hỏi 3: Kết quả thực tiễn",
                text: "Theo số liệu thực tiễn năm 2024, bao nhiêu người đứng đầu và cấp phó bị kỷ luật vì để xảy ra tham nhũng, tiêu cực?",
                options: [
                    "50 người",
                    "80 người",
                    "130 người",
                    "200 người"
                ],
                correct: 2,
                explanation: `Chính xác! Năm 2024, đã có **130** người đứng đầu và cấp phó bị kỷ luật vì để xảy ra tham nhũng, tiêu cực. Ngoài ra, thu hồi tài sản **hơn 22.000 tỉ đồng** từ án tham nhũng và kinh tế. Đây là minh chứng cho thấy các biện pháp theo tư tưởng Hồ Chí Minh đang được áp dụng hiệu quả vào thực tiễn.`
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
let correctAnswers = 0;
let wrongAnswers = 0;
let timerInterval = null;
let timeLeft = 600; // 10 minutes in seconds
let caseResults = [];
let gameStarted = false;

// ========================
// SCREEN MANAGEMENT
// ========================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    
    // Scroll to top
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
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = 600;
    totalQuestions = CASES.reduce((acc, c) => acc + c.questions.length, 0);
    caseResults = CASES.map(c => ({
        title: c.title,
        questions: c.questions.map(() => null) // null = unanswered
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
    
    // Update counter
    document.getElementById('case-current').textContent = currentCase + 1;
    document.getElementById('case-total').textContent = CASES.length;

    // Update question dots
    renderQuestionDots();

    // Render case panel
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

    // Render first question
    renderQuestion();

    // Hide verdict
    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.add('hidden');

    // Scroll to top
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
        if (result === true) dot.classList.add('correct');
        if (result === false) dot.classList.add('wrong');
        
        dotsContainer.appendChild(dot);
    });
}

function renderQuestion() {
    const caseData = CASES[currentCase];
    const q = caseData.questions[currentQuestion];
    const letters = ['A', 'B', 'C', 'D'];

    const questionPanel = document.getElementById('question-panel');
    questionPanel.innerHTML = `
        <div class="question-label">${q.label}</div>
        <div class="question-text">${q.text}</div>
        <div class="options-grid">
            ${q.options.map((opt, i) => `
                <button class="option-btn" onclick="selectAnswer(${i})" id="option-${i}">
                    <span class="option-letter">${letters[i]}</span>
                    <span>${opt}</span>
                </button>
            `).join('')}
        </div>
    `;

    // Hide verdict
    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.add('hidden');

    // Update dots
    renderQuestionDots();

    // Update score
    document.getElementById('score-display').textContent = score;
}

function selectAnswer(index) {
    const caseData = CASES[currentCase];
    const q = caseData.questions[currentQuestion];
    const isCorrect = index === q.correct;

    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.add('disabled');
        btn.onclick = null;
        if (i === q.correct) {
            btn.classList.add('correct');
        }
        if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    // Update score
    if (isCorrect) {
        score += 10;
        correctAnswers++;
        caseResults[currentCase].questions[currentQuestion] = true;
    } else {
        wrongAnswers++;
        caseResults[currentCase].questions[currentQuestion] = false;
    }

    document.getElementById('score-display').textContent = score;
    renderQuestionDots();

    // Show verdict
    const verdictPanel = document.getElementById('verdict-panel');
    verdictPanel.classList.remove('hidden');
    verdictPanel.className = `verdict-panel ${isCorrect ? 'verdict-correct' : 'verdict-wrong'}`;

    const isLastQuestion = currentQuestion >= caseData.questions.length - 1;
    const isLastCase = currentCase >= CASES.length - 1;
    let nextLabel = '→ Câu tiếp theo';
    if (isLastQuestion && !isLastCase) nextLabel = '→ Vụ án tiếp theo';
    if (isLastQuestion && isLastCase) nextLabel = '📊 Xem kết quả';

    verdictPanel.innerHTML = `
        <div class="verdict-header">
            ${isCorrect ? '✅ Phán quyết chính xác!' : '❌ Phán quyết chưa đúng!'}
        </div>
        <div class="verdict-explanation">${q.explanation}</div>
        <button class="verdict-next-btn" onclick="nextStep()">
            ${nextLabel}
        </button>
    `;

    // Scroll to verdict
    verdictPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function nextStep() {
    const caseData = CASES[currentCase];
    
    if (currentQuestion < caseData.questions.length - 1) {
        // Next question in same case
        currentQuestion++;
        renderQuestion();
    } else if (currentCase < CASES.length - 1) {
        // Next case
        currentCase++;
        currentQuestion = 0;
        renderCase();
    } else {
        // Game over
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;
    
    const maxScore = totalQuestions * 10;
    const percentage = Math.round((score / maxScore) * 100);
    const timeUsed = 600 - timeLeft;
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;

    let rank, icon, titleClass, message;
    if (percentage >= 90) {
        rank = "THẨM PHÁN XUẤT SẮC";
        icon = "🏆";
        titleClass = "excellent";
        message = "Bạn thể hiện sự am hiểu sâu sắc về tư tưởng Hồ Chí Minh trong xây dựng Nhà nước trong sạch, vững mạnh!";
    } else if (percentage >= 70) {
        rank = "THẨM PHÁN GIỎI";
        icon = "🎖️";
        titleClass = "good";
        message = "Bạn có kiến thức tốt về phòng chống tiêu cực theo tư tưởng Hồ Chí Minh. Hãy ôn lại một vài điểm để hoàn thiện hơn!";
    } else if (percentage >= 50) {
        rank = "THẨM PHÁN KHÁ";
        icon = "📜";
        titleClass = "average";
        message = "Bạn nắm được những nội dung cơ bản, nhưng cần nghiên cứu kỹ hơn để đưa ra phán quyết chính xác hơn.";
    } else {
        rank = "CẦN HỌC THÊM";
        icon = "📚";
        titleClass = "poor";
        message = "Bạn nên quay lại xem lí thuyết và thử lại. Kiến thức về tư tưởng Hồ Chí Minh rất quan trọng cho việc xây dựng Nhà nước pháp quyền!";
    }

    // Build case review
    let caseReviewHTML = '';
    caseResults.forEach((cr, i) => {
        const correctCount = cr.questions.filter(q => q === true).length;
        const totalQ = cr.questions.length;
        const caseIcon = correctCount === totalQ ? '✅' : correctCount > 0 ? '⚠️' : '❌';
        caseReviewHTML += `
            <div class="review-item">
                <span class="review-icon">${caseIcon}</span>
                <div>
                    <div class="review-case-name">${cr.title}</div>
                    <div class="review-detail">${correctCount}/${totalQ} câu đúng</div>
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
                    <div class="result-stat-num green">${correctAnswers}</div>
                    <div class="result-stat-label">Đúng</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-num red">${wrongAnswers}</div>
                    <div class="result-stat-label">Sai</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-num gold">${minutesUsed}:${secondsUsed.toString().padStart(2, '0')}</div>
                    <div class="result-stat-label">Thời gian</div>
                </div>
            </div>
        </div>

        <div class="case-review">
            <h4>📋 Chi tiết từng vụ án</h4>
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

    // Animate score bar
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
