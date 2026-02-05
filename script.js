const reasons = [
  "Your smile makes my whole day better 😍",
  "You always know how to make me laugh 😂",
  "I love how kind and thoughtful you are 💖",
  "You make even boring days feel special ✨",
  "Your hugs feel like home 🤗",
  "I admire how passionate you are about the things you love 🌟",
  "You support me in ways you don’t even realize 💕",
  "I love how safe and happy I feel with you 🫶",
  "You inspire me to be my best self 💪",
  "Because life is just better with you in it ❤️"
];

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

function showReason(index) {
  modalText.textContent = reasons[index];
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}
