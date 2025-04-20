const quotes = [
  "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
  "You have to dream before your dreams can come true.",
  "If you want to shine like a sun, first burn like a sun.",
  "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."
];

function generateQuote() {
  const quoteBox = document.getElementById("quoteDisplay");
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.innerText = quotes[random];
}