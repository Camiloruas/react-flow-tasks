import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import EditTask from './components/EditTask'; // Importe o componente EditTask
import useTasks from './hooks/useTasks'; // Importe o hook useTasks

function App() {
  const initialTasks = [
    {
      id: 1,
      title: 'Estudar Programação',
      description:
        'Estudar Programação para se tornar um desenvolvedor Full Stack  ',
      isComplete: false,
    },

    {
      id: 2,
      title: 'Estudar React',
      description: 'Estudar React para se tornar um desenvolvedor Front End',
      isComplete: false,
    },

    {
      id: 3,
      title: 'Estudar Node.js',
      description: 'Estudar Node.js para se tornar um desenvolvedor Back End',
      isComplete: false,
    },

    {
      id: 4,
      title: 'Inglês',
      description: 'Estudar Inglês para se tornar um desenvolvedor global',
      isComplete: false,
    },
  ];

  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTasks(initialTasks);
  const [editingTask, setEditingTask] = useState(null); // Estado para controlar a tarefa em edição

  function handleTaskEdit(taskId, title, description) {
    editTask(taskId, title, description);
    setEditingTask(null); // Fecha o modal após a edição
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center  ">
          Gerenciador de Tarefas
        </h1>
        <AddTask onTaskAdd={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={toggleTask}
          onTaskDelete={deleteTask}
          onTaskEdit={setEditingTask} // Passa a função para abrir o modal
        />
      </div>
      {editingTask && (
        <EditTask
          task={editingTask}
          onTaskEdit={handleTaskEdit}
          onCancel={() => setEditingTask(null)} // Fecha o modal ao cancelar
        />
      )}
    </div>
  );
}

export default App;
