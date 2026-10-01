# PULSE — projeto conceitual Alureal

Dashboard SaaS fictício para equipes operacionais, criado para demonstrar interface de produto, métricas e fluxos de trabalho.

## Recursos
- dashboard responsivo;
- visão de métricas;
- tarefas e status;
- filtros de período;
- navegação lateral adaptativa;
- interação sem backend;
- GitHub Pages.

> Projeto conceitual. Dados, empresas e métricas são fictícios.

## Nova tarefa demonstrativa
Em Operações, “+ Nova tarefa” abre um formulário acessível. Use um título fictício
(obrigatório, até 120 caracteres). Salvar adiciona uma tarefa em “A fazer”, no
projeto Demonstração, sem responsável ou prazo, com prioridade média. Cancelar
ou Escape descarta o formulário. Nenhum dado é enviado e nenhuma notificação
é disparada. A demonstração usa o armazenamento local já existente; se ele não
estiver disponível, a tarefa dura apenas até recarregar a página.

Regressões locais: `node --check pulse-app.js` e `node --test tests/*.test.cjs`.
O workflow de PR executa somente essas verificações, com `contents: read`;
o deploy de Pages continua separado e restrito a main ou acionamento manual.
