import React from "react";
import { useNavigate } from "react-router";
import { Button, Input } from "../components";

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form
            className="welcome__form"
            onSubmit={(e) => {
              e.preventDefault();
              Navigate("step/1");
            }}
          >
            <Input
              label="Ваше имя"
              type="text"
              name="username"
              id="username"
              InputPlaceholder="Ваш ответ"
            />
            <Input
              label="Ваш номер"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- -- "
            />
            <Button type={"submit"} id={"next-btn"} text="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};
