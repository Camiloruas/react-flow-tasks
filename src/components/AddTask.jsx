// Importa o hook useState do React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa o PropTypes para validar as propriedades recebidas pelo componente.
import PropTypes from 'prop-types';

// Define o componente para adicionar novas tarefas.
function AddTask({ onTaskAdd }) {
  // Cria um estado para armazenar o título da nova tarefa.
  const [title, setTitle] = useState('');
  // Cria um estado para armazenar a descrição da nova tarefa.
  const [description, setDescription] = useState('');

  // Renderiza o formulário para adicionar uma nova tarefa.
  return (
    <div className="space-y-4 bg-slate-200 rounded-md shadow p-4 flex flex-col">
      {/* Campo de entrada para o título da tarefa. */}
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Campo de entrada para a descrição da tarefa. */}
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Botão para adicionar a nova tarefa. */}
      <button
        onClick={() =>{
          // Verifica se o título e a descrição não estão vazios.
          if (!title.trim() || !description.trim()) {
            return alert('Por favor, preencha o título e a descrição da tarefa.');
          }
          // Chama a função onTaskAdd, passando o título e a descrição da nova tarefa.
          onTaskAdd(title, description);
          // Limpa os campos de entrada após adicionar a tarefa.
          setTitle('');
          setDescription('');
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

// Exporta o componente AddTask para ser usado em outros lugares da aplicação.
export default AddTask;

// Define as PropTypes para o componente AddTask, garantindo que a propriedade onTaskAdd seja uma função e obrigatória.
AddTask.propTypes = {
  onTaskAdd: PropTypes.func.isRequired,
};
