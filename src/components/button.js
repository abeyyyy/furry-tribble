
import '../App.css';

function Button({text, className, onClick}) {
  return (
    <div className="my-3">
     <button className={`${className} us-head-button`} onClick={onClick}>
      {text}
     </button>
    </div>
  );
}

export default Button;
