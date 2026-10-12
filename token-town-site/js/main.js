const copyButton = document.querySelector('#copyCode');
const code = document.querySelector('#referralCode')?.textContent.trim();
const copyMessage = document.querySelector('#copyMessage');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(code);
    copyButton.innerHTML = 'Copied! <span>✦</span>';
    copyMessage.textContent = 'Nice. The code is now living rent-free in your clipboard.';
  } catch {
    copyMessage.textContent = `Copy failed — the code is ${code}. Tiny paper note recommended.`;
  }
  setTimeout(() => {
    copyButton.innerHTML = 'Copy code <span>⧉</span>';
    copyMessage.textContent = 'Redeem it in Settings within 48 hours. No confetti cannon required.';
  }, 3500);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
