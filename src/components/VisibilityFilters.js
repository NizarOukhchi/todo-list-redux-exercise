import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const VisibilityFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.visibilityFilter);

  return (
    <Flex justify="space-between" width={200}>
      <Text
        onClick={() => dispatch(setFilter('all'))}
        cursor="pointer"
        textDecoration={filter && filter === 'all' && 'underline'}
      >
        all
      </Text>
      <Text
        onClick={() => dispatch(setFilter('completed'))}
        cursor="pointer"
        textDecoration={filter && filter === 'completed' && 'underline'}
      >
        completed
      </Text>
      <Text
        onClick={() => dispatch(setFilter('incompleted'))}
        cursor="pointer"
        textDecoration={filter && filter === 'incompleted' && 'underline'}
      >
        incompleted
      </Text>
    </Flex>
  );
};

export default VisibilityFilters;
