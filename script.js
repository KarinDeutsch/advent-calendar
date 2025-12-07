
const TODAY = new Date().getDate();
const calendarEl = document.querySelector(".calendar");

// Load opened days from localStorage safely
let openedDays = [];
try {
  openedDays = JSON.parse(localStorage.getItem("openedDays")) || [];
} catch {
  openedDays = [];
}

// Build days array
const days = [{
    day: 1,
    thumb: `assets/thumbnails/day1_thumb.jpg`,
    freeImage: `assets/free/day1_free.jpg`,
    type: "choice",
    freeLink: "https://goldeneggtech.wordpress.com/2025/12/01/top-3-free-coding-playgrounds-to-practice-instantly-beginner-friendly-guide/",
    premiumLink: "https://your-payhip.com/item-day-1"
  },
  {
    day: 2,
    thumb: `assets/thumbnails/day2_thumb.jpg`,
    freeImage: `assets/free/day2_free.jpg`,
    type: "choice",
    freeLink: "https://yourblog.com/day2",
    premiumLink: "https://your-payhip.com/item-day-2"
  },
  {
    day: 3,
    thumb: `assets/thumbnails/day3_thumb.jpg`,
    freeImage: `assets/free/day3_free.jpg`,
    type: "choice",
    freeLink: "https://yourblog.com/day3",
    premiumLink: "https://your-payhip.com/item-day-3"
  },
  {
    day: 4,
    thumb: `assets/thumbnails/day4_thumb.jpg`,
    freeImage: `assets/free/day4_free.jpg`,
    type: "choice",
    freeLink: "https://yourblog.com/day4",
    premiumLink: "https://your-payhip.com/item-day-4"
  },
  {
    day: 5,
    thumb: `assets/thumbnails/day5_thumb.jpg`,
    freeImage: `assets/free/day5_free.jpg`,
    type: "choice",
    freeLink: "https://yourblog.com/day5",
    premiumLink: "https://your-payhip.com/item-day-5"
  },
  {
    day: 6,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 7,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 8,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 9,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 10,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 11,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 12,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 13,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 14,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 15,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 16,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 17,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 18,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 19,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 20,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 21,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 22,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 23,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  },
  {
    day: 24,
    thumb: `assets/thumbnails/day6_thumb.jpg`,
    freeImage: `assets/free/day6_free.jpg`,
    type: "auto",
    freeLink: null,
    premiumLink: "https://your-payhip.com/item-day-6"
  }
];

// --- Modal elements ---
const igModal = document.getElementById("ig-modal");
const igModalImg = document.getElementById("ig-modal-img");
const modalToast = document.getElementById("modal-toast");

const choiceModal = document.getElementById("choice-modal");
const choiceClose = document.getElementById("choice-close");
const choiceFreeBtn = document.getElementById("choice-free");
const choicePremiumBtn = document.getElementById("choice-premium");

// --- Helpers: open/close IG (preview) modal ---
function openIgModal(imageSrc, item) {
  igModalImg.src = imageSrc || "";
  igModal.currentItem = item; // store entire item for later
  igModal.classList.add("open");
  igModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  // show toast (keep until close)
  modalToast.setAttribute("aria-hidden", "false");
  modalToast.classList.add("show");
}

function closeIgModal() {
  igModal.classList.remove("open");
  igModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  modalToast.setAttribute("aria-hidden", "true");
  modalToast.classList.remove("show");
  // clear image after short delay for nice animation
  setTimeout(() => { igModalImg.src = ""; delete igModal.currentItem; }, 220);
}

// --- Helpers: open/close choice modal ---
function openChoiceModal(item) {
  if (item && item.freeLink) {
    choiceFreeBtn.style.display = "block";
    choiceFreeBtn.href = item.freeLink;
  } else {
    choiceFreeBtn.style.display = "none";
  }

  if (item && item.premiumLink) {
    choicePremiumBtn.style.display = "block";
    choicePremiumBtn.href = item.premiumLink;
  } else {
    choicePremiumBtn.style.display = "none";
  }

  choiceModal.classList.add("open");
  choiceModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeChoiceModal() {
  choiceModal.classList.remove("open");
  choiceModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

// --- Build calendar ---
days.forEach(item => {
  const box = document.createElement("div");
  box.className = "day";
  box.dataset.day = item.day;

  const content = document.createElement("div");
  content.className = "content";
  content.innerHTML = `<img class="thumb" src="${item.thumb}" alt="Day ${item.day} thumbnail" />`;

  // If already opened (persisted), show open
  if (openedDays.includes(item.day)) {
    box.classList.add("open");
  } else {
    // create door only if not opened
    const door = document.createElement("div");
    door.className = "door";
    door.textContent = item.day;
    if (item.day > TODAY) box.classList.add("locked");
    box.appendChild(door);

    // door click opens the door (and persists)
    door.addEventListener("click", (e) => {
      e.stopPropagation();
      if (item.day > TODAY) {
        door.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }], { duration: 180 });
        return;
      }
      box.classList.add("open");
      if (!openedDays.includes(item.day)) {
        openedDays.push(item.day);
        localStorage.setItem("openedDays", JSON.stringify(openedDays));
      }
      setTimeout(() => { if (door.parentNode) door.remove(); }, 620);
    });
  }

  // Append content last so it sits under door visually when closed.
  box.appendChild(content);

  // When the thumbnail content is clicked:
  content.addEventListener("click", (e) => {
    e.stopPropagation();
    if (box.classList.contains("locked")) return;
    const thumb = e.target.closest(".thumb");
    if (!thumb) return;

    // mark opened if not yet
    if (!openedDays.includes(item.day)) {
      openedDays.push(item.day);
      localStorage.setItem("openedDays", JSON.stringify(openedDays));
      // remove any door element and add .open class
      const doorEl = box.querySelector(".door");
      if (doorEl) doorEl.remove();
      box.classList.add("open");
    }

    // open the big preview image (freeImage)
    openIgModal(item.freeImage, item);
  });

  calendarEl.appendChild(box);
});

// --- Click on big image: open choice modal or open premium if auto/no freeLink ---
igModalImg.addEventListener("click", (e) => {
  e.stopPropagation();
  const item = igModal.currentItem;
  if (!item) return;

  // If no free link or type auto -> go directly to premium
  if (!item.freeLink || item.type === "auto") {
    if (item.premiumLink) {
      // open in new tab and close preview
      window.open(item.premiumLink, "_blank");
      closeIgModal();
    }
    return;
  }

  // Otherwise (freeLink exists) -> close preview and open choice modal
  closeIgModal();
  openChoiceModal(item);
});

// --- Close modals on outside clicks ---
igModal.addEventListener("click", (e) => {
  if (e.target === igModal) closeIgModal();
});
choiceModal.addEventListener("click", (e) => {
  if (e.target === choiceModal) closeChoiceModal();
});

// choice close button
choiceClose.addEventListener("click", closeChoiceModal);

// ESC handling: close topmost first (choice -> preview)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (choiceModal.classList.contains("open")) {
      closeChoiceModal();
    } else if (igModal.classList.contains("open")) {
      closeIgModal();
    }
  }
});

// ---------------------------
// Music & Dark Mode (unchanged)
// ---------------------------
const musicBtn = document.getElementById("music-toggle");
const darkBtn = document.getElementById("dark-toggle");
const music = document.getElementById("christmas-music");

music.play().catch(() => {});
let musicOn = true;
musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  if (musicOn) {
    music.play();
    musicBtn.textContent = "🎵 Music On";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Music Off";
  }
});
document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });

darkBtn.addEventListener("click", () => {
  if (document.activeElement) document.activeElement.blur();
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
