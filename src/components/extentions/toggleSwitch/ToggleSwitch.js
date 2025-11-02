import "./ToggleSwitch.css";
function ToggleSwitch({ isOn, onToggle, id }) {
  return (
    <>
      <div className="toggle-container">
        <input
          type="checkbox"
          id={id}
          className="toggle-checkbox"
          checked={isOn}
          onChange={onToggle}
        />
        <label htmlFor={id} className="toggle-label">
          {" "}
        </label>
      </div>
    </>
  );
}
export default ToggleSwitch;
