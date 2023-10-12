const quotes = [
    {
     quote: "황금별이 떨어질때면 세상을 향해서 여행을 떠나야해 \n",
     author: " - 모차르트",
    },
    {
        quote: "니가 말해주는 미래가 내 앞에 펼쳐지지 않는다 하여도, 어차피 그날의 너를 만나지 못했다면 다시 사는 인생도 없었을거야 \n",
        author: " - 프랑켄슈타인",
    },
    {
        quote:"한계는 무너졌어 내 길을 갈거야. 시도하기 전에 그 누구도 알 수 없어. \n",
        author:" - 위키드",
    },
    
];

const span = document.getElementById("quote");
const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

span.style.color = "black";
span.style.fontSize = "1.5em";
span.style.display = "flex";
span.style.alignItems = "center";
span.style.justifyContent = "center";
