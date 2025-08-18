// src/components/Quote.jsx
import { useState } from "react";

const quotes = [
  "삶이 있는 한 희망은 있다. – 키케로",
  "행복은 습관이다. 그것을 몸에 지녀라. – 허버드",
  "성공은 최선을 다한 자의 것이다. – 존 우든",
  "오늘 할 수 있는 일을 내일로 미루지 말라. – 벤자민 프랭클린",
  "시작이 반이다. – 아리스토텔레스"
];

function Quote() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote">
      <h2>💡 오늘의 명언</h2>
      <p>{quote}</p>
      <button onClick={getRandomQuote}>다른 명언 보기</button>
    </div>
  );
}

export default Quote;
