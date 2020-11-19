import React from "react";
import "./Calculator.css";

function Calculator() {
  const [displayNumber, setDisplayNumber] = React.useState("0");
  const [wasClickedOrder, setWasClickedOrder] = React.useState([]);

  React.useEffect(() => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log("??", wasClickedOrder);
    if (wasClickedOrder.length > 0) {
      const finalNumber = wasClickedOrder.reduce(reducer);
      setDisplayNumber(finalNumber);
    } else {
      setDisplayNumber(0);
    }
    console.log(wasClickedOrder);
    console.log(displayNumber);
  }, [wasClickedOrder]);

  const clickKeyboard = (ev) => {
    const clickedKeyboard = ev.target.innerText;
    console.log("!!!", wasClickedOrder);
    if (clickedKeyboard.length > 1)
      console.warn("Illegal interaction: muti number coming");

    if (clickedKeyboard === "X") {
      return setWasClickedOrder((currentArray) => {
        return currentArray.slice(0, currentArray.length - 1);
      });
    }

    if (wasClickedOrder.length === 0) {
      console.log("now is 0?", wasClickedOrder);

      if (clickedKeyboard === ".") {
        console.log("0" + clickedKeyboard);
        return setWasClickedOrder(["0", clickedKeyboard]);
      }
      return setWasClickedOrder([clickedKeyboard]);
    }

    if (wasClickedOrder.includes(".")) {
      if (wasClickedOrder.length - wasClickedOrder.indexOf(".") > 2) {
        return console.warn(
          "Two digits after the decimal point are not counted :("
        );
      }

      if (clickedKeyboard === ".") {
        return console.warn("it hasnt two dots in at the same time :(");
      }
    }

    setWasClickedOrder((currentArray) => currentArray.concat(clickedKeyboard));
  };
  return (
    <div className="numberKeyboard">
      <div className="displayNumber">
        <h1>{displayNumber}</h1>
      </div>

      <div className="keyboard" onClick={clickKeyboard}>
        <div className="row">
          <div className="btn ">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
        </div>
        <div className="row">
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
        </div>
        <div className="row">
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
        </div>
        <div className="row">
          <div className="btn">0</div>
          <div className="btn">.</div>
          <div className="btn">X</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
