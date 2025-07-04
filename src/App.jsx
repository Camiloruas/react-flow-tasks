import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isComplete: false,
    };
    setTasks([...tasks, newTasks]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center  ">
          Gerenciador de Tarefas
        </h1>
        <AddTask onTaskAdd={onTaskAdd} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
