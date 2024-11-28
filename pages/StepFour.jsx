import { Button, Input } from "../components";

import { useState } from "react";

export const StepThree = () => {
  // Массив вариантов для рендеринга
  const variants = [
    {
      id: "variant-1",
      imgSrc: "./img/laugh.png",
      altText: "laugh",
      label: "Ваш ответ 1",
    },
    {
      id: "variant-2",
      imgSrc: "./img/hearts.png",
      altText: "hearts",
      label: "Ваш ответ 2",
    },
    {
      id: "variant-3",
      imgSrc: "./img/smirk.png",
      altText: "smirk",
      label: "Ваш ответ 3",
    },
    {
      id: "variant-4",
      imgSrc: "./img/fright.png",
      altText: "fright",
      label: "Ваш ответ 4",
    },
  ];

  // Состояние для хранения активного шага
  const [activeStep, setActiveStep] = useState(null);

  // Функция для обработки выбора шага
  const handleStepClick = (id) => {
    setActiveStep(id);
  };

  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="emoji-variants">
          {variants.map((variant) => (
            <li
              className={`variant-wrapper ${
                activeStep === variant.id ? "active" : ""
              }`}
              key={variant.id}
              onClick={() => handleStepClick(variant.id)}
            >
              <Input type="radio" name="variant" id={variant.id} />
              <label htmlFor={variant.id}>
                <img src={variant.imgSrc} alt={variant.altText} />
                <p>{variant.label}</p>
              </label>
            </li>
          ))}
        </ul>
        <Button type="button" disabled id="next-btn" text="Далее" />
      </div>
    </div>
  );
};
