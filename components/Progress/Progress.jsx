import classNames, { className } from "classnames";

export const Progress = ({ steps, activeStep }) => {
  const progress = (100 / steps) * (activeStep - 1) + "%";

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">{progress}</span>
      </div>
      <div className="indicator__progressbar">
        {Array(steps)
          .fill("0")
          .map((_, index) => (
            <div
              className={
                `indicator__unit indicator__unit-${index + 1} ` +
                (index < activeStep ? "_active" : "")
              }
            />
          ))}
        <div>
          className=
          {classNames({
            [`indicator-unit-${index + 1}`]: true,
          })}
        </div>
      </div>
    </div>
  );
};
