import React from "react";

const items = [
  "Do 100 Javascript Projects",
  "LearnNodeJS",
  "LearnReactJS",
  "Learn GraphQL",
];

const Todo = (props) => <li>{props.todo}</li>;
const TodoList = () => {
  <ul>
    {items.map((item) => (
      <Todo key={item} todo={item} />
    ))}
  </ul>;
};

export default TodoList;
