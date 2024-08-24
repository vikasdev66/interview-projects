export default function EventDelegation({ names, checkedIds, handleDivClick }) {
  return (
    <div className="App" onChange={handleDivClick}>
      <label htmlFor="selectAll">
        <input
          type="checkbox"
          id="selectAll"
          value="selectAll"
          checked={names.length === checkedIds.length}
        />
        Select All
      </label>
      {names.map((name) => {
        return (
          <div key={name}>
            <label htmlFor={name}>
              <input
                type="checkbox"
                id={name}
                value={name}
                checked={checkedIds.includes(name)}
              />
              {name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
