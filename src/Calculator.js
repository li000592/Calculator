import React from "react";
import "./Calculator.css";

function Calculator() {
  const [displayNumber, setDisplayNumber] = React.useState(0);
  const [wasClickedOrder, setWasClickedOrder] = React.useState([]);

  React.useEffect(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (wasClickedOrder.length > 0) {
      const finalNumber = wasClickedOrder.reduce(reducer);
      console.log(wasClickedOrder.length);
      setDisplayNumber(finalNumber);
    }
    console.log("wasClickedOrder===>", wasClickedOrder);
  }, [wasClickedOrder]);

  const clickKeyboard = (ev) => {
    const clickedNumber = ev.target.innerText;

    if (clickedNumber === "X") {
      setWasClickedOrder((currentArray) => {
        return currentArray.slice(0, currentArray.length - 1);
      });
    } else {
      console.log(wasClickedOrder.indexOf("."));
      if (
        wasClickedOrder.includes(".") &&
        wasClickedOrder.length - wasClickedOrder.indexOf(".") > 2
      ) {
        console.log("Two digits after the decimal point are not counted :(");
        return;
      } else {
        setWasClickedOrder((currentArray) =>
          currentArray.concat(clickedNumber)
        );
      }
    }
  };
  return (
    <div>
      <div className="displayNumber">
        <h1>{displayNumber}</h1>
      </div>

      <div className="keyboard" onClick={clickKeyboard}>
        <div className="1stRow row">
          <div className="1stColumn btn ">1</div>
          <div className="2ndColumn btn">2</div>
          <div className="3rdColumn btn">3</div>
        </div>
        <div className="2ndRow row">
          <div className="1stColumn btn">4</div>
          <div className="2ndColumn btn">5</div>
          <div className="3rdColumn btn">6</div>
        </div>
        <div className="3rdRow row">
          <div className="1stColumn btn">7</div>
          <div className="2ndColumn btn">8</div>
          <div className="3rdColumn btn">9</div>
        </div>
        <div className="4thRow row">
          <div className="1stColumn btn">0</div>
          <div className="2ndColumn btn">.</div>
          <div className="3rdColumn btn">X</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
