const { Component, useState } = React;
const { render } = ReactDOM;

// Counter Component
function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button
          className="button is-danger is-small"
          onClick={() => onDecrement(1)}
        >
          -
        </button>
        <button
          className="button is-success is-small"
          onClick={() => onIncrement(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

// Total Component
function Total({ values }) {
  const total = values.reduce((acc, currentValue) => acc + currentValue, 0);
  return <div className="total">Total: {total}</div>;
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
        counter.id === id
          ? { ...counter, value: counter.value + amount }
          : counter
      )
    );
  };

  const handleDecrement = (id, amount) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, value: counter.value - amount }
          : counter
      )
    );
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          onIncrement={(amount) => handleIncrement(counter.id, amount)}
          onDecrement={(amount) => handleDecrement(counter.id, amount)}
        />
      ))}
      <Total values={counters.map((counter) => counter.value)} />
    </div>
  );
}

render(<App />, document.querySelector("#root"));
