// ================= FAST & SMOOTH BANNER ROTATION + DOTS + SWIPE =================
document.addEventListener("DOMContentLoaded", () => {
  const bannerSections = document.querySelectorAll('.must-have-products');

  bannerSections.forEach(section => {
    const banners = section.querySelectorAll('.banner-img');
    let current = 0;

    // Create Dots Container
    const dotsContainer = document.createElement("div");
    dotsContainer.style.textAlign = "center";
    dotsContainer.style.marginTop = "10px";

    banners.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.style.display = "inline-block";
      dot.style.width = "9px";
      dot.style.height = "9px";
      dot.style.borderRadius = "50%";
      dot.style.margin = "0 5px";
      dot.style.cursor = "pointer";
      dot.style.background = index === 0 ? "#111" : "#bbb";
      dot.dataset.index = index;

      dot.addEventListener("click", () => {
        current = index;
        rotate();
      });

      dotsContainer.appendChild(dot);
    });

    section.appendChild(dotsContainer);

    function updateDots() {
      const dots = dotsContainer.querySelectorAll("span");
      dots.forEach((dot, index) => {
        dot.style.background = index === current ? "#111" : "#bbb";
      });
    }

    function rotate() {
      banners.forEach(img => img.classList.remove('active'));
      banners[current].classList.add('active');
      updateDots();
      current = (current + 1) % banners.length;
    }

    rotate(); // Start immediately
    const interval = setInterval(rotate, 3200); // Change image every 3.2 seconds


    // ================= SWIPE SUPPORT =================
    let startX = 0;

    section.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    section.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) { // swipe left
        rotate();
      } else if (endX - startX > 50) { // swipe right
        current = (current - 2 + banners.length) % banners.length;
        rotate();
      }
    });

    // Desktop drag support
    section.addEventListener("mousedown", (e) => startX = e.clientX);
    section.addEventListener("mouseup", (e) => {
      const endX = e.clientX;
      if (startX - endX > 50) rotate();
      else if (endX - startX > 50) {
        current = (current - 2 + banners.length) % banners.length;
        rotate();
      }
    });
  });
});
// =================================================================


// ================= MODAL / LOGIN / REGISTER UI =================
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const closeModal = document.getElementById('closeModal');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const toLogin = document.getElementById('toLogin');
const toRegister = document.getElementById('toRegister');

function openModal(form) {
  modalOverlay.style.display = 'flex';
  modalBox.classList.add('show');

  if (form === 'register') {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  } else {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  }
}

function closeModalFunc() {
  modalBox.classList.remove('show');
  setTimeout(() => modalOverlay.style.display = 'none', 300);
}

registerBtn.addEventListener('click', () => openModal('register'));
loginBtn.addEventListener('click', () => openModal('login'));
closeModal.addEventListener('click', closeModalFunc);
toLogin.addEventListener('click', () => openModal('login'));
toRegister.addEventListener('click', () => openModal('register'));

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModalFunc();
});




// BUNDLE MEGA
// BUNDLE MEGA
// BUNDLE MEGA

document.querySelectorAll(".categories .cat").forEach(cat => {
  cat.addEventListener("click", () => {
    const category = cat.querySelector(".title").textContent.trim();
    window.location.href = `allproductslisting.html?category=${encodeURIComponent(category)}`;
  });
});


document.querySelectorAll(".categories .cat").forEach(cat => {
  cat.addEventListener("click", () => {
    const category = cat.querySelector(".title").textContent.trim();
    window.location.href = `allproductslisting.html?category=${encodeURIComponent(category)}`;
  });
});


document.querySelectorAll('.mega .col a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // stop default # behavior
    const category = link.textContent.trim();
    window.location.href = `allproductslisting.html?category=${encodeURIComponent(category)}`;
  });
});



// BUNDLE MEGA
// BUNDLE MEGA
// BUNDLE MEGA MEGA
