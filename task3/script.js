const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const quotes = [
  { text: "პროგრამირება არის ხელოვნება, რომელიც გასწავლის ფიქრს.", author: "სტივ ჯობსი" },
  { text: "კოდი უნდა იყოს დაწერილი ისე, რომ ადამიანმა მარტივად გაიგოს.", author: "მარტინ ფაულერი" },
  { text: "ნუ გეშინია შეცდომების, გეშინოდეს ერთ ადგილზე დგომის.", author: "ხალხური სიბრძნე" }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
}

newQuoteBtn.addEventListener("click", getRandomQuote);