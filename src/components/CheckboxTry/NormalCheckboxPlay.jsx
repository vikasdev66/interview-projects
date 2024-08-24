export default function NormalCheckboxPlay({
  names,
  checkedIds,
  handleAllChange,
  handleChange,
}) {
  return (
    <div className="App">
      <label htmlFor="selectAll">
        <input
          type="checkbox"
          id="selectAll"
          value="selectAll"
          checked={names.length === checkedIds.length}
          onChange={handleAllChange}
        />
        Select All
      </label>
      {names?.map((name) => {
        return (
          <div key={name}>
            <label htmlFor={name}>
              <input
                type="checkbox"
                id={name}
                value={name}
                checked={checkedIds.includes(name)}
                onChange={handleChange}
              />
              {name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
