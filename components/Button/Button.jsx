export const Button = ({ text, BtnType, BtnId }) => {
  return (
    <button type={BtnType} id={BtnId}>
      {text}
    </button>
  );
};
