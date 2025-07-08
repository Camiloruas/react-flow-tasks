import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="space-y-4 bg-slate-200 rounded-md shadow p-4 flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() =>{
          //verifica se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert('Por favor, preencha o título e a descrição da tarefa.');
          }
          onTaskAdd(title, description);
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

export default AddTask;

AddTask.propTypes = {
  onTaskAdd: PropTypes.func.isRequired,
};
