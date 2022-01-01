function PrimaryBtn({ text, type, classes, handler }) {
  if (type) {
    return <button type={type}>{text}</button>;
  }
  return (
    <button className={classes} onClick={handler}>
      {text}
    </button>
  );
}

export default PrimaryBtn;
