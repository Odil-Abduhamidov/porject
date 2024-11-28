/* eslint-disable linebreak-style */
import React from "react";
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
        <h2>3. Занимательный вопрос</h2>
        <ul className="emoji-variants">
          {/* Динамическое создание списка с помощью map */}
          {variants.map((variant) => (
            <li
              className={`variant-wrapper ${
                activeStep === variant.id ? "active" : ""
              }`} // Условный класс для активного шага
              key={variant.id}
              onClick={() => handleStepClick(variant.id)} // Обработчик клика по шагу
            >
              <Input
                InputType="radio"
                InputName="variant"
                InputID={variant.id}
              />
              <label htmlFor={variant.id}>
                <img src={variant.imgSrc} alt={variant.altText} />
                <p>{variant.label}</p>
              </label>
            </li>
          ))}
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
