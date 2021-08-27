const spanArea = document.querySelector('.res-area')
const spanFermLength = document.querySelector('.res-ferm-length')
const spanFermCount = document.querySelector('.res-ferm-count')
const spanPipeCount = document.querySelector('.res-ferm-pipe-count')
const spanPipeSnakeCount = document.querySelector('.res-ferm-snake-pipe-count')

const tdPcsPillars = document.querySelector('.td-pcs-pillars') //стойки
const tdMPillars = document.querySelector('.td-m-pillars')

const tdPcsProg = document.querySelector('.td-pcs-joists') //прогоны
const tdMProg = document.querySelector('.td-m-joists')

const tdPcsFerm = document.querySelector('.td-pcs-girders') //фермы
const tdMFerm = document.querySelector('.td-m-girders')

const tdPcsRos = document.querySelector('.td-pcs-braces') //раскосы
const tdMRos = document.querySelector('.td-m-braces')

const tdPcsCrests = document.querySelector('.td-pcs-crests') //кресты
const tdMCrests = document.querySelector('.td-m-crests')

const tdPcsChecks = document.querySelector('.td-pcs-checks') // галочки
const tdMChecks = document.querySelector('.td-m-checks')

const btn = document.querySelector('.button')

const count = () => {
  const width = document.getElementById('floatWidth').value
  const length = document.getElementById('floatLength').value
  const height = document.getElementById('floatHeight').value
  const angle = document.getElementById('floatAngle').value

  const getFermLength = () => {
    const hangarRise = ((+width / 2) * getTanDeg(angle))
    const fermLen = (hangarRise / getSinDeg(angle)).toFixed(2)
    const totalLength = ((fermLen * 2 + 2) + ((fermLen * 2 + 2) * .1)).toFixed(1)

    spanPipeCount.textContent = totalLength + ' м'
    spanFermLength.textContent = fermLen + ' м'
    spanPipeSnakeCount.textContent = totalLength + ' м'
  }

  const getArea = () => {
    const area = +width * +length
    spanArea.textContent = area + ' м.кв'
  }

  const getFermCount = length => {
    let sectionCountStd = Math.ceil(length / 3)
    const lengthRemainder = length % 3

    if (lengthRemainder === 0) {
      spanFermCount.textContent = sectionCountStd + 1 + ' шт'
    } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
      spanFermCount.textContent = sectionCountStd + ` шт. из них 1 пролет до 4м`
    } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
      spanFermCount.textContent = sectionCountStd + ` шт. из них 2 пролетa до 4м`
    }
  }

  //*START OF BASE COUNT

  //стойки
  const getColumnCount = (length, height) => {
    const sectionCountStd = (Math.ceil(length / 3))
    const lengthRemainder = length % 3
    let innerPcs = null
    let innerM = null

    if (lengthRemainder === 0) {
      innerPcs = (sectionCountStd + 1) * 2
      innerM = +innerPcs * height
      tdPcsPillars.textContent = innerPcs + ' шт'
      tdMPillars.textContent = innerM + ' м'
    } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height
      tdPcsPillars.textContent = innerPcs + ` шт. `
      tdMPillars.textContent = innerM + ' м'
    } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height
      tdPcsPillars.textContent = innerPcs + ` шт. `
      tdMPillars.textContent = innerM + ' м'
    }

  }
  
  //прогоны
  const getProgCount = () => {

  }
  const getProgPipeLength = () => {

  }
  //фермы
  // const getFermCount = () => {

  // }
  // const getFermPipeLength = () => {

  // }
  //раскосы
  const getRosCount = () => {

  }
  const getRosPipeLength = () => {

  }
  //кресты
  const getCrestCount = () => {

  }
  const getCrestPipeLength = () => {

  }
  //галочки
  const getCheckCount = () => {

  }
  const getCheckPipeLength = () => {

  }
  //*END OF BASE COUNT
  const getPipeLength = () => {

  }











  function getTanDeg(deg) {
    const rad = deg * Math.PI / 180;
    return Math.tan(rad);
  }
  function getSinDeg(deg) {
    const rad = deg * Math.PI / 180;
    return Math.sin(rad);
  }

  getArea()
  getFermLength()
  getPipeLength()
  getFermCount(length)
  getColumnCount(length, height)
}

btn.addEventListener('click', count)