/* eslint-disable react/prop-types */
function Input({
  id,
  label,
  value,
  showLabel = true,
  disabled = false,
  handler = null,
}) {
  return (
    <div>
      {showLabel && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        id={id}
        disabled={disabled}
        value={value}
        onChange={handler}
      />
    </div>
  );
}

export default Input;
