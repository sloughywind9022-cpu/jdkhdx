const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggle.onclick = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
};

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
});

btn.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.getElementById("theme-toggle").onclick = () => {
  const root = document.documentElement;
  root.dataset.theme =
    root.dataset.theme === "dark" ? "light" : "dark";
};
