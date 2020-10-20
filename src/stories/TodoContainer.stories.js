import React from 'react';
import TodoContainer from '../TodoContainer';

export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const NormalTodoContainer = () => <TodoContainer todos={['Teach React', 'Take dog out', 'do homework']} />

