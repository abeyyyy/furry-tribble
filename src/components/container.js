
import "../App.css";

function Container({number, heading, body}) {
  return (
    <div className="work-row-inner mt-2 px-2">
        <h3 className="mb-3 pt-4 font-bold text-xl">{heading}</h3>
        <p className="mb-5 font-regular">
            {body}
        </p>

    </div>
  );
}

export default Container;
