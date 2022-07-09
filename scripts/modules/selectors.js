const spanArea = document.querySelector('.res-area');
const spanFermLength = document.querySelector('.res-ferm-length');
const spanFermCount = document.querySelector('.res-ferm-count');
const spanHangarWidth = document.querySelector('.res-hangar-width');
const spanHangarLength = document.querySelector('.res-hangar-length');
const spanPipeCount = document.querySelector('.res-ferm-pipe-count');
const spanPipeSnakeCount = document.querySelector('.res-ferm-snake-pipe-count');
// const spanPillarsFrontonCount = document.querySelector('.pillars-fronton-count');

const tdPcsPillars = document.querySelector('.td-pcs-pillars'); // стойки
const tdMPillars = document.querySelector('.td-m-pillars');

const tdPcsPillarsFront = document.querySelector('.td-pcs-pillarsFront'); // стойки торцевые(фронтоны)
const tdMPillarsFront = document.querySelector('.td-m-pillarsFront');

const tdPcsProgWalls = document.querySelector('.td-pcs-joists-walls'); // прогоны стены
const tdMProgWalls = document.querySelector('.td-m-joists-walls');

const tdPcsProgCeiling = document.querySelector('.td-pcs-joists-ceiling'); // прогоны крыша
const tdMProgCeiling = document.querySelector('.td-m-joists-ceiling');

const tdPcsFerm = document.querySelector('.td-pcs-girders'); // фермы
const tdMFerm = document.querySelector('.td-m-girders');

const tdPcsRos = document.querySelector('.td-pcs-braces'); // раскосы
const tdMRos = document.querySelector('.td-m-braces');

const tdPcsCrests = document.querySelector('.td-pcs-crests'); // кресты
const tdMCrests = document.querySelector('.td-m-crests');

const tdPcsChecks = document.querySelector('.td-pcs-checks'); // галочки
const tdMChecks = document.querySelector('.td-m-checks');

const btn = document.querySelector('.button');
const inputForm = document.querySelector('.inputForm');

const inputWidth = document.getElementById('floatWidth');
const inputLength = document.getElementById('floatLength');
const inputHeight = document.getElementById('floatHeight');

export default {
  spanArea,
  spanFermLength,
  spanFermCount,
  spanHangarWidth,
  spanHangarLength,
  spanPipeCount,
  spanPipeSnakeCount,
  tdPcsPillars,
  tdMPillars,
  tdPcsPillarsFront,
  tdMPillarsFront,
  tdPcsProgWalls,
  tdMProgWalls,
  tdPcsProgCeiling,
  tdMProgCeiling,
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
};
