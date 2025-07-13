// Importa o StrictMode do React, que ajuda a identificar potenciais problemas na aplicação.
import { StrictMode } from 'react';
// Importa a função createRoot do react-dom/client, que é a nova API para renderizar a aplicação React.
import { createRoot } from 'react-dom/client';
// Importa o arquivo de estilos CSS global.
import './index.css';
// Importa o componente principal da aplicação.
import App from './App.jsx';
// Importa as funções necessárias do react-router-dom para criar e gerenciar rotas.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Importa o componente da página de tarefas.
import Taskpage from './pages/Taskpage.jsx'; // SEM 's' no final de Taskpage no import

// Cria o roteador da aplicação, definindo as rotas e os componentes que serão renderizados em cada uma.
const router = createBrowserRouter([
  {
    // A rota raiz ('/') renderiza o componente App.
    path: '/',
    element: <App />,
  },
  {
    // A rota '/task' renderiza o componente Taskpage.
    path: '/task',
    element: <Taskpage />,
  },
]);

// Renderiza a aplicação no elemento com o id 'root' no HTML.
createRoot(document.getElementById('root')).render(
  // O StrictMode envolve a aplicação para destacar potenciais problemas.
  <StrictMode>
    {/* O RouterProvider provê o roteador para a aplicação, habilitando a navegação entre as páginas. */}
    <RouterProvider router={router} />
  </StrictMode>
);
