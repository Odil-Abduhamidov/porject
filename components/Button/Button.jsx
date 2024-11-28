export const Button = ({ text, type, id }) => {
  return (
    <button type={type} id={id}>
      {text}
    </button>
  );
};
