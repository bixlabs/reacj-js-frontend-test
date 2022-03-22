import React from "react";
import Container from "../../app/layout/Container";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./testReducer";

const Sandbox = () => {
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <button
        style={{ width: 60, marginRight: 5 }}
        onClick={() => dispatch(increment(10))}
      >
        +
      </button>
      <button style={{ width: 60 }} onClick={() => dispatch(decrement(5))}>
        -
      </button>
      <div>{data}</div>
      {loading && <div>Loading...</div>}
    </Container>
  );
};

export default Sandbox;
