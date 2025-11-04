import "./ExtentionCard.css";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

function ExtentionCard(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="logoDesc">
          <div className="img">
            <img src={props.logo} alt="" />
          </div>
          <div className="desc">
            <h3>{props.name}</h3>
            <p>{props.description}.</p>
          </div>
        </div>

        <div className="buttons">
          <button onClick={props.onRemove} className="removeBtn">
            Remove
          </button>
          <ToggleSwitch
            isOn={props.isActive}
            onToggle={props.onToggle}
            id={`toggle-${props.name}`} // برای ارتباط label با input
          />
        </div>
      </div>
    </div>
  );
}

export default ExtentionCard;
