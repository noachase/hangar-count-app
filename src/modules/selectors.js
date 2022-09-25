const spanArea = document.querySelector('.res-area');
const spanFermLength = document.querySelector('.res-ferm-length');
const spanFermCount = document.querySelector('.res-ferm-count');
const spanHangarWidth = document.querySelector('.res-hangar-width');
const spanHangarLength = document.querySelector('.res-hangar-length');
const spanHangarHeight = document.querySelector('.res-hangar-height');
const spanHangarColumnStep = document.querySelector('.res-hangar-column-step');
const spanPipeCount = document.querySelector('.res-ferm-pipe-count');
const spanPipeSnakeCount = document.querySelector('.res-ferm-snake-pipe-count');
// const spanPillarsFrontonCount = document.querySelector('.pillars-fronton-count');
const pipeTable = document.querySelector('.pipe-table');

const tdPcsPillars = document.querySelector('.td-pcs-pillars'); // стойки
const tdMPillars = document.querySelector('.td-m-pillars');

const tdPcsPillarsFront = document.querySelector('.td-pcs-pillarsFront'); // стойки торцевые(фронтоны)
const tdMPillarsFront = document.querySelector('.td-m-pillarsFront');

const tdPcsProgWalls = document.querySelector('.td-pcs-joists-walls'); // прогоны стены
const tdMProgWalls = document.querySelector('.td-m-joists-walls');

const tdPcsProgFront = document.querySelector('.td-pcs-joists-front'); // прогоны торцевые
const tdMProgFront = document.querySelector('.td-m-joists-front');

const tdPcsProgRoof = document.querySelector('.td-pcs-joists-ceiling'); // прогоны крыша
const tdMProgRoof = document.querySelector('.td-m-joists-ceiling');

const tdPcsFerm = document.querySelector('.td-pcs-girders'); // фермы
const tdMFerm = document.querySelector('.td-m-girders');

const tdPcsRos = document.querySelector('.td-pcs-braces'); // раскосы 1
const tdMRos = document.querySelector('.td-m-braces');

const tdPcsTotalRos = document.querySelector('.td-pcs-total-braces'); // раскосы все
const tdMTotalRos = document.querySelector('.td-m-total-braces');

const tdPcsCrests = document.querySelector('.td-pcs-crests'); // кресты
const tdMCrests = document.querySelector('.td-m-crests');

const tdPcsChecks = document.querySelector('.td-pcs-checks'); // галочки
const tdMChecks = document.querySelector('.td-m-checks');

const btn = document.querySelector('.button');
const inputForm = document.querySelector('.inputForm');

const inputWidth = document.getElementById('floatWidth');
const inputLength = document.getElementById('floatLength');
const inputHeight = document.getElementById('floatHeight');

// Расчёты листа

const profileWalls = document.querySelector('.td-pcs-profile-walls');
const profileFront = document.querySelector('.td-pcs-profile-front');
const profileRoof = document.querySelector('.td-pcs-profile-ceiling');

// Всё для селектов

const gatesText = document.querySelector('.select-gates-text');
const gatesResult = document.querySelector('.select-gates-result');
const stepText = document.querySelector('.select-step-text');
const stepResult = document.querySelector('.select-step-result');
const stepList = document.querySelector('.select-step-list');
const gatesList = document.querySelector('.select-gates-list');
const stepTriangle = document.querySelector('.select-step-toggle');
const doorTriangle = document.querySelector('.select-gates-toggle');

// Вспомогательные селекторы

const requiredInputs = document.querySelectorAll('.required-input');

export default {
  spanArea,
  spanFermLength,
  spanFermCount,
  spanHangarWidth,
  spanHangarLength,
  spanHangarHeight,
  spanPipeCount,
  spanPipeSnakeCount,
  pipeTable,
  tdPcsPillars,
  tdMPillars,
  tdPcsPillarsFront,
  tdMPillarsFront,
  tdPcsProgWalls,
  tdMProgWalls,
  tdPcsProgFront,
  tdMProgFront,
  tdPcsProgRoof,
  tdMProgRoof,
  tdPcsFerm,
  tdMFerm,
  tdPcsRos,
  tdMRos,
  tdPcsCrests,
  tdMCrests,
  tdPcsChecks,
  tdMChecks,
  btn,
  inputForm,
  inputWidth,
  inputLength,
  inputHeight,
  gatesText,
  gatesResult,
  stepText,
  stepResult,
  stepList,
  gatesList,
  stepTriangle,
  doorTriangle,
  requiredInputs,
  profileWalls,
  profileFront,
  profileRoof,
  tdPcsTotalRos,
  tdMTotalRos,
  spanHangarColumnStep,
};
