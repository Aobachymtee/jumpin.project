/* ============================================================
   RENDER — không cần sửa file này, mọi nội dung nằm ở data.js
   ============================================================ */
(function () {
  "use strict";

  var S = window.SITE || {};

  /* ---------- Bộ icon SVG ---------- */
  var ICONS = {
    facebook:
      '<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.25h3.32l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>',
    twitter:
      '<path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.44 7.2 5.87-7.2zm-1.3 19.5h2.04L6.48 3.24H4.3l13.3 17.41z"/>',
    github:
      '<path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1a2.7 2.7 0 01.8-1.7c-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.8 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/>',
    youtube:
      '<path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>',
    twitch:
      '<path d="M2.15 0L.5 4.2v16.8h5.7V24h3.2l3-3h4.6L23.5 15V0H2.15zm19.2 13.9l-3.6 3.6h-5.7l-3 3v-3H4.3V1.9h17.05v12zM12.1 5.3h1.9v5.7h-1.9V5.3zm5.2 0h1.9v5.7h-1.9V5.3z"/>',
    discord:
      '<path d="M20.3 4.4A19.8 19.8 0 0015.4 3l-.3.6a15 15 0 014.3 2.2 14 14 0 00-11.9-.6l-.7.3A15 15 0 018.9 3.6L8.6 3a19.8 19.8 0 00-5 1.5C.7 8.9-.1 13.2.3 17.5A20 20 0 006.4 20.5l.7-1a13 13 0 01-2-1c.2 0 .3-.2.4-.3a14.2 14.2 0 0012.2 0l.4.3c-.6.4-1.3.7-2 1l.7 1a20 20 0 006-3c.5-5-.7-9.3-2.5-13.1zM8.1 14.9c-1.2 0-2.1-1.1-2.1-2.4 0-1.3.9-2.4 2.1-2.4 1.2 0 2.2 1.1 2.1 2.4 0 1.3-.9 2.4-2.1 2.4zm7.8 0c-1.2 0-2.1-1.1-2.1-2.4 0-1.3.9-2.4 2.1-2.4 1.2 0 2.2 1.1 2.1 2.4 0 1.3-.9 2.4-2.1 2.4z"/>',
    tiktok:
      '<path d="M16.6 0h-3.3v16.2a2.8 2.8 0 01-2.8 2.7 2.8 2.8 0 01-2.8-2.7c0-1.5 1.2-2.7 2.7-2.8v-3.4a6.2 6.2 0 00-6 6.2A6.2 6.2 0 0010.6 24a6.2 6.2 0 006.2-6.2V7.9a7.7 7.7 0 004.5 1.4V5.9c-2.6 0-4.7-2.1-4.7-4.7V0z"/>',
    instagram:
      '<path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1zM12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.4 4 .7c-.8.3-1.5.7-2.2 1.4C1.1 2.8.7 3.5.4 4.3.1 5 0 5.9 0 7.2 0 8.5 0 8.9 0 12s0 3.5.1 4.8c0 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.6 3 .6 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.3 0 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.6-1.7.6-3 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2C21.2 1.1 20.5.7 19.7.4c-.8-.3-1.7-.6-3-.6C15.5 0 15.1 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm7.8-10.4a1.4 1.4 0 11-2.9 0 1.4 1.4 0 012.9 0z"/>',
    mail: '<path d="M1.5 4h21A1.5 1.5 0 0124 5.5v13a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 18.5v-13A1.5 1.5 0 011.5 4zm.5 3.1v11.4h20V7.1l-10 6.3-10-6.3zM3.2 6l8.8 5.5L20.8 6H3.2z"/>',
    link: '<path d="M10.6 13.4a1 1 0 010-1.4l4.2-4.2a3 3 0 000-4.2 3 3 0 00-4.2 0L6.4 7.8a1 1 0 01-1.4-1.4l4.2-4.2a5 5 0 017 7l-4.2 4.2a1 1 0 01-1.4 0zm-7 7a5 5 0 010-7l4.2-4.2a1 1 0 011.4 1.4l-4.2 4.2a3 3 0 000 4.2 3 3 0 004.2 0l4.2-4.2a1 1 0 011.4 1.4l-4.2 4.2a5 5 0 01-7 0z"/>',
  };

  function icon(name) {
    var path = ICONS[name] || ICONS.link;
    return (
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      path +
      "</svg>"
    );
  }

  /* ---------- Helper ---------- */
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }

  function initial(name) {
    return esc(String(name || "?").trim().charAt(0).toUpperCase());
  }

  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
  }

  var STATUS = {
    done: { label: "Đã hoàn thành", cls: "text-blush-200 border-blush-300/40" },
    ongoing: { label: "Đang diễn ra", cls: "text-emerald-300 border-emerald-400/40" },
    upcoming: { label: "Sắp tới", cls: "text-amber-300 border-amber-400/40" },
  };

  /* ---------- Logo + tên team ---------- */
  function renderBrand() {
    var t = S.team || {};
    var mark = t.logo
      ? '<img src="' +
        esc(t.logo) +
        '" alt="Logo ' +
        esc(t.name) +
        '" class="h-full w-full object-contain" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'text-lg font-bold text-blush-200\',textContent:\'' +
        initial(t.name) +
        '\'}))">'
      : '<span class="text-lg font-bold text-blush-200">' +
        initial(t.name) +
        "</span>";

    document.querySelectorAll("[data-brand]").forEach(function (el) {
      el.innerHTML =
        '<span class="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-ink-800 ring-1 ring-ink-700">' +
        mark +
        "</span>" +
        '<span class="text-lg font-semibold tracking-tight">' +
        esc(t.name) +
        "</span>";
    });

    document.querySelectorAll("[data-team-name]").forEach(function (el) {
      el.textContent = t.name || "";
    });
  }

  /* ---------- Social ---------- */
  function socialList(list, extraClass) {
    return (list || [])
      .map(function (s) {
        return (
          '<a class="social-icon ' +
          (extraClass || "") +
          '" href="' +
          esc(s.url) +
          '" target="_blank" rel="noopener noreferrer" title="' +
          esc(s.name || s.icon) +
          '" aria-label="' +
          esc(s.name || s.icon) +
          '">' +
          icon(s.icon) +
          "</a>"
        );
      })
      .join("");
  }

  function renderSocials() {
    document.querySelectorAll("[data-socials]").forEach(function (el) {
      el.innerHTML = socialList(S.socials);
    });
  }

  /* ---------- Logo lớn ở hero ---------- */
  function renderHeroLogo() {
    var el = document.getElementById("hero-logo");
    if (!el) return;
    var t = S.team || {};

    if (t.logo) {
      el.innerHTML =
        '<img src="' +
        esc(t.logo) +
        '" alt="Logo ' +
        esc(t.name) +
        '" class="h-full w-full object-contain p-4">';
      var img = el.querySelector("img");
      img.addEventListener("error", function () {
        el.innerHTML =
          '<span class="text-6xl font-bold text-blush-200">' +
          initial(t.name) +
          "</span>";
      });
    } else {
      el.innerHTML =
        '<span class="text-6xl font-bold text-blush-200">' +
        initial(t.name) +
        "</span>";
    }
  }

  /* ---------- Trang chủ ---------- */
  function renderHome() {
    var t = S.team || {};
    fill(
      "hero",
      '<h1 class="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">' +
        esc(t.heroPrefix || "Chúng mình là") +
        ' <span class="text-blush-200">' +
        esc(t.name) +
        "</span></h1>" +
        '<p class="mx-auto mt-4 max-w-3xl text-pretty text-base text-neutral-300 sm:mt-5 sm:text-xl">' +
        esc(t.tagline) +
        "</p>" +
        '<div class="rule mx-auto mt-7 w-full max-w-xs sm:mt-8 sm:max-w-md"></div>'
    );

    var sub = document.getElementById("hero-sub");
    if (sub) sub.textContent = t.heroSub || "";

    // 3 project mới nhất cho phần preview ở trang chủ
    fill(
      "home-projects",
      (S.projects || [])
        .slice(0, 3)
        .map(projectCard)
        .join("")
    );
  }

  /* ---------- Project ---------- */
  function cover(p) {
    if (p.cover) {
      return (
        '<img src="' +
        esc(p.cover) +
        '" alt="' +
        esc(p.title) +
        '" loading="lazy" class="h-40 w-full object-cover sm:h-44">'
      );
    }
    return (
      '<div class="grid h-40 w-full place-items-center bg-gradient-to-br from-ink-700 via-ink-800 to-ink-850 sm:h-44">' +
      '<span class="text-3xl font-bold text-neutral-600">' +
      esc(p.title.slice(0, 2).toUpperCase()) +
      "</span></div>"
    );
  }

  function projectCard(p) {
    var st = STATUS[p.status] || STATUS.done;
    return (
      '<article class="card flex flex-col">' +
      cover(p) +
      '<div class="flex flex-1 flex-col p-5">' +
      '<div class="flex flex-wrap items-center gap-2 text-xs">' +
      '<span class="tag">' +
      esc(p.year) +
      "</span>" +
      '<span class="tag ' +
      st.cls +
      '">' +
      st.label +
      "</span></div>" +
      '<h3 class="mt-3 text-lg font-semibold sm:text-xl">' +
      esc(p.title) +
      "</h3>" +
      '<p class="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">' +
      esc(p.summary) +
      "</p>" +
      '<div class="mt-4 flex flex-wrap gap-2">' +
      (p.tags || [])
        .map(function (tag) {
          return '<span class="tag">' + esc(tag) + "</span>";
        })
        .join("") +
      "</div>" +
      (p.link
        ? '<a href="' +
          esc(p.link) +
          '" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blush-200 hover:text-blush-100">Xem chi tiết <span aria-hidden="true">→</span></a>'
        : "") +
      "</div></article>"
    );
  }

  function renderProjects() {
    var grid = document.getElementById("project-grid");
    if (!grid) return;

    var all = S.projects || [];

    function paint(filter) {
      var list =
        filter === "all"
          ? all
          : all.filter(function (p) {
              return p.status === filter;
            });
      grid.innerHTML = list.length
        ? list.map(projectCard).join("")
        : '<p class="col-span-full py-12 text-center text-neutral-500">Chưa có project nào ở mục này.</p>';
    }

    paint("all");

    var bar = document.getElementById("project-filter");
    if (bar) {
      bar.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-filter]");
        if (!btn) return;
        bar.querySelectorAll("[data-filter]").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
        paint(btn.dataset.filter);
      });
    }
  }

  /* ---------- Member ---------- */
  function memberCard(m) {
    var pic = m.avatar
      ? '<img src="' +
        esc(m.avatar) +
        '" alt="' +
        esc(m.name) +
        '" loading="lazy" class="h-20 w-20 rounded-full object-cover ring-2 ring-ink-700 sm:h-24 sm:w-24">'
      : '<div class="grid h-20 w-20 place-items-center rounded-full bg-ink-800 text-2xl font-bold text-blush-200 ring-2 ring-ink-700 sm:h-24 sm:w-24 sm:text-3xl">' +
        initial(m.name) +
        "</div>";

    return (
      '<article class="card flex flex-col items-center p-5 text-center sm:p-6">' +
      pic +
      '<h3 class="mt-4 text-lg font-semibold">' +
      esc(m.name) +
      "</h3>" +
      '<p class="mt-0.5 text-sm font-medium text-blush-200">' +
      esc(m.role) +
      "</p>" +
      '<p class="mt-3 text-sm leading-relaxed text-neutral-400">' +
      esc(m.bio) +
      "</p>" +
      (m.socials && m.socials.length
        ? '<div class="mt-4 flex gap-1">' + socialList(m.socials) + "</div>"
        : "") +
      "</article>"
    );
  }

  function renderMembers() {
    var grid = document.getElementById("member-grid");
    if (!grid) return;
    grid.innerHTML = (S.members || []).map(memberCard).join("");

    var count = document.getElementById("member-count");
    if (count) count.textContent = String((S.members || []).length);
  }

  /* ---------- Liên hệ ---------- */
  function renderContact() {
    var c = S.contact || {};
    var intro = document.getElementById("contact-intro");
    if (intro) intro.textContent = c.intro || "";

    fill(
      "contact-items",
      (c.items || [])
        .map(function (i) {
          return (
            '<article class="card p-6 text-left">' +
            '<h3 class="text-lg font-semibold">' +
            esc(i.title) +
            "</h3>" +
            '<p class="mt-2 text-sm leading-relaxed text-neutral-400">' +
            esc(i.desc) +
            "</p></article>"
          );
        })
        .join("")
    );

    var actions = [];
    if (c.email) {
      actions.push(
        '<a href="mailto:' +
          esc(c.email) +
          '" class="w-full rounded-full bg-blush-200 px-6 py-3 text-center font-semibold text-ink-950 transition hover:bg-blush-100 sm:w-auto">Gửi email cho team</a>'
      );
    }
    if (c.formUrl) {
      actions.push(
        '<a href="' +
          esc(c.formUrl) +
          '" target="_blank" rel="noopener noreferrer" class="w-full rounded-full border border-ink-700 px-6 py-3 text-center font-semibold text-neutral-200 transition hover:border-blush-300 hover:text-blush-200 sm:w-auto">Điền form đăng ký</a>'
      );
    }
    fill("contact-actions", actions.join(""));
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var t = S.team || {};
    document.querySelectorAll("[data-footer-note]").forEach(function (el) {
      el.textContent = t.footerNote || "";
    });
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- Menu mobile ---------- */
  function initMobileMenu() {
    var btn = document.getElementById("menu-btn");
    var panel = document.getElementById("mobile-menu");
    if (!btn || !panel) return;

    var iconOpen = btn.querySelector("[data-icon-open]");
    var iconClose = btn.querySelector("[data-icon-close]");

    function setOpen(open) {
      panel.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      if (iconOpen) iconOpen.classList.toggle("hidden", open);
      if (iconClose) iconClose.classList.toggle("hidden", !open);
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(panel.classList.contains("hidden"));
    });

    // Bấm ra ngoài thì đóng
    document.addEventListener("click", function (e) {
      if (panel.classList.contains("hidden")) return;
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      setOpen(false);
    });

    // Nhấn Esc thì đóng
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    // Quay lại desktop thì reset menu
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) setOpen(false);
    });
  }

  /* ---------- Hiệu ứng hiện dần khi cuộn ---------- */
  function initReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.remove("opacity-0");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-up");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Khởi động ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!window.SITE) {
      console.error("[Jumpin] Không tìm thấy assets/data.js");
      return;
    }
    renderBrand();
    renderSocials();
    renderHeroLogo();
    renderHome();
    renderProjects();
    renderMembers();
    renderContact();
    renderFooter();
    initMobileMenu();
    initReveal();
  });
})();
