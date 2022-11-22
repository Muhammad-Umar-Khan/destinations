import "./Input.css";

const Input = ({
  type = "",
  label = "",
  element = "",
  value = "",
  onblur = () => {},
  onchange = () => {},
  ...props
}) => {
  const inputField =
    element === "input" ? (
      <input
        type={type}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        onBlur={onblur}
        {...props}
      />
    ) : (
      <textarea
        type={type}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        onBlur={onblur}
        {...props}
      />
    );
  return (
    <div className="form-control">
      <span className="label">{label}</span>
      {inputField}
    </div>
  );
};

export default Input;
