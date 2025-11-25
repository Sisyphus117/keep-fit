function Selector({ options, onChange, className }) {
  return (
    <select className={`my-5 ${className}`} onChange={onChange}>
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
