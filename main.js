document.addEventListener('DOMContentLoaded', () => {
  const numbersContainer = document.getElementById('numbers-container');
  const generateBtn = document.getElementById('generate-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  // Load theme from localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.dataset.theme = currentTheme;
  }

  generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
      lottoNumbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
      const circle = document.createElement('div');
      circle.classList.add('number');
      circle.textContent = number;
      circle.style.backgroundColor = getColor(number);
      numbersContainer.appendChild(circle);
    });
  });

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.body.dataset.theme;
    if (theme === 'dark') {
      theme = 'light';
    } else {
      theme = 'dark';
    }
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  });

  function getColor(number) {
    if (number <= 10) return '#f44336';
    if (number <= 20) return '#ff9800';
    if (number <= 30) return '#ffc107';
    if (number <= 40) return '#4caf50';
    return '#2196f3';
  }
});
