import React, { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const addTodoClicked = () => {
    if (content !== '') {
      dispatch(addTodo(content));
      setContent('')
    }
  };

  return (
    <Flex>
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button
        variantColor="teal"
        marginLeft={5}
        disabled={content === ''}
        onClick={addTodoClicked}
      >
        Add Todo
      </Button>
    </Flex>
  );
};

export default AddTodo;
