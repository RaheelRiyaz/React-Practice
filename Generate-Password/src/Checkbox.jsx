// eslint-disable-next-line react/prop-types
function CheckBox({ id, checked, onChangeHandler }) {
  return (
    <div>
      <label htmlFor={id}>Allow {id}</label>
      <input
        type="checkbox"
        name="alphabets"
        id={id}
        checked={checked}
        onChange={() => {
          onChangeHandler(!checked);
        }}
      />
    </div>
  );
}

export default CheckBox;
