import React from 'react';
import { ListItem, ListIcon, Link } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem marginBottom={5} onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed && (
        <ListIcon icon="check-circle" color="teal.500" />
      )}
      <Link
        color={todo && todo.completed ? 'grey' : 'teal.500'}
        textDecoration={todo && todo.completed && 'line-through'}
      >
        {todo.content}
      </Link>
    </ListItem>
  );
};

export default Todo;
