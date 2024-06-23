import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import './App.css';
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c3f3b;
  border-radius: 10px;
`;
