import { useState } from 'react'

function HeroItem({ content, i }): JSX.Element {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <li className="py-5 cursor-pointer" onClick={increaseScore}>
      <div className="text-sm leading-6 font-extrabold">
        {i + 1}. {content}, Score: {score}
      </div>
    </li>
  );
}

export default HeroItem;