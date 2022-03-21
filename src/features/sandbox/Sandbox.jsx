import React from "react";
import Container from "../../app/layout/Container";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testReducer";

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <button
        style={{ width: 60, marginRight: 5 }}
        onClick={() => dispatch({ type: INCREMENT_COUNTER })}
      >
        +
      </button>
      <button
        style={{ width: 60 }}
        onClick={() => dispatch({ type: DECREMENT_COUNTER })}
      >
        -
      </button>
      <div>{data}</div>
    </Container>
  );
};

export default Sandbox;
