// eslint-disable-next-line react/prop-types
function Range({ id, value, handler, min, max }) {
  return (
    <div>
      <label htmlFor={id}>Length is {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        name="range"
        id={id}
        value={value}
        onChange={(e) => handler(e.target.value)}
      />
    </div>
  );
}

export default Range;
