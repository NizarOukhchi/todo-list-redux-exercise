import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { List } from '@chakra-ui/core';

import Todo from './Todo';

const TodoList = () => {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const todos = useSelector((state) => {
    const allTodos = state.todos;
    switch (visibilityFilter) {
      case 'completed':
        return allTodos.filter((item) => item.completed);
      case 'incompleted':
        return allTodos.filter((item) => !item.completed);
      default:
        return allTodos;
    }
  });

  return todos && todos.length > 0 ? (
    <List marginTop={2} p={4}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  ) : (
    <div
      css={css`
        margin: 20px 0;
        text-align: center;
      `}
    >
      No todos
    </div>
  );
};

export default TodoList;
