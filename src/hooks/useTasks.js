import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          isComplete: false,
        },
      ];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isComplete: !task.isComplete }
          : task
      );
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

const useTasks = (initialTasks) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (title, description) => {
    dispatch({ type: 'ADD_TASK', payload: { title, description } });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id } });
  };

  return { tasks, addTask, deleteTask, toggleTask };
};

export default useTasks;
