# PULSE — Nova tarefa demo

2026-10-01. ESCOPO: corrigir somente + Nova tarefa; entregar PR draft.
NÃO FAZER: merge/deploy, produção/DNS, backend, emails, cobranças, seed CRM, outros projetos ou agentes escritores. Gates Nativa/Vértice continuam pendentes fora deste escopo.
FEITO: clone isolado, formulário dialog acessível, título obrigatório até 120, metadados fictícios explícitos, escape no quadro/dashboard, estado local existente e fallback em memória, foco, prevenção de duplicação, CI PR somente leitura separado de Pages.
TESTADO: node --check pulse-app.js/pulse-data.js, node tests/tasks.test.cjs (3/3), git diff --check. Chromium local: clicar/Enter/Tab/Cancelar/Escape/vazio/espaços/120/HTML literal/duplo submit/reabrir/reload/concluir tarefa própria, storage indisponível. Viewports 1440/768/390/320, claro/escuro, sem overflow. Seed preservado, sem requisições de escrita. Revisão visual screenshots desktop dark e 320 light passou. O primeiro QA detectou ciclo Tab; corrigido e retestado.
PENDENTE: commit/push, PR draft e resultado remoto CI. Versão alterada não publicada nem validada no subdomínio, publicação não autorizada.
PRÓXIMO PASSO: revisar diff final, commit/push branch fix/demo-new-task, abrir e anexar PR draft. Não merge/deploy.
ARQUIVOS: pulse-app.js, pulse-app.css, README.md, tests/tasks.test.cjs, .github/workflows/check-pr.yml, este checkpoint.
SERVIÇOS: HTTP local 127.0.0.1:8773 somente para QA, encerrar após entrega. Nenhum deploy.
BACKUP/ROLLBACK: branch local backup/pre-demo-task-20261001; base a05b24ff2653b0ce861bc7d792b30dd66a74d70f. Não reset destrutivo.
EVIDÊNCIA: ../pulse-qa.json e ../pulse-{320,390,768,1440}-{dark,light}.png. Contextos browser descartáveis; nada de dados reais.
ITENS QUE NÃO DEVEM SER REPETIDOS: auditoria restante, QA em produção ou alteração de clientes/seed.
MODELO PARA PRÓXIMA ETAPA: manter 6.1 Sol Medium, Fast off solicitado; configuração efetiva não verificada, sem troca presumida.
