window.SITE = {
  /* ---------- Thông tin chung ---------- */
  team: {
    name: "Jumpin",
    logo: "assets/logo.png",
    tagline: "By fans, for fans and because of fans!",
    heroPrefix: "Chúng mình là",
    heroSub:
      "Một team tổ chức các hoạt động hướng tới các fandom mà chúng mình yêu thích tại TP.HCM, Cho fan, do fan và vì fan là chăm ngôn của chúng mình!",
    // Dòng chữ nhỏ ở footer
    footerNote:
      "Chúng mình làm cho vui và phi lợi nhuận, mọi hình ảnh bản quyền đều thuộc sở hữu của các chủ sỡ hữu gốc!",
  },

  /* ---------- Mạng xã hội (link nào không dùng thì xoá dòng đó) ---------- */
  // Icon có sẵn: facebook, twitter, github, youtube, twitch,
  //              discord, tiktok, instagram, mail
  socials: [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/jumpin.project/" },
    { name: "Email", icon: "mail", url: "mailto:contact@jumpinproject.space" },
  ],

  /* ---------- PROJECT / EVENT đã làm ---------- */
  // status: "done" (đã xong) | "ongoing" (đang chạy) | "upcoming" (sắp tới)
  // cover: ảnh bìa, để trống "" thì hiện khối màu gradient
  projects: [
    {
      title: "Smile in Bloom",
      year: "6/2026",
      status: "Finished",
      cover: "assets/sib.jpg",
      summary:
        "Nơi niềm vui và nụ cười nở rộ. Fanbooth/Off-fan đầu tiên của cộng đồng fan MORE MORE JUMP! Việt Nam!",
      tags: ["Offline", "Off-fan"],
      link: "",
    },
  ],

  /* ---------- THÀNH VIÊN ---------- */
  // avatar: để trống "" thì hiện chữ cái đầu của tên
  // socials: link riêng của thành viên (dùng chung bộ icon ở trên)
  members: [
    {
      name: "Aoba",
      role: "Event Staff",
      bio: "Đại diện cho các phát biểu cũng như thông báo về các project sắp tới của team.",
      avatar: "assets/Aoba.jpg",
    },
    {
      name: "Winku",
      role: "Event Staff",
      bio: "Đại diện đến từ UmaKatsu. UmaYume bu cac btw",
      avatar: "assets/Aoba.jpg",
    },
    {
      name: "Winku",
      role: "Event Staff",
      bio: "Đại diện đến từ UmaKatsu. UmaYume bu cac btw",
      avatar: "assets/Aoba.jpg",
    },
    {
      name: "?",
      role: "?",
      bio: "?",
      avatar: "",
    },
    {
      name: "?",
      role: "?",
      bio: "?",
      avatar: "",
    },
  ],

  /* ---------- Trang "Liên hệ" ---------- */
  contact: {
    intro:
      "Team nhận hợp tác tổ chức event, tài trợ và các đề xuất hoạt động cộng đồng. Nếu bạn muốn đồng hành, gửi thông tin cho chúng mình nhé.",
    items: [
      {
        title: "Hợp tác/Collab tổ chức event",
        desc: "Cùng tổ chức offline, online hoặc bất cứ hoạt động gì cùng với nhau!",
      },
      {
        title: "Tài trợ",
        desc: "Hỗ trợ merch, địa điểm hoặc chi phí cho event của chúng mình hay đại loại thế",
      },
      {
        title: "Tham gia cùng chúng mình?",
        desc: "Nếu bạn muốn làm việc trong một môi trường bị chích điện 24/7 =]]",
      },
    ],
    email: "contact@jumpinproject.com",
    formUrl: "", // dán link Google Form vào đây nếu có
  },
};
