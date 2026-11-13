'use strict';

const shareButton = document.getElementById('share-card');
const feedback = document.getElementById('feedback');
let feedbackTimer;

function showFeedback(message) {
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.add('visible');
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => feedback.classList.remove('visible'), 3500);
}

async function shareCard() {
  const shareData = {
    title: 'ESMEL AMARY JEAN-YVES — Data, IA & Transformation numérique',
    text: 'Découvrez ma carte de visite professionnelle.',
    url: window.location.href.split('#')[0]
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
      // Not all browsers can share the supplied URL; fall back to a copy.
    }
  }

  try {
    await navigator.clipboard.writeText(shareData.url);
    showFeedback('Lien de la carte copié !');
  } catch (_error) {
    // Clipboard is often unavailable outside HTTPS. The site will use HTTPS on GitHub Pages.
    window.prompt('Copiez le lien de la carte :', shareData.url);
  }
}

if (shareButton) shareButton.addEventListener('click', shareCard);

// Estimates, not guarantees. 4-week months and 52-week years are intentional.
function computeSavings(people, hours, hourlyValue) {
  const p = Math.min(10000, Math.max(1, Number(people) || 1));
  const h = Math.min(168, Math.max(0, Number(hours) || 0));
  const r = Math.min(1000000, Math.max(0, Number(hourlyValue) || 0));
  const weeklyHours = p * h;
  return { monthlyHours: weeklyHours * 4, monthlyValue: weeklyHours * r * 4, yearlyValue: weeklyHours * r * 52 };
}

const savingsInputs = ['calc-people', 'calc-hours', 'calc-rate'].map(id => document.getElementById(id));
const savingsTime = document.getElementById('calc-time');
const savingsMonth = document.getElementById('calc-month');
const savingsYear = document.getElementById('calc-year');
const numberFR = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 });
const moneyFR = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });

function refreshSavings() {
  if (!savingsInputs.every(Boolean) || !savingsTime || !savingsMonth || !savingsYear) return;
  const result = computeSavings(...savingsInputs.map(input => input.value));
  savingsTime.textContent = numberFR.format(result.monthlyHours) + ' h';
  savingsMonth.textContent = moneyFR.format(result.monthlyValue) + ' FCFA';
  savingsYear.textContent = moneyFR.format(result.yearlyValue) + ' FCFA';
}
savingsInputs.forEach(input => { if (input) input.addEventListener('input', refreshSavings); });
refreshSavings();
