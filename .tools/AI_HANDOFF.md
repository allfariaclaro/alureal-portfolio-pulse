# PULSE — Nova tarefa demo

2026-10-01. ESCOPO: corrigir somente + Nova tarefa; entregar PR draft.
NÃO FAZER: merge/deploy, produção/DNS, backend, emails, cobranças, seed CRM, outros projetos ou agentes escritores. Gates Nativa/Vértice continuam pendentes fora deste escopo.
FEITO: clone isolado, formulário dialog acessível, título obrigatório até 120, metadados fictícios explícitos, escape no quadro/dashboard, estado local existente e fallback em memória, foco, prevenção de duplicação, CI PR somente leitura separado de Pages.
TESTADO: node --check pulse-app.js/pulse-data.js, node tests/tasks.test.cjs (3/3), git diff --check. Chromium local: clicar/Enter/Tab/Cancelar/Escape/vazio/espaços/120/HTML literal/duplo submit/reabrir/reload/concluir tarefa própria, storage indisponível. Viewports 1440/768/390/320, claro/escuro, sem overflow. Seed preservado, sem requisições de escrita, console e pageerror sem erros. Duplo abrir e Shift+Tab também passaram. Revisão visual screenshots desktop dark e 320 light passou. O primeiro QA detectou ciclo Tab; corrigido e retestado.
ENTREGA: https://github.com/allfariaclaro/alureal-portfolio-pulse/pull/1 — OPEN, draft=true. Commit funcional 28efb2375914d803a9e5e2c4bc09ebf4de18e114. CI PR regression SUCCESS: https://github.com/allfariaclaro/alureal-portfolio-pulse/actions/runs/36833013256. PR anexado à tarefa.
PENDENTE: revisão humana. Versão alterada não publicada nem validada no subdomínio, publicação não autorizada.
PRÓXIMO PASSO: pai revisar PR draft e obter autorização específica antes de merge/deploy. Não merge/deploy nesta tarefa.
ARQUIVOS: pulse-app.js, pulse-app.css, README.md, tests/tasks.test.cjs, .github/workflows/check-pr.yml, este checkpoint.
SERVIÇOS: HTTP local 127.0.0.1:8773 encerrado após QA. Nenhum deploy.
BACKUP/ROLLBACK: branch local backup/pre-demo-task-20261001; base a05b24ff2653b0ce861bc7d792b30dd66a74d70f. Não reset destrutivo.
EVIDÊNCIA: ../pulse-qa.json e ../pulse-{320,390,768,1440}-{dark,light}.png. Contextos browser descartáveis; nada de dados reais.
ITENS QUE NÃO DEVEM SER REPETIDOS: auditoria restante, QA em produção ou alteração de clientes/seed.
MODELO PARA PRÓXIMA ETAPA: manter 6.1 Sol Medium, Fast off solicitado; configuração efetiva não verificada, sem troca presumida.
