const squads = {
  cartoes: {
    name: "Cartões PJ",
    maturity: "Estruturado",
    currentStage: 4,
    discovery: "Onboarding PJ sem atrito",
    metrics: [
      ["Maturidade", "3/5", "Estruturado"],
      ["Evidências registradas", "28", "+9 no mês"],
      ["Templates usados", "14", "Problem Statement lidera"],
      ["Lead time médio", "21 dias", "-18% vs. trimestre"]
    ],
    recommendations: [
      ["Validar hipótese principal", "Rodar experimento de clareza documental com métrica de abandono por etapa."],
      ["Registrar aprendizados", "Consolidar entrevistas e sinais quantitativos no Discovery Report."],
      ["Pedir mentoria curta", "Acionar Experiment Designer para revisar desenho do teste antes da execução."]
    ]
  },
  credito: {
    name: "Crédito PF",
    maturity: "Guiado",
    currentStage: 2,
    discovery: "Pré-aprovação de limite",
    metrics: [
      ["Maturidade", "2/5", "Guiado"],
      ["Evidências registradas", "13", "+4 no mês"],
      ["Templates usados", "9", "Research Plan em destaque"],
      ["Lead time médio", "28 dias", "-7% vs. trimestre"]
    ],
    recommendations: [
      ["Refinar recorte do cliente", "Separar clientes por renda, comportamento de crédito e canal de entrada."],
      ["Completar roteiro", "Usar Interview Script para padronizar perguntas e reduzir vieses."],
      ["Participar do plantão", "Levar dúvidas sobre recrutamento para o plantão semanal."]
    ]
  },
  investimentos: {
    name: "Investimentos",
    maturity: "Autônomo",
    currentStage: 6,
    discovery: "Carteira recomendada para novos investidores",
    metrics: [
      ["Maturidade", "4/5", "Autônomo"],
      ["Evidências registradas", "42", "+12 no mês"],
      ["Templates usados", "20", "Experiment Canvas lidera"],
      ["Lead time médio", "17 dias", "-23% vs. trimestre"]
    ],
    recommendations: [
      ["Preparar decisão", "Comparar evidências de valor, usabilidade e risco antes de planejar o MVP."],
      ["Compartilhar caso", "Transformar os aprendizados em caso interno por segmento e jornada."],
      ["Multiplicar prática", "Conduzir oficina curta sobre testes de mensagem para outras squads."]
    ]
  }
};

const stages = [
  {
    title: "Entender o problema",
    summary: "Definir problema, impacto e recorte.",
    explanation: "Alinha a squad sobre qual dor merece investigação e qual decisão será tomada ao final do Discovery.",
    checklist: ["Problema escrito sem solução embutida", "Impacto de negócio explícito", "Cliente ou segmento definido"],
    templates: ["Problem Statement", "Discovery Brief"],
    ai: "Avalie se o problema está claro, mensurável e livre de solução."
  },
  {
    title: "Entender clientes",
    summary: "Coletar sinais qualitativos e quantitativos.",
    explanation: "Aproxima a squad de comportamentos, necessidades, barreiras e contexto dos clientes.",
    checklist: ["Plano de pesquisa revisado", "Roteiro com perguntas abertas", "Critérios de recrutamento definidos"],
    templates: ["Research Plan", "Interview Script"],
    ai: "Revise o roteiro de entrevistas e aponte perguntas enviesadas."
  },
  {
    title: "Gerar oportunidades",
    summary: "Traduzir aprendizados em oportunidades.",
    explanation: "Organiza os achados em oportunidades comparáveis para priorização baseada em evidências.",
    checklist: ["Aprendizados agrupados", "Oportunidades conectadas a dores", "Critério de priorização aplicado"],
    templates: ["Opportunity Canvas", "Opportunity Solution Tree"],
    ai: "Transforme esses aprendizados em oportunidades priorizáveis."
  },
  {
    title: "Hipóteses",
    summary: "Declarar apostas testáveis.",
    explanation: "Converte oportunidades em hipóteses com público, comportamento esperado e evidência necessária.",
    checklist: ["Hipótese tem cliente, mudança e métrica", "Risco principal identificado", "Critério de sucesso definido"],
    templates: ["Hypothesis Canvas", "Lean Canvas"],
    ai: "Melhore a formulação da hipótese e sugira métricas de validação."
  },
  {
    title: "Experimentos",
    summary: "Desenhar testes de menor custo.",
    explanation: "Escolhe técnicas proporcionais ao risco para validar ou invalidar hipóteses antes do delivery.",
    checklist: ["Técnica compatível com o risco", "Amostra e período definidos", "Métrica e decisão combinadas"],
    templates: ["Experiment Canvas", "MVP Canvas"],
    ai: "Monte um experimento enxuto para testar a hipótese principal."
  },
  {
    title: "Validação",
    summary: "Ler resultados e lacunas.",
    explanation: "Compara dados coletados aos critérios de sucesso e documenta aprendizados acionáveis.",
    checklist: ["Resultado comparado ao critério", "Aprendizados documentados", "Limitações do teste explícitas"],
    templates: ["Discovery Report", "Evidence Log"],
    ai: "Aponte riscos de interpretação e lacunas nas evidências."
  },
  {
    title: "Decisão",
    summary: "Prosseguir, pivotar ou parar.",
    explanation: "Transforma evidências em decisão clara, com trade-offs e próximos passos para produto e negócio.",
    checklist: ["Decisão registrada", "Racional baseado em evidências", "Stakeholders alinhados"],
    templates: ["Decision Record", "Discovery Report"],
    ai: "Revise a decisão e diga se as evidências sustentam o caminho escolhido."
  },
  {
    title: "Planejamento do MVP",
    summary: "Conectar Discovery e Delivery.",
    explanation: "Define escopo mínimo, métricas de sucesso e dependências para iniciar delivery com menor incerteza.",
    checklist: ["Escopo mínimo priorizado", "Métricas de resultado definidas", "Riscos remanescentes tratados"],
    templates: ["MVP Canvas", "Delivery Brief"],
    ai: "Converta a decisão validada em um plano de MVP com métricas."
  }
];

const stageEvidenceRequirements = [
  {
    expected: ["Problem Statement preenchido", "Discovery Brief com decisao esperada", "Indicador de impacto ou baseline"],
    quality: ["Problema nao contem solucao embutida", "Cliente ou segmento esta explicito", "Ha metrica para avaliar relevancia"]
  },
  {
    expected: ["Research Plan", "Roteiro de entrevista", "Sintese de clientes ou dados de jornada"],
    quality: ["Amostra ou fonte esta descrita", "Perguntas reduzem vies", "Aprendizados separam fato de interpretacao"]
  },
  {
    expected: ["Opportunity Canvas", "Opportunity Solution Tree", "Criterio de priorizacao"],
    quality: ["Oportunidades derivam de evidencias", "Outcome esta conectado ao problema", "Priorizacao explicita trade-offs"]
  },
  {
    expected: ["Hypothesis Canvas", "Risco principal mapeado", "Criterio de sucesso"],
    quality: ["Hipotese tem cliente, comportamento e metrica", "Risco e falsificavel", "Criterio de decisao esta claro"]
  },
  {
    expected: ["Experiment Canvas", "Desenho de amostra e periodo", "Plano de leitura de resultado"],
    quality: ["Experimento testa o risco principal", "Custo e proporcional a incerteza", "Metrica evita vanity metric"]
  },
  {
    expected: ["Evidence Log", "Discovery Report", "Resultados contra criterio de sucesso"],
    quality: ["Resultado compara previsto e observado", "Limitacoes estao explicitas", "Aprendizado e acionavel"]
  },
  {
    expected: ["Decision Record", "Racional baseado em evidencias", "Alinhamento com stakeholders"],
    quality: ["Decisao tem go, pivot ou stop", "Trade-offs estao registrados", "Evidencias sustentam a recomendacao"]
  },
  {
    expected: ["MVP Canvas", "Metricas de sucesso", "Riscos remanescentes e dependencias"],
    quality: ["Escopo minimo deriva da decisao", "Metricas conectam Discovery e Delivery", "Riscos restantes tem plano"]
  }
];

function createEvidenceBuckets(entries = {}) {
  return stages.map((_, index) => entries[index] ? [...entries[index]] : []);
}

function defaultEvidenceStore() {
  return {
    cartoes: createEvidenceBuckets({
      0: [
        {
          type: "Template preenchido",
          title: "Problem Statement - onboarding PJ",
          reference: "Problem Statement",
          status: "Validada com stakeholder",
          decision: "Priorizar investigacao da etapa documental antes de desenhar solucao",
          summary: "Problema delimitado na etapa de validação documental, com impacto no abandono do cadastro."
        }
      ],
      1: [
        {
          type: "Pesquisa com clientes",
          title: "Roteiro e síntese de entrevistas",
          reference: "Interview Script",
          status: "Revisada pela squad",
          decision: "Manter entrevistas abertas para separar causa real de suposicao",
          summary: "Entrevistas indicaram dúvidas sobre documentação exigida e medo de envio incorreto."
        }
      ],
      3: [
        {
          type: "Hipótese documentada",
          title: "Hypothesis Canvas - clareza documental",
          reference: "Hypothesis Canvas",
          status: "Validada com stakeholder",
          decision: "Testar clareza documental com experimento antes do MVP",
          summary: "Hipótese principal conecta clareza da etapa documental à redução de abandono."
        }
      ]
    }),
    credito: createEvidenceBuckets({
      0: [
        {
          type: "Template preenchido",
          title: "Discovery Brief - pré-aprovação",
          reference: "Discovery Brief",
          status: "Revisada pela squad",
          decision: "Investigar experiencia de pre-aprovacao antes de evoluir regra de limite",
          summary: "Decisão de Discovery vinculada à experiência de pré-aprovação de limite."
        }
      ],
      1: [
        {
          type: "Plano de pesquisa",
          title: "Research Plan - clientes PF",
          reference: "Research Plan",
          status: "Rascunho",
          decision: "Definir amostra antes de iniciar entrevistas",
          summary: "Plano separa clientes por renda, canal de entrada e comportamento de crédito."
        }
      ]
    }),
    investimentos: createEvidenceBuckets({
      0: [
        {
          type: "Template preenchido",
          title: "Problem Statement - novos investidores",
          reference: "Problem Statement",
          status: "Validada com stakeholder",
          decision: "Investigar confianca antes de propor mudancas na carteira recomendada",
          summary: "Problema descreve baixa confiança na primeira carteira recomendada."
        }
      ],
      2: [
        {
          type: "Árvore de oportunidades",
          title: "Opportunity Solution Tree - carteira recomendada",
          reference: "Opportunity Solution Tree",
          status: "Validada com stakeholder",
          decision: "Priorizar oportunidades ligadas a confianca e compreensao de risco",
          summary: "Oportunidades priorizadas por confiança, compreensão de risco e clareza de recomendação."
        }
      ],
      4: [
        {
          type: "Experimento",
          title: "Teste de mensagem",
          reference: "Experiment Canvas",
          status: "Validada com stakeholder",
          decision: "Escolher mensagem do MVP com base no teste",
          summary: "Experimento compara variações de mensagem antes do desenvolvimento do MVP."
        }
      ],
      5: [
        {
          type: "Resultado",
          title: "Discovery Report - validação",
          reference: "Discovery Report",
          status: "Revisada pela squad",
          decision: "Consolidar recomendacao para planejamento do MVP",
          summary: "Resultados consolidados para sustentar decisão sobre a proposta de valor."
        }
      ]
    })
  };
}

function loadEvidenceStore() {
  const fallback = defaultEvidenceStore();
  if (typeof localStorage === "undefined") return fallback;

  try {
    const stored = JSON.parse(localStorage.getItem("discoveryHubEvidence") || "null");
    if (!stored) return fallback;

    Object.keys(fallback).forEach((squadKey) => {
      if (!Array.isArray(stored[squadKey])) stored[squadKey] = fallback[squadKey];
      stored[squadKey] = stages.map((_, index) => {
        if (!Array.isArray(stored[squadKey][index])) return fallback[squadKey][index] || [];

        return stored[squadKey][index].map((evidence, evidenceIndex) => ({
          ...(fallback[squadKey][index]?.[evidenceIndex] || {}),
          ...evidence
        }));
      });
    });

    return stored;
  } catch {
    return fallback;
  }
}

const resources = [
  ["Guia", "Continuous Discovery", "Ritual semanal de aprendizado com clientes.", "Maturidade"],
  ["Guia", "Double Diamond", "Estrutura para divergir, convergir e decidir.", "Método"],
  ["Guia", "JTBD", "Mapeamento de progresso desejado e contexto.", "Pesquisa"],
  ["Guia", "Opportunity Solution Tree", "Conexão entre outcomes, oportunidades e soluções.", "Priorização"],
  ["Template", "Problem Statement", "Formulação clara de problema e impacto.", "Etapa 1"],
  ["Template", "Research Plan", "Plano de pesquisa com amostra, método e agenda.", "Etapa 2"],
  ["Template", "Hypothesis Canvas", "Hipótese, risco, métrica e critério de sucesso.", "Etapa 4"],
  ["Template", "Experiment Canvas", "Desenho do experimento e leitura de resultados.", "Etapa 5"],
  ["Playbook", "Entrevistas com clientes", "Preparação, condução e síntese de entrevistas.", "Pesquisa"],
  ["Playbook", "Lean Discovery", "Ciclo enxuto de aprendizado antes do delivery.", "Execução"],
  ["Caso", "Onboarding PJ", "Redução de fricção em validação documental.", "Cartões PJ"],
  ["Caso", "Carteira recomendada", "Teste de mensagem para novos investidores.", "Investimentos"]
];

const events = [
  ["Plantão semanal", "Terça, 10h", "Tira-dúvidas com Discovery Coach e UX Research Advisor."],
  ["Workshop", "Quinta, 15h", "Como escrever hipóteses e escolher experimentos."],
  ["Fórum executivo", "Mensal", "Indicadores de maturidade, adoção e impacto."],
  ["Discovery Community Day", "Trimestral", "Compartilhamento de casos, falhas e aprendizados."]
];

const assessmentCriteria = [
  ["cadence", "Cadência de Discovery", "Rituais frequentes antes e durante o delivery"],
  ["evidence", "Decisão baseada em evidências", "Uso consistente de dados, entrevistas e experimentos"],
  ["autonomy", "Autonomia da squad", "Baixa dependência operacional do CoE"],
  ["knowledge", "Registro de aprendizado", "Uso da biblioteca, templates e casos internos"],
  ["governance", "Governança e indicadores", "Métricas atualizadas para squad e liderança"]
];

const maturityLevels = ["Assistido", "Guiado", "Estruturado", "Autônomo", "Multiplicador"];
const maxEvidenceFileSize = 2 * 1024 * 1024;
const evidenceStore = loadEvidenceStore();

let activeSquadKey = "cartoes";
let selectedStageIndex = 3;
let activeFilter = "all";
let toastTimer;

const viewTitles = {
  home: "Home",
  journey: "Discovery Guiado",
  planner: "Planejar Discovery",
  library: "Biblioteca",
  assistant: "IA Discovery",
  assessment: "Assessment",
  community: "Comunidade",
  executive: "Dashboard Executivo"
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve({
      fileName: file.name,
      fileType: file.type || "application/octet-stream",
      fileSize: file.size,
      fileDataUrl: reader.result
    });
    reader.onerror = () => reject(new Error("Nao foi possivel ler o arquivo."));
    reader.readAsDataURL(file);
  });
}

function formatFileSize(size = 0) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function evidenceRecordText(evidence, stageTitle) {
  return [
    `Etapa: ${stageTitle}`,
    `Tipo: ${evidence.type || ""}`,
    `Documento ou artefato: ${evidence.title || ""}`,
    `Status: ${evidence.status || ""}`,
    `Referencia: ${evidence.reference || ""}`,
    `Arquivo: ${evidence.fileName || "Sem arquivo anexado"}`,
    `Decisao apoiada: ${evidence.decision || ""}`,
    "",
    "Aprendizado evidenciado:",
    evidence.summary || ""
  ].join("\n");
}

function setView(viewName) {
  qsa(".view").forEach((view) => view.classList.toggle("is-active", view.id === viewName));
  qsa(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === viewName));
  qs("#viewTitle").textContent = viewTitles[viewName];
  if (viewName === "library") renderLibrary();
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function currentSquad() {
  return squads[activeSquadKey];
}

function currentEvidenceBuckets() {
  return evidenceStore[activeSquadKey];
}

function saveEvidenceStore() {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("discoveryHubEvidence", JSON.stringify(evidenceStore));
  }
}

function evidenceQuality(evidence) {
  let points = 0;
  if (evidence.title && evidence.type) points += 1;
  if (evidence.reference) points += 1;
  if ((evidence.summary || "").trim().length >= 60) points += 1;
  if (evidence.decision) points += 1;
  if (evidence.status === "Validada com stakeholder") points += 1;

  const label = points >= 4 ? "Forte" : points >= 2 ? "Parcial" : "Fraca";
  return { points, label };
}

function stageDocumentationStatus(stageIndex, squadKey = activeSquadKey) {
  const evidences = evidenceStore[squadKey][stageIndex] || [];
  const strongEvidenceCount = evidences.filter((evidence) => evidenceQuality(evidence).points >= 4).length;
  const hasMinimumEvidence = evidences.length > 0;
  const hasQualityEvidence = strongEvidenceCount > 0;

  return {
    evidenceCount: evidences.length,
    strongEvidenceCount,
    label: hasQualityEvidence ? "Evidencia forte" : hasMinimumEvidence ? "Evidencia parcial" : "Sem evidencia",
    isComplete: hasQualityEvidence
  };
}

function documentationStats(squadKey = activeSquadKey) {
  const buckets = evidenceStore[squadKey];
  const documentedStages = buckets.filter((items) => items.length > 0).length;
  const evidenceCount = buckets.reduce((sum, items) => sum + items.length, 0);
  const stageStatuses = stages.map((_, index) => stageDocumentationStatus(index, squadKey));
  const completeStages = stageStatuses.filter((stage) => stage.isComplete).length;
  const strongEvidenceCount = stageStatuses.reduce((sum, stage) => sum + stage.strongEvidenceCount, 0);
  const missingStages = stages
    .map((stage, index) => ({ title: stage.title, count: buckets[index].length }))
    .filter((stage) => stage.count === 0)
    .map((stage) => stage.title);
  const partialStages = stages
    .map((stage, index) => ({ title: stage.title, status: stageStatuses[index] }))
    .filter((stage) => stage.status.evidenceCount > 0 && !stage.status.isComplete)
    .map((stage) => stage.title);
  const coverageRatio = documentedStages / stages.length;
  const qualityRatio = completeStages / stages.length;
  const weightedRatio = (coverageRatio * 0.6) + (qualityRatio * 0.4);
  const score = evidenceCount === 0 ? 1 : Math.max(1, Math.ceil(weightedRatio * 5));

  return {
    documentedStages,
    completeStages,
    evidenceCount,
    strongEvidenceCount,
    missingStages,
    partialStages,
    score,
    coverage: Math.round(coverageRatio * 100),
    qualityCoverage: Math.round(qualityRatio * 100)
  };
}

function renderHome() {
  const squad = currentSquad();
  const docStats = documentationStats();
  const metrics = squad.metrics.map((metric) => {
    if (metric[0] === "Evidências registradas") {
      return ["Evidências registradas", String(docStats.evidenceCount), `${docStats.completeStages}/${stages.length} etapas com evidência forte`];
    }
    return metric;
  });

  qs("#homeMetrics").innerHTML = metrics.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  qs("#progressSubtitle").textContent = `${squad.discovery} - etapa ${squad.currentStage + 1} de ${stages.length}`;
  qs("#maturityPill").textContent = squad.maturity;
  qs("#progressBar").style.width = `${Math.round(((squad.currentStage + 1) / stages.length) * 100)}%`;

  qs("#compactStageList").innerHTML = stages.map((stage, index) => {
    const stateClass = index < squad.currentStage ? "is-done" : index === squad.currentStage ? "is-current" : "";
    const stateText = index < squad.currentStage ? "Concluída" : index === squad.currentStage ? "Atual" : "Próxima";
    return `
      <li class="${stateClass}">
        <span class="stage-index">${index + 1}</span>
        <strong>${stage.title}</strong>
        <span class="badge">${stateText}</span>
      </li>
    `;
  }).join("");

  const documentationRecommendation = docStats.completeStages < stages.length
    ? [["Fortalecer evidências da jornada", docStats.missingStages.length
      ? `Documentar primeiro: ${docStats.missingStages.slice(0, 2).join(" e ")}.`
      : `Revisar qualidade das evidências em: ${docStats.partialStages.slice(0, 2).join(" e ")}.`]]
    : [];
  const recommendations = [...documentationRecommendation, ...squad.recommendations];

  qs("#recommendationList").innerHTML = recommendations.map(([title, body]) => `
    <article class="recommendation-item">
      <strong>${title}</strong>
      <p>${body}</p>
    </article>
  `).join("");
}

function renderJourney() {
  const squad = currentSquad();
  qs("#journeyGrid").innerHTML = stages.map((stage, index) => {
    const selected = index === selectedStageIndex ? "is-selected" : "";
    const done = index < squad.currentStage ? "is-done" : "";
    const current = index === squad.currentStage ? "is-current" : "";
    const statusText = index < squad.currentStage ? "Concluída" : index === squad.currentStage ? "Atual" : "Próxima";
    const documentationStatus = stageDocumentationStatus(index);
    const documentationClass = documentationStatus.isComplete ? "is-strong" : documentationStatus.evidenceCount ? "is-partial" : "";
    return `
      <button class="stage-card ${selected} ${done} ${current}" type="button" data-stage="${index}">
        <span class="stage-index">${index + 1}</span>
        <strong>${stage.title}</strong>
        <p>${stage.summary}</p>
        <span class="stage-card-status">${statusText}</span>
        <span class="stage-evidence-count ${documentationClass}">${documentationStatus.evidenceCount} evidência${documentationStatus.evidenceCount === 1 ? "" : "s"} - ${documentationStatus.label}</span>
      </button>
    `;
  }).join("");

  qsa(".stage-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedStageIndex = Number(card.dataset.stage);
      renderJourney();
    });
  });

  renderStageDetail();
}

function renderStageDetail() {
  const stage = stages[selectedStageIndex];
  const requirement = stageEvidenceRequirements[selectedStageIndex];
  const squad = currentSquad();
  const evidences = currentEvidenceBuckets()[selectedStageIndex];
  const isCompleted = selectedStageIndex < squad.currentStage;
  const isFuture = selectedStageIndex > squad.currentStage;
  const isLastStage = selectedStageIndex === stages.length - 1;
  const actionLabel = isCompleted
    ? "Etapa concluída"
    : isFuture
      ? "Etapa futura"
      : isLastStage
        ? "Concluir jornada"
        : "Concluir etapa e avançar";
  qs("#stageDetail").innerHTML = `
    <div class="panel-header">
      <div>
        <h3>${selectedStageIndex + 1}. ${stage.title}</h3>
        <p>${stage.explanation}</p>
      </div>
      <button class="secondary-action" type="button" id="markStage" ${isCompleted || isFuture ? "disabled" : ""}>${actionLabel}</button>
    </div>
    <div class="stage-detail-grid">
      <div>
        <h3>Checklist mínimo</h3>
        <ul class="plain-list">${stage.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>Templates</h3>
        <ul class="plain-list">${stage.templates.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>Prompt sugerido</h3>
        <p>${stage.ai}</p>
      </div>
    </div>
    <div class="evidence-guidance">
      <article>
        <h3>Evidências esperadas</h3>
        <ul class="plain-list">${requirement.expected.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article>
        <h3>Critérios de qualidade</h3>
        <ul class="plain-list">${requirement.quality.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    </div>
    <section class="evidence-section" aria-labelledby="evidenceTitle">
      <div class="panel-header">
        <div>
          <h3 id="evidenceTitle">Documentação e evidências da etapa</h3>
          <p>Esses registros alimentam automaticamente a maturidade documental no Assessment.</p>
        </div>
        <span class="status-pill">${evidences.length} evidência${evidences.length === 1 ? "" : "s"}</span>
      </div>
      <div class="evidence-layout">
        <form class="evidence-form" id="evidenceForm">
          <label>
            Tipo
            <select name="type">
              <option>Template preenchido</option>
              <option>Pesquisa com clientes</option>
              <option>Evidência quantitativa</option>
              <option>Hipótese documentada</option>
              <option>Experimento</option>
              <option>Resultado</option>
              <option>Decisão</option>
            </select>
          </label>
          <label>
            Documento ou artefato
            <input name="title" type="text" value="${escapeHtml(stage.templates[0])}" required>
          </label>
          <label>
            Link ou referência
            <input name="reference" type="text" placeholder="URL, pasta, Jira, Confluence ou template">
          </label>
          <label>
            Status
            <select name="status">
              <option>Rascunho</option>
              <option>Revisada pela squad</option>
              <option>Validada com stakeholder</option>
            </select>
          </label>
          <label>
            Arquivo
            <input name="file" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.png,.jpg,.jpeg">
            <span class="field-note">No protótipo, arquivos até 2 MB ficam disponíveis para download neste navegador.</span>
          </label>
          <label class="evidence-summary-field">
            Decisão que esta evidência apoia
            <input name="decision" type="text" placeholder="Ex.: seguir, pivotar, parar, testar nova hipótese">
          </label>
          <label class="evidence-summary-field">
            Aprendizado evidenciado
            <textarea name="summary" rows="4" placeholder="O que esta evidência prova ou esclarece?" required></textarea>
          </label>
          <button class="primary-action" type="submit">Registrar evidência</button>
        </form>
        <div class="evidence-list" id="evidenceList">
          ${renderEvidenceItems(evidences)}
        </div>
      </div>
    </section>
  `;

  qs("#markStage").addEventListener("click", () => {
    const nextStage = Math.min(stages.length - 1, selectedStageIndex + 1);
    squads[activeSquadKey].currentStage = nextStage;
    selectedStageIndex = nextStage;
    const message = isLastStage
      ? "Jornada concluída. O próximo passo é consolidar a decisão e planejar o MVP."
      : `Etapa concluída. Agora a squad está em ${stages[nextStage].title}.`;
    showToast(message);
    renderHome();
    renderJourney();
    renderAssessmentResult();
  });

  qs("#evidenceForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const file = form.elements.file.files[0];
    if (file && file.size > maxEvidenceFileSize) {
      showToast("Arquivo acima de 2 MB. Para o protótipo, use um arquivo menor ou registre um link.");
      return;
    }
    const uploadedFile = await readFileAsDataUrl(file);
    const evidence = {
      type: form.elements.type.value,
      title: form.elements.title.value.trim(),
      reference: file ? file.name : form.elements.reference.value.trim(),
      status: form.elements.status.value,
      decision: form.elements.decision.value.trim(),
      summary: form.elements.summary.value.trim(),
      ...(uploadedFile || {})
    };

    currentEvidenceBuckets()[selectedStageIndex].push(evidence);
    saveEvidenceStore();
    showToast(`Evidência registrada em ${stage.title}. O Assessment foi atualizado.`);
    renderHome();
    renderJourney();
    renderAssessmentResult();
  });

  qsa("[data-remove-evidence]", qs("#stageDetail")).forEach((button) => {
    button.addEventListener("click", () => {
      currentEvidenceBuckets()[selectedStageIndex].splice(Number(button.dataset.removeEvidence), 1);
      saveEvidenceStore();
      showToast(`Evidência removida de ${stage.title}.`);
      renderHome();
      renderJourney();
      renderAssessmentResult();
    });
  });

  qsa("[data-download-evidence]", qs("#stageDetail")).forEach((button) => {
    button.addEventListener("click", () => {
      const evidence = currentEvidenceBuckets()[selectedStageIndex][Number(button.dataset.downloadEvidence)];
      const blob = new Blob([evidenceRecordText(evidence, stage.title)], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const safeTitle = (evidence.title || stage.title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "evidencia";
      link.href = url;
      link.download = `${safeTitle}-registro.txt`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast(`Registro de ${evidence.title} baixado.`);
    });
  });
}

function renderEvidenceItems(evidences) {
  if (!evidences.length) {
    return `
      <article class="empty-state">
        <strong>Nenhuma evidência registrada</strong>
        <p>Registre o artefato que comprova o trabalho feito nesta etapa.</p>
      </article>
    `;
  }

  return evidences.map((evidence, index) => {
    const quality = evidenceQuality(evidence);
    const qualityClass = quality.label === "Forte" ? "is-strong" : quality.label === "Parcial" ? "is-partial" : "";
    return `
      <article class="evidence-item">
        <div>
          <div class="evidence-meta">
            <span class="badge">${escapeHtml(evidence.type)}</span>
            <span class="quality-pill ${qualityClass}">${quality.label}</span>
            ${evidence.status ? `<span class="quality-pill">${escapeHtml(evidence.status)}</span>` : ""}
          </div>
          <h3>${escapeHtml(evidence.title)}</h3>
          <p>${escapeHtml(evidence.summary)}</p>
          ${evidence.decision ? `<small>Decisão apoiada: ${escapeHtml(evidence.decision)}</small>` : ""}
          ${evidence.reference ? `<small>${escapeHtml(evidence.reference)}</small>` : ""}
          ${evidence.fileName ? `<small>Arquivo anexado: ${escapeHtml(evidence.fileName)} (${formatFileSize(evidence.fileSize)})</small>` : ""}
        </div>
        <div class="evidence-actions">
          ${evidence.fileDataUrl ? `<a class="secondary-action" href="${escapeHtml(evidence.fileDataUrl)}" download="${escapeHtml(evidence.fileName || evidence.title)}">Baixar arquivo</a>` : ""}
          <button class="secondary-action" type="button" data-download-evidence="${index}">Baixar registro</button>
          <button class="secondary-action" type="button" data-remove-evidence="${index}">Remover</button>
        </div>
      </article>
    `;
  }).join("");
}

function plannerTechniques(uncertainty, evidence) {
  const base = {
    problem: ["Problem Statement", "Entrevistas exploratórias", "Análise de dados de jornada", "Opportunity Canvas"],
    customer: ["Research Plan", "Entrevistas semiestruturadas", "JTBD", "Mapa de jornada"],
    solution: ["Prototype test", "Experiment Canvas", "Teste de usabilidade", "Smoke test"],
    value: ["Lean Canvas", "Teste de mensagem", "Análise de cohort", "MVP Canvas"]
  };
  const additions = evidence === "low"
    ? ["Desk research", "Benchmark interno"]
    : evidence === "medium"
      ? ["Síntese de evidências", "Critério de decisão"]
      : ["Teste confirmatório", "Decision Record"];
  return [...base[uncertainty], ...additions];
}

function generatePlan(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const weeks = Number(data.timeline);
  const techniques = plannerTechniques(data.uncertainty, data.evidence);
  const half = Math.max(1, Math.floor(weeks / 2));

  qs("#planOutput").innerHTML = `
    <div class="panel-header">
      <div>
        <h3>${data.initiative}</h3>
        <p>Plano gerado para decisão em ${weeks} semanas.</p>
      </div>
      <span class="status-pill">${data.evidence === "low" ? "Risco alto" : data.evidence === "medium" ? "Risco moderado" : "Risco controlado"}</span>
    </div>
    <div class="timeline">
      <div class="timeline-item">
        <span>Semana 1</span>
        <p>Alinhar problema, decisão esperada, stakeholders e evidências existentes.</p>
      </div>
      <div class="timeline-item">
        <span>Semana ${half}</span>
        <p>Coletar sinais com clientes, dados e especialistas. Registrar aprendizados no workspace da squad.</p>
      </div>
      <div class="timeline-item">
        <span>Semana ${weeks}</span>
        <p>Consolidar hipóteses, experimento recomendado, critérios de sucesso e decisão de MVP.</p>
      </div>
    </div>
    <h3>Técnicas recomendadas</h3>
    <ul class="plain-list">${techniques.map((technique) => `<li>${technique}</li>`).join("")}</ul>
    <h3>Stakeholders</h3>
    <p>${data.stakeholders}</p>
    <h3>Entregáveis</h3>
    <ul class="plain-list">
      <li>Discovery Brief</li>
      <li>Research Plan</li>
      <li>Hypothesis Canvas</li>
      <li>Experiment Canvas</li>
      <li>Decision Record</li>
    </ul>
  `;
}

function renderLibrary() {
  const term = qs("#globalSearch").value.trim().toLowerCase();
  const filtered = resources.filter(([type, title, description, tag]) => {
    const matchesType = activeFilter === "all" || type === activeFilter;
    const searchable = `${type} ${title} ${description} ${tag}`.toLowerCase();
    return matchesType && (!term || searchable.includes(term));
  });

  qs("#libraryGrid").innerHTML = filtered.length ? filtered.map(([type, title, description, tag], index) => `
    <article class="resource-card">
      <span class="badge">${type}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <footer>
        <span>${tag}</span>
        <button class="secondary-action" type="button" data-open-resource="${index}">Abrir</button>
      </footer>
    </article>
  `).join("") : `
    <article class="resource-card">
      <span class="badge">Busca</span>
      <h3>Nenhum item encontrado</h3>
      <p>Ajuste os filtros ou o termo de busca.</p>
    </article>
  `;
}

function generateAssistantAnswer(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const question = data.question.trim();
  const hasMetric = /%|dias|taxa|nps|abandono|conversão|receita|custo|tempo/i.test(question);
  const hasCustomer = /cliente|usuário|pj|pf|investidor|segmento/i.test(question);
  const hasCause = /porque|por que|causa|motivo|barreira|fricção|dificuldade/i.test(question);

  const strengths = [
    hasCustomer ? "O público afetado aparece no enunciado." : "Inclua o público afetado de forma explícita.",
    hasMetric ? "Há sinal mensurável para acompanhar impacto." : "Adicione uma métrica observável para evitar interpretação subjetiva.",
    hasCause ? "Existe indicação de causa a investigar." : "Declare quais causas ainda são hipóteses, não fatos."
  ];

  qs("#assistantAnswer").innerHTML = `
    <div class="panel-header">
      <div>
        <h3>${data.agent}</h3>
        <p>Resposta simulada para apoiar o desenho do MVP.</p>
      </div>
      <span class="status-pill">${hasMetric && hasCustomer ? "Boa base" : "Precisa refinar"}</span>
    </div>
    <div class="answer-block">
      <h3>Leitura rápida</h3>
      <ul class="plain-list">${strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="answer-block">
      <h3>Versão sugerida</h3>
      <p>Clientes do segmento definido abandonam uma etapa específica da jornada, gerando impacto mensurável no funil. A squad precisa descobrir quais barreiras explicam esse comportamento antes de decidir o MVP.</p>
    </div>
    <div class="answer-block">
      <h3>Próximo passo</h3>
      <p>Combine entrevistas com análise de dados da etapa afetada. Depois formule 2 ou 3 hipóteses testáveis e escolha o experimento de menor custo.</p>
    </div>
  `;
}

function renderAssessmentForm() {
  qs("#assessmentForm").innerHTML = `
    <section class="auto-signal" id="documentEvidenceSignal"></section>
    ${assessmentCriteria.map(([key, label, helper], index) => `
    <div class="slider-row">
      <label for="${key}">${label}</label>
      <input id="${key}" name="${key}" type="range" min="1" max="5" value="${index === 2 ? 3 : 4}">
      <output for="${key}" id="${key}Output">${index === 2 ? 3 : 4}</output>
      <p>${helper}</p>
    </div>
  `).join("")}
  `;

  qsa("#assessmentForm input").forEach((input) => {
    input.addEventListener("input", () => {
      qs(`#${input.id}Output`).textContent = input.value;
      renderAssessmentResult();
    });
  });

  renderDocumentationSignal();
}

function renderDocumentationSignal() {
  const signal = qs("#documentEvidenceSignal");
  if (!signal) return;

  const stats = documentationStats();
  signal.innerHTML = `
    <span class="badge">Sinal automático</span>
    <h3>Documentação evidenciada</h3>
    <strong>${stats.score}/5</strong>
    <p>${stats.documentedStages}/${stages.length} etapas têm registro e ${stats.completeStages}/${stages.length} têm evidência forte. Total: ${stats.evidenceCount} evidência${stats.evidenceCount === 1 ? "" : "s"}.</p>
    <div class="mini-progress"><span style="width: ${stats.coverage}%"></span></div>
  `;
}

function renderAssessmentResult() {
  renderDocumentationSignal();

  const manualValues = qsa("#assessmentForm input[type='range']").map((input) => Number(input.value));
  const docStats = documentationStats();
  const combined = [
    ...manualValues.map((value, index) => ({ value, label: assessmentCriteria[index][1] })),
    { value: docStats.score, label: "Documentação evidenciada" }
  ];
  const average = combined.reduce((sum, item) => sum + item.value, 0) / combined.length;
  const levelIndex = Math.min(4, Math.max(0, Math.round(average) - 1));
  const weakest = combined
    .sort((a, b) => a.value - b.value)
    .slice(0, 2);
  const missingText = docStats.missingStages.length
    ? docStats.missingStages.slice(0, 3).join(", ")
    : "Todas as etapas possuem evidência registrada.";
  const partialText = docStats.partialStages.length
    ? `Evidências parciais para fortalecer: ${docStats.partialStages.slice(0, 3).join(", ")}.`
    : "As etapas documentadas ja possuem qualidade suficiente para o sinal automatico.";

  qs("#assessmentResult").innerHTML = `
    <div class="panel-header">
      <div>
        <h3>Resultado: ${maturityLevels[levelIndex]}</h3>
        <p>Nota média ${average.toFixed(1)} de 5.</p>
      </div>
      <span class="status-pill">${maturityLevels[levelIndex]}</span>
    </div>
    <div class="maturity-scale">
      ${maturityLevels.map((level, index) => `<span class="maturity-step ${index === levelIndex ? "is-active" : ""}">${level}</span>`).join("")}
    </div>
    <div class="documentation-summary">
      <h3>Sinal vindo da Jornada Guiada</h3>
      <p>Maturidade documental ${docStats.score}/5, calculada por cobertura e qualidade das evidências nas etapas da jornada.</p>
      <div class="mini-progress"><span style="width: ${docStats.coverage}%"></span></div>
      <small>Etapas sem evidência: ${missingText}</small>
      <small>${partialText}</small>
    </div>
    <h3>Gaps prioritários</h3>
    <ul class="plain-list">${weakest.map((item) => `<li>${item.label}</li>`).join("")}</ul>
    <h3>Plano de evolução</h3>
    <ul class="plain-list">
      <li>Executar nova avaliação no próximo trimestre.</li>
      <li>Selecionar um workshop conectado ao gap mais baixo.</li>
      <li>Registrar evidências e decisões no workspace da squad.</li>
    </ul>
  `;
}

function renderCommunity() {
  qs("#eventList").innerHTML = events.map(([title, date, description]) => `
    <article class="event-card">
      <strong>${title}</strong>
      <span class="badge">${date}</span>
      <p>${description}</p>
      <button class="secondary-action" type="button" data-enroll-event="${title}">Inscrever</button>
    </article>
  `).join("");
}

function renderExecutive() {
  const metrics = [
    ["Usuários ativos", "1.248", "+16% no trimestre"],
    ["Squads avaliadas", "86", "71% da comunidade"],
    ["Hipóteses validadas", "312", "+48 vs. trimestre anterior"],
    ["Iniciativas evitadas", "37", "Antes do desenvolvimento"]
  ];

  qs("#executiveMetrics").innerHTML = metrics.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  const adoption = [
    ["Cartões", 82],
    ["Crédito", 68],
    ["Invest.", 76],
    ["Canais", 54],
    ["Seguros", 61]
  ];

  qs("#adoptionChart").innerHTML = adoption.map(([label, value]) => `
    <div class="bar-row">
      <strong>${label}</strong>
      <div class="bar-shell"><span style="width: ${value}%"></span></div>
      <span>${value}%</span>
    </div>
  `).join("");

  renderTrendChart();
}

function renderTrendChart() {
  const svg = qs("#trendChart");
  const quarters = ["T1", "T2", "T3", "T4"];
  const validated = [42, 63, 88, 119];
  const avoided = [8, 14, 23, 37];
  const width = 640;
  const height = 300;
  const pad = { left: 54, right: 28, top: 26, bottom: 54 };
  const max = 130;
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / (quarters.length - 1));
  const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
  const path = (values) => values.map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`).join(" ");
  const grid = [0, 40, 80, 120].map((value) => `
    <line class="trend-grid" x1="${pad.left}" x2="${width - pad.right}" y1="${y(value)}" y2="${y(value)}"></line>
    <text class="trend-label" x="12" y="${y(value) + 4}">${value}</text>
  `).join("");

  svg.innerHTML = `
    <title id="trendTitle">Evolução trimestral de impacto</title>
    <desc id="trendDesc">Hipóteses validadas crescem de 42 para 119 e iniciativas evitadas crescem de 8 para 37.</desc>
    ${grid}
    <line class="trend-axis" x1="${pad.left}" x2="${width - pad.right}" y1="${height - pad.bottom}" y2="${height - pad.bottom}"></line>
    ${quarters.map((quarter, index) => `<text class="trend-label" x="${x(index) - 8}" y="${height - 20}">${quarter}</text>`).join("")}
    <path class="trend-line-a" d="${path(validated)}"></path>
    <path class="trend-line-b" d="${path(avoided)}"></path>
    ${validated.map((value, index) => `<circle class="trend-dot-a" cx="${x(index)}" cy="${y(value)}" r="5"></circle><text class="trend-label" x="${x(index) + 8}" y="${y(value) - 8}">${value}</text>`).join("")}
    ${avoided.map((value, index) => `<circle class="trend-dot-b" cx="${x(index)}" cy="${y(value)}" r="5"></circle><text class="trend-label" x="${x(index) + 8}" y="${y(value) + 18}">${value}</text>`).join("")}
    <rect x="390" y="22" width="14" height="4" fill="var(--orange)"></rect>
    <text class="trend-legend" x="412" y="30">Hipóteses validadas</text>
    <rect x="390" y="46" width="14" height="4" fill="var(--green)"></rect>
    <text class="trend-legend" x="412" y="54">Iniciativas evitadas</text>
  `;
}

function bindEvents() {
  qsa(".nav-item").forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));
  qsa("[data-jump]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.jump)));

  qs("#squadSelect").addEventListener("change", (event) => {
    activeSquadKey = event.target.value;
    selectedStageIndex = currentSquad().currentStage;
    renderHome();
    renderJourney();
  });

  qs("#plannerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    generatePlan(event.currentTarget);
  });

  qs("#assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    generateAssistantAnswer(event.currentTarget);
  });

  qs("#globalSearch").addEventListener("input", () => {
    if (qs("#library").classList.contains("is-active")) renderLibrary();
  });

  qsa(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      qsa(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderLibrary();
    });
  });

  qs("#mentoringForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    qs("#mentoringResult").textContent = `Triagem enviada para ${data.topic}. Retorno sugerido: ${data.urgency.toLowerCase()}.`;
  });

  document.addEventListener("click", (event) => {
    const resourceButton = event.target.closest("[data-open-resource]");
    if (resourceButton) {
      const visibleCards = qsa(".resource-card");
      const card = resourceButton.closest(".resource-card");
      const title = qs("h3", card).textContent;
      showToast(`${title} aberto no workspace da squad. ${visibleCards.length} itens visíveis na biblioteca.`);
    }

    const eventButton = event.target.closest("[data-enroll-event]");
    if (eventButton) {
      showToast(`Inscrição registrada para ${eventButton.dataset.enrollEvent}.`);
    }
  });
}

function init() {
  selectedStageIndex = currentSquad().currentStage;
  bindEvents();
  renderHome();
  renderJourney();
  generatePlan(qs("#plannerForm"));
  generateAssistantAnswer(qs("#assistantForm"));
  renderAssessmentForm();
  renderAssessmentResult();
  renderLibrary();
  renderCommunity();
  renderExecutive();
}

init();
