
import "../App.css";

function Box(props) {
  return (
    <div className="box_edit my-10">
  <div className="center-image">  <img src={props.image} alt="" className="text-center" /></div>
    <p className="text-2xl font-extrabold text-cyan-900">{props.text}</p>
    <p className="text-lg font-bold mb-3 text-cyan-900">{props.subText}</p>
    </div>
  );
}

export default Box;
