// Importa o React para poder usar JSX.
import React from 'react';

// Define o componente de rodapé.
function Footer() {
  // Obtém o ano atual.
  const currentYear = new Date().getFullYear();

  // Renderiza o rodapé com o ano atual e informações de direitos autorais.
  return (
    <footer className="w-full text-center text-slate-100 text-sm mt-4">
      © {currentYear} Camilo Ruas. All rights reserved.
    </footer>
  );
}

// Exporta o componente Footer para ser usado em outros lugares da aplicação.
export default Footer;
