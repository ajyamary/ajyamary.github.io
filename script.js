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
