// Importa o hook useReducer do React para gerenciar o estado das tarefas de forma mais complexa.
import { useReducer } from 'react';
// Importa a função v4 do uuid para gerar IDs únicos para as tarefas.
import { v4 as uuidv4 } from 'uuid';

// Define o reducer que gerencia as ações relacionadas às tarefas.
const taskReducer = (state, action) => {
  // O switch avalia o tipo de ação a ser executada.
  switch (action.type) {
    // Caso a ação seja 'ADD_TASK', adiciona uma nova tarefa ao estado.
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: uuidv4(), // Gera um ID único para a nova tarefa.
          title: action.payload.title, // Define o título da nova tarefa.
          description: action.payload.description, // Define a descrição da nova tarefa.
          isComplete: false, // Define a nova tarefa como não concluída.
        },
      ];
    // Caso a ação seja 'DELETE_TASK', remove uma tarefa do estado.
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    // Caso a ação seja 'TOGGLE_TASK', alterna o estado de conclusão de uma tarefa.
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isComplete: !task.isComplete } // Se for a tarefa correta, inverte o valor de isComplete.
          : task
      );
    // Caso a ação seja 'EDIT_TASK', edita o título e a descrição de uma tarefa.
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title, description: action.payload.description } // Se for a tarefa correta, atualiza o título e a descrição.
          : task
      );
    // Caso a ação não corresponda a nenhuma das anteriores, retorna o estado atual.
    default:
      return state;
  }
};

// Define o hook personalizado useTasks.
const useTasks = (initialTasks) => {
  // Inicializa o useReducer com o reducer de tarefas e o estado inicial.
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // Função para adicionar uma nova tarefa.
  const addTask = (title, description) => {
    // Dispara a ação 'ADD_TASK' com o título e a descrição da nova tarefa.
    dispatch({ type: 'ADD_TASK', payload: { title, description } });
  };

  // Função para excluir uma tarefa.
  const deleteTask = (id) => {
    // Dispara a ação 'DELETE_TASK' com o ID da tarefa a ser excluída.
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  // Função para alternar o estado de conclusão de uma tarefa.
  const toggleTask = (id) => {
    // Dispara a ação 'TOGGLE_TASK' com o ID da tarefa a ser alternada.
    dispatch({ type: 'TOGGLE_TASK', payload: { id } });
  };

  // Função para editar uma tarefa.
  const editTask = (id, title, description) => {
    // Dispara a ação 'EDIT_TASK' com o ID, o novo título e a nova descrição da tarefa.
    dispatch({ type: 'EDIT_TASK', payload: { id, title, description } });
  };

  // Retorna o estado das tarefas e as funções para manipulá-las.
  return { tasks, addTask, deleteTask, toggleTask, editTask };
};

// Exporta o hook useTasks para ser usado em outros lugares da aplicação.
export default useTasks;
