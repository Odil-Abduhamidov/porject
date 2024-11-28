/* eslint-disable linebreak-style */
import React from "react";
import {Button, Input} from '../components';

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <Input InputTxt="Ваше имя" InputType="text" InputName="username" InputID="username" InputPlaceholder="Ваш ответ" />
            <Input InputTxt="Ваш номер" InputType="tel" InputName="phone" InputID="phone" InputPlaceholder="+998 9- --- -- -- " InputPattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$" />
            <Button BtnType={'submit'} BtnId={'next-btn'} text ='Далее'/>
          </form>
        </div>
      </div>
    </div>
  );
};
