function Selector({
  id = "",
  options,
  onChange,
  className = "",
  ...restProps
}) {
  return (
    <select
      id={id}
      className={`my-5 ${className}`}
      onChange={onChange}
      {...restProps}
    >
      {options.map((option) => (
        <option value={option.key} key={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

// option{
//   key:key,
//   value:value
// }

export default Selector;
