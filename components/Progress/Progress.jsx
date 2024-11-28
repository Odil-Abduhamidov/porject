export const Progress = ({ steps, activeStep }) => {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">
          {(100 / steps) * (activeStep - 1)}%
        </span>
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
      </div>
    </div>
  );
};
