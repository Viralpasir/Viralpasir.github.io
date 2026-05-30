document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // IMAGE ABOUT - TYPING TEXT
  // =========================
  const texts = [
    "Supplier Pasir Di Jabodetabek",
    "Supplier Batu Di Jabodetabek",
    "Pelayanan 24 Jam Nonstop",
    "Pengiriman 24 Jam Nonstop",
    "Gratis Ongkos Kirim",
    "Gratis Bongkar Muat",
    "Melayani Pembayaran COD",
  ];

  const typingText = document.getElementById("ia-4");

  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (!typingText) return;

    if (charIndex < texts[textIndex].length) {
      typingText.innerHTML += texts[textIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeEffect, 70);
    } else {
      setTimeout(() => {
        eraseEffect();
      }, 5000);
    }
  }

  function eraseEffect() {
    if (!typingText) return;

    if (typingText.innerHTML.length > 0) {
      typingText.innerHTML = typingText.innerHTML.slice(0, -1);

      setTimeout(eraseEffect, 40);
    } else {
      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }

      charIndex = 0;

      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // =========
  // DARK MODE
  // =========
  const body = document.body;
  const themeToggle = document.querySelector(".head-5");
  const themeIcon = themeToggle?.querySelector("i");

  function setTheme(isDark) {
    body.classList.toggle("dark", isDark);

    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", isDark);
      themeIcon.classList.toggle("fa-sun", !isDark);
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  function loadTheme() {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme === "dark");
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }

  loadTheme();

  themeToggle?.addEventListener("click", () => {
    setTheme(!body.classList.contains("dark"));
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches);
      }
    });

  // ==================
  // NAVBAR ACTIVE LINK
  // ==================
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-7").forEach((link) => {
    const href = link.getAttribute("href");

    link.classList.remove("nav-8");

    if (
      (currentPath === "/" || currentPath.endsWith("/index.html")) &&
      href === "/index.html"
    ) {
      link.classList.add("nav-8");
    }

    if (currentPath.endsWith("/about.html") && href === "/about.html") {
      link.classList.add("nav-8");
    }

    if (currentPath.endsWith("/produk.html") && href === "/produk.html") {
      link.classList.add("nav-8");
    }

    if (currentPath.endsWith("/harga.html") && href === "/harga.html") {
      link.classList.add("nav-8");
    }

    if (currentPath.endsWith("/blog.html") && href === "/blog.html") {
      link.classList.add("nav-8");
    }
  });

  // =======================
  // NAVBAR BLUR ON SCROLL
  // =======================
  const nav = document.querySelector(".nav-1");

  window.addEventListener("scroll", () => {
    nav?.classList.toggle("scrolled", window.scrollY > 50);
  });

  // ====================
  // NAVBAR RESPONSIVE
  // ====================
  const toggle = document.querySelector(".nav-5");
  const menu = document.querySelector(".nav-6");

  toggle?.addEventListener("click", () => {
    menu?.classList.toggle("show");

    toggle.querySelector("i")?.classList.toggle("fa-bars");

    toggle.querySelector("i")?.classList.toggle("fa-xmark");
  });

  // =========
  // CAROUSEL
  // =========
  const slides = document.querySelectorAll(".cl-3");

  let index = 0;

  const SLIDE_DURATION = 12000;

  function showSlide(i) {
    slides.forEach((slide) => {
      slide.classList.remove("active");

      // reset zoom animation
      const img = slide.querySelector("img");

      if (img) {
        img.style.animation = "none";

        img.offsetHeight;

        img.style.animation = "";
      }

      slide.querySelector(".cl-5")?.blur();
    });

    slides[i]?.classList.add("active");
  }

  if (slides.length > 0) {
    showSlide(0);

    setInterval(() => {
      index = (index + 1) % slides.length;

      showSlide(index);
    }, SLIDE_DURATION);
  }
});
