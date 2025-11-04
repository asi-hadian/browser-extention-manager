import "./ExtentionList.css";
function ExtentionList(props) {
  return (
    <div className="extentionContainer">
      <h1>Extentions List</h1>
      <div className="buttonsContainer">
        <button onClick={props.AllBtn} className="btn">
          All
        </button>
        <button onClick={props.ActiveBtn} className="btn">
          Active
        </button>
        <button onClick={props.InactiveBtn} className="btn">
          Inactive
        </button>
      </div>
    </div>
  );
}
export default ExtentionList;
