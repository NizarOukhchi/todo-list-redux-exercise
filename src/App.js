import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <Flex direction="column" width={600} p={10} marginTop={20}>
      <Heading marginBottom={10}>Todo List</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </Flex>
  );
}

export default App;
