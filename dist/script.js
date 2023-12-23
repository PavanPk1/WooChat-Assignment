const { Component, useState } = React;
const { render } = ReactDOM;

// Counter Component
function Counter({ value, onIncrement, onDecrement }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "counter" }, /*#__PURE__*/
    React.createElement("b", null, value), /*#__PURE__*/
    React.createElement("div", { className: "counter-controls" }, /*#__PURE__*/
    React.createElement("button", {
      className: "button is-danger is-small",
      onClick: () => onDecrement(1) }, "-"), /*#__PURE__*/



    React.createElement("button", {
      className: "button is-success is-small",
      onClick: () => onIncrement(1) }, "+"))));






}

// Total Component
function Total({ values }) {
  const total = values.reduce((acc, currentValue) => acc + currentValue, 0);
  return /*#__PURE__*/React.createElement("div", { className: "total" }, "Total: ", total);
}

function App() {
  // Move the data array to the component state
  const [counters, setCounters] = useState([
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 } // Added a fourth counter
  ]);

  // Callbacks to update counter values
  const handleIncrement = (id, amount) => {
    setCounters((prevCounters) =>
    prevCounters.map((counter) =>
    counter.id === id ?
    { ...counter, value: counter.value + amount } :
    counter));


  };

  const handleDecrement = (id, amount) => {
    setCounters((prevCounters) =>
    prevCounters.map((counter) =>
    counter.id === id ?
    { ...counter, value: counter.value - amount } :
    counter));


  };

  return /*#__PURE__*/(
    React.createElement("div", null,
    counters.map((counter) => /*#__PURE__*/
    React.createElement(Counter, {
      key: counter.id,
      value: counter.value,
      onIncrement: amount => handleIncrement(counter.id, amount),
      onDecrement: amount => handleDecrement(counter.id, amount) })), /*#__PURE__*/


    React.createElement(Total, { values: counters.map(counter => counter.value) })));


}

render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));