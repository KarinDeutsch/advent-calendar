
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
    freeLink: "https://yourblog.com/day1",
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

// ---- Main Preview Modal ----
const modalHtml = `
<div id="ig-modal" class="ig-modal" inert aria-hidden="true">
  <div class="ig-modal-card" role="dialog" aria-modal="true">
    <button class="ig-close" aria-label="Close">&times;</button>
    <div class="ig-media">
      <img id="ig-modal-img" src="" alt="Free content">
    </div>
    <div class="ig-caption">
      <p class="ig-caption-text">Enjoy this free preview — want the full PDF?</p>
      <a id="ig-buy-btn" class="ig-buy" target="_blank" rel="noopener">Get the full PDF</a>
    </div>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalHtml);

const modal = document.getElementById('ig-modal');
const modalImg = document.getElementById('ig-modal-img');
const modalBuyBtn = document.getElementById('ig-buy-btn');
const modalClose = document.querySelector('.ig-close');

function openModal(imageSrc, currentItem) {
  modalImg.src = imageSrc;
  modal.currentItem = currentItem;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  setTimeout(() => modalImg.src = '', 300);
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

// ---- Choice Modal ----
const choiceModalHtml = `
<div id="choice-modal" class="choice-modal" aria-hidden="true">
  <div class="choice-modal-card">
    <button class="choice-close" aria-label="Close">&times;</button>
    <h2>Choose Your Gift</h2>
    <div class="choice-buttons">
      <a id="choice-free-btn" class="choice-button free" target="_blank" rel="noopener">🎁 Free Content</a>
      <a id="choice-premium-btn" class="choice-button premium" target="_blank" rel="noopener">💎 Premium Content (go to store)</a>
    </div>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', choiceModalHtml);

const choiceModal = document.getElementById("choice-modal");
const choiceFreeBtn = document.getElementById("choice-free-btn");
const choicePremiumBtn = document.getElementById("choice-premium-btn");
const choiceClose = document.querySelector(".choice-close");

function openChoiceModal(freeLink, premiumLink) {
  choiceFreeBtn.href = freeLink || "#";
  choicePremiumBtn.href = premiumLink || "#";
  choiceModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => choiceModal.classList.add("open"));
}

function closeChoiceModal() {
  choiceModal.classList.remove("open");
  choiceModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}
choiceClose.addEventListener("click", closeChoiceModal);
choiceModal.addEventListener("click", (e) => {
  if (e.target === choiceModal) closeChoiceModal();
});

// ---- Build Calendar UI ----
days.forEach(item => {
  const box = document.createElement("div");
  box.className = "day";
  box.dataset.day = item.day;

  const content = document.createElement("div");
  content.className = "content";
  content.innerHTML = `<img class="thumb" src="${item.thumb}" alt="Day ${item.day} thumbnail" />`;
  box.appendChild(content);

  if (!openedDays.includes(item.day)) {
    const door = document.createElement("div");
    door.className = "door";
    door.textContent = item.day;
    if (item.day > TODAY) box.classList.add("locked");
    box.appendChild(door);

    box.addEventListener("click", () => {
      if (item.day > TODAY) {
        door.animate([{
          transform: 'translateY(0)'
        }, {
          transform: 'translateY(-6px)'
        }, {
          transform: 'translateY(0)'
        }], {
          duration: 180
        });
        return;
      }
      box.classList.add("open");
      if (!openedDays.includes(item.day)) {
        openedDays.push(item.day);
        localStorage.setItem("openedDays", JSON.stringify(openedDays));
      }
      setTimeout(() => {
        if (door.parentNode) door.remove();
      }, 620);
    });
  } else {
    box.classList.add("open");
    const existingDoor = box.querySelector('.door');
    if (existingDoor) existingDoor.remove();
  }

  content.addEventListener('click', (e) => {
    if (box.classList.contains('locked')) return;
    const thumb = e.target.closest('.thumb');
    if (!thumb) return;

    // ---- Step 1: open full-size image modal ----
    openModal(item.freeImage, item.premiumLink);

    // ---- Step 2: store current item globally for modal click ----
    modal.currentItem = item;
  });

  modalImg.addEventListener('click', () => {
    const item = modal.currentItem;
    if (!item) return;

    if (item.type === "choice") {
        closeModal(); // optional: close full-size first
        openChoiceModal(item.freeLink, item.premiumLink);
    } else if (item.type === "auto") {
        closeModal(); // optional
        window.open(item.premiumLink, "_blank");
    }
});

  calendarEl.appendChild(box);
});

// ---- Music + Dark Mode ----
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
}, {
  once: true
});

darkBtn.addEventListener("click", () => {
  if (document.activeElement) document.activeElement.blur(); // remove focus
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});