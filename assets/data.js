/* ============================================================
   DATA CỦA WEBSITE — CHỈ CẦN SỬA FILE NÀY
   ------------------------------------------------------------
   Mọi nội dung trên web (tên team, logo, project, thành viên...)
   đều lấy từ đây. Không cần sửa HTML.
   ============================================================ */

window.SITE = {
  /* ---------- Thông tin chung ---------- */
  team: {
    name: "Jumpin",
    // Đổi logo: thay đường dẫn bên dưới bằng file của bồ
    // (ví dụ "assets/logo.png"). Để trống "" thì hiện chữ cái đầu.
    logo: "assets/logo.svg",
    tagline: "Fan-team tổ chức các event & hoạt động phi lợi nhuận",
    heroPrefix: "Chúng mình là",
    heroSub:
      "Một fan-team phi lợi nhuận — tổ chức event, mini-game và các hoạt động cộng đồng dành cho người hâm mộ.",
    // Dòng chữ nhỏ ở footer
    footerNote:
      "Fan-made & phi lợi nhuận. Mọi bản quyền thuộc về chủ sở hữu gốc.",
  },

  /* ---------- Mạng xã hội (link nào không dùng thì xoá dòng đó) ---------- */
  // Icon có sẵn: facebook, twitter, github, youtube, twitch,
  //              discord, tiktok, instagram, mail
  socials: [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/" },
    { name: "Twitter / X", icon: "twitter", url: "https://x.com/" },
    { name: "Email", icon: "mail", url: "mailto:hello@example.com" },
  ],

  /* ---------- PROJECT / EVENT đã làm ---------- */
  // status: "done" (đã xong) | "ongoing" (đang chạy) | "upcoming" (sắp tới)
  // cover: ảnh bìa, để trống "" thì hiện khối màu gradient
  projects: [
    {
      title: "Jumpin Fes 2025",
      year: "2025",
      status: "done",
      cover: "",
      summary:
        "Offline fes đầu tiên của team: gian hàng, sân khấu cover và khu giao lưu cho hơn 800 khách tham dự.",
      tags: ["Offline", "Festival", "Cosplay"],
      link: "",
    },
    {
      title: "Charity Stream Night",
      year: "2025",
      status: "done",
      cover: "",
      summary:
        "Chuỗi livestream gây quỹ cộng đồng, toàn bộ đóng góp được chuyển đến tổ chức thiện nguyện đối tác.",
      tags: ["Online", "Gây quỹ"],
      link: "",
    },
    {
      title: "Fan Art Contest #3",
      year: "2024",
      status: "done",
      cover: "",
      summary:
        "Cuộc thi vẽ tranh thường niên, nhận hơn 200 bài dự thi và triển lãm online cho toàn bộ tác phẩm.",
      tags: ["Contest", "Fan art"],
      link: "",
    },
    {
      title: "Birthday Project",
      year: "2024",
      status: "done",
      cover: "",
      summary:
        "Dự án mừng sinh nhật nhân vật: bảng LED, MV tổng hợp lời chúc và bộ quà tặng dành cho fan.",
      tags: ["Online", "Media"],
      link: "",
    },
    {
      title: "Community Tournament",
      year: "2026",
      status: "ongoing",
      cover: "",
      summary:
        "Giải đấu cộng đồng nhiều vòng, phát sóng trực tiếp kèm bình luận và phần quà cho người tham gia.",
      tags: ["Giải đấu", "Livestream"],
      link: "",
    },
    {
      title: "Jumpin Fes 2026",
      year: "2026",
      status: "upcoming",
      cover: "",
      summary:
        "Phiên bản mở rộng của fes với sân khấu lớn hơn, workshop và khu vực trải nghiệm mới. Đang chuẩn bị.",
      tags: ["Offline", "Festival"],
      link: "",
    },
  ],

  /* ---------- THÀNH VIÊN ---------- */
  // avatar: để trống "" thì hiện chữ cái đầu của tên
  // socials: link riêng của thành viên (dùng chung bộ icon ở trên)
  members: [
    {
      name: "Mune",
      role: "Founder / Leader",
      bio: "Điều phối tổng thể, lên kế hoạch và làm việc với đối tác.",
      avatar: "",
      socials: [{ icon: "twitter", url: "https://x.com/" }],
    },
    {
      name: "Aki",
      role: "Event Manager",
      bio: "Phụ trách vận hành event, timeline và nhân sự ngày chạy chương trình.",
      avatar: "",
      socials: [{ icon: "facebook", url: "https://facebook.com/" }],
    },
    {
      name: "Rin",
      role: "Design Lead",
      bio: "Thiết kế poster, key visual và toàn bộ ấn phẩm truyền thông.",
      avatar: "",
      socials: [{ icon: "twitter", url: "https://x.com/" }],
    },
    {
      name: "Kaito",
      role: "Developer",
      bio: "Làm website, cổng đăng ký và các công cụ nội bộ cho team.",
      avatar: "",
      socials: [{ icon: "twitter", url: "https://x.com/" }],
    },
    {
      name: "Miku",
      role: "Media / Editor",
      bio: "Dựng video, quay hậu trường và quản lý kênh truyền thông.",
      avatar: "",
      socials: [{ icon: "facebook", url: "https://facebook.com/" }],
    },
    {
      name: "Len",
      role: "Community Mod",
      bio: "Hỗ trợ thành viên, giải đáp thắc mắc và giữ không khí cộng đồng.",
      avatar: "",
      socials: [{ icon: "mail", url: "mailto:hello@example.com" }],
    },
  ],

  /* ---------- Trang "Liên hệ" (hợp tác / tham gia team) ---------- */
  contact: {
    intro:
      "Team nhận hợp tác tổ chức event, tài trợ và các đề xuất hoạt động cộng đồng. Nếu bạn muốn đồng hành, gửi thông tin cho chúng mình nhé.",
    items: [
      {
        title: "Hợp tác tổ chức event",
        desc: "Cùng tổ chức offline, online hoặc gian hàng tại sự kiện của bạn.",
      },
      {
        title: "Tài trợ & quà tặng",
        desc: "Hỗ trợ quà tặng, địa điểm hoặc chi phí vận hành cho event phi lợi nhuận.",
      },
      {
        title: "Tham gia team",
        desc: "Tuyển tình nguyện viên cho các vị trí design, media, vận hành và kỹ thuật.",
      },
    ],
    email: "hello@example.com",
    formUrl: "", // dán link Google Form vào đây nếu có
  },
};
