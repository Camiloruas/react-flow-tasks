// Importa o hook useState do React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa o componente para adicionar novas tarefas.
import AddTask from './components/AddTask';
// Importa o componente que exibe a lista de tarefas.
import Tasks from './components/Tasks';
// Importa o componente para editar tarefas existentes.
import EditTask from './components/EditTask'; // Importe o componente EditTask
// Importa o hook personalizado useTasks para gerenciar a lógica das tarefas.
import useTasks from './hooks/useTasks'; // Importe o hook useTasks
// Importa o componente de rodapé.
import Footer from './components/Footer'; // Importe o componente Footer

// Define o componente principal da aplicação.
function App() {
  // Define o estado inicial das tarefas.
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

  // Utiliza o hook useTasks para gerenciar o estado e as ações das tarefas.
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTasks(initialTasks);
  // Cria um estado para controlar a tarefa que está sendo editada.
  const [editingTask, setEditingTask] = useState(null); // Estado para controlar a tarefa em edição

  // Função para lidar com a edição de uma tarefa.
  function handleTaskEdit(taskId, title, description) {
    // Chama a função editTask do hook useTasks para atualizar a tarefa.
    editTask(taskId, title, description);
    // Limpa o estado de edição, fechando o modal.
    setEditingTask(null); // Fecha o modal após a edição
  }

  // Renderiza o componente.
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center  ">
          Gerenciador de Tarefas
        </h1>
        {/* Componente para adicionar novas tarefas. */}
        <AddTask onTaskAdd={addTask} />
        {/* Componente que exibe a lista de tarefas. */}
        <Tasks
          tasks={tasks}
          onTaskClick={toggleTask}
          onTaskDelete={deleteTask}
          onTaskEdit={setEditingTask} // Passa a função para abrir o modal
        />
        {/* Componente de rodapé. */}
        <Footer />
      </div>
      {/* Renderiza o modal de edição somente se uma tarefa estiver sendo editada. */}
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

// Exporta o componente App para ser usado em outros lugares da aplicação.
export default App;
