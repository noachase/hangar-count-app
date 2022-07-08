const spanArea = document.querySelector('.res-area')
const spanFermLength = document.querySelector('.res-ferm-length')
const spanFermCount = document.querySelector('.res-ferm-count')
const spanHangarWidth = document.querySelector('.res-hangar-width')
const spanHangarLength = document.querySelector('.res-hangar-length')
const spanPipeCount = document.querySelector('.res-ferm-pipe-count')
const spanPipeSnakeCount = document.querySelector('.res-ferm-snake-pipe-count')
// const spanPillarsFrontonCount = document.querySelector('.pillars-fronton-count')

const tdPcsPillars = document.querySelector('.td-pcs-pillars') //стойки
const tdMPillars = document.querySelector('.td-m-pillars')

const tdPcsPillarsFront = document.querySelector('.td-pcs-pillarsFront') //стойки торцевые(фронтоны)
const tdMPillarsFront = document.querySelector('.td-m-pillarsFront')

const tdPcsProgWalls = document.querySelector('.td-pcs-joists-walls') //прогоны стены
const tdMProgWalls = document.querySelector('.td-m-joists-walls')

const tdPcsProgCeiling = document.querySelector('.td-pcs-joists-ceiling') //прогоны крыша
const tdMProgCeiling = document.querySelector('.td-m-joists-ceiling')

const tdPcsFerm = document.querySelector('.td-pcs-girders') //фермы
const tdMFerm = document.querySelector('.td-m-girders')

const tdPcsRos = document.querySelector('.td-pcs-braces') //раскосы
const tdMRos = document.querySelector('.td-m-braces')

const tdPcsCrests = document.querySelector('.td-pcs-crests') //кресты
const tdMCrests = document.querySelector('.td-m-crests')

const tdPcsChecks = document.querySelector('.td-pcs-checks') // галочки
const tdMChecks = document.querySelector('.td-m-checks')

const btn = document.querySelector('.button')
const inputForm = document.querySelector('.inputForm')

const inputWidth = document.getElementById('floatWidth');
const inputLength = document.getElementById('floatLength');
const inputHeight = document.getElementById('floatHeight');

//*START OF BASE COUNT

const count = (e) => {
  e.preventDefault();
  const width = document.getElementById('floatWidth').value
  const length = document.getElementById('floatLength').value
  const height = document.getElementById('floatHeight').value
  const gatesWidth = document.getElementById('floatGatesWidth').value

  const fermRise = width <= 19 ? 3.2 : 3.5
  console.log("🚀 ~ file: app.js ~ line 45 ~ count ~ fermRise", fermRise)
  const fermLen = (Math.sqrt((fermRise ** 2) + (width / 2) ** 2)).toFixed(2) //длина 1 половинки фермы
  // const fermLen = getPifagorGypotenuse(fermRise, width / 2, 2) + ` м`
  console.log("🚀 ~ file: app.js ~ line 47 ~ count ~ fermLen", fermLen)
  // console.log("🚀 ~ file: app.js ~ line 42 ~ count ~ fermL1", fermL1)

  if (!(width && length && height)) return

  spanHangarWidth.textContent = width + ` м`
  spanHangarLength.textContent = length + ` м`

  const getFermLength = () => {
    spanFermLength.textContent = fermLen * 2 + ' м'

    const getFermCount = length => {
      const sectionCountStd = Math.ceil(length / 3) //кол-во секций в ангаре
      const lengthRemainder = length % 3 // остаток от длинны 3х метровой секции

      let fermCol, fermColTd, sectionCol, rosPipeLength, pipeLen = null
      let sectionHintText = ''

      if (lengthRemainder === 0) { //если длина ангара делится нацело, то это кол-во пролетов +1 начальный
        fermCol = (sectionCountStd + 1) * 2
        fermColTd = sectionCountStd + 1
        sectionCol = sectionCountStd + 1
        pipeLen = addTenPercent(+((sectionCol * 2 * fermLen)), 1)
        rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1)
        sectionHintText = ` шт`

      } else if (lengthRemainder !== 0 && lengthRemainder <= 1) { //если длина ангара не делится нацело, то остаток прибавляется к последнему пролету
        fermCol = sectionCountStd * 2
        sectionCol = sectionCountStd
        pipeLen = addTenPercent(+(fermCol * fermLen))
        rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1)
        sectionHintText = ` шт. из них 1 пролет до 4м`

      } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
        fermCol = sectionCountStd * 2
        fermColTd = sectionCountStd
        sectionCol = sectionCountStd
        pipeLen = addTenPercent(+(fermCol * fermLen))
        rosPipeLength = addTenPercent(Math.ceil(pipeLen * 1.5), 1)
        sectionHintText = ` шт. из них 2 пролета до 4м`
      }

      tdPcsFerm.textContent = fermColTd + ` шт`
      spanFermCount.textContent = sectionCol + sectionHintText
      tdMFerm.textContent = pipeLen + ` м`
      tdMRos.textContent = rosPipeLength + ` м`

      tdPcsRos.textContent = '---'
    }

    getFermCount(length)
  }

  // площадь ангара
  const getArea = () => {
    const area = +width * +length
    spanArea.textContent = area + ` м.кв`
  }

  //стойки
  const getColumnCount = (length, height) => {

    //! TODO посчитать доп стойки для фронтонов
    // const distanceFromGatesToEdge = (width - gatesWidth) / 2
    const frontonPillarsCount =( Math.floor(width / 4)) * 2

    // if (distanceFromGatesToEdge >= 4) { //кол-во столбов в одном фронтоне из учета наличия ворот
    //   frontonPillarsCount = 4
    // } else if (distanceFromGatesToEdge >= 8) {
    //   frontonPillarsCount = 8
    // } else if (distanceFromGatesToEdge >= 12) {
    //   frontonPillarsCount = 16
    // } else {
    //   frontonPillarsCount = 0
    // }
    const frontonPillarsLength = frontonPillarsCount * 8 // 1 столб торцевой = 8м
    const sectionCountStd = Math.ceil(length / 3)
    const lengthRemainder = length % 3
    let innerPcs, innerM = null

    if (lengthRemainder === 0) {
      innerPcs = (sectionCountStd + 1) * 2
      innerM = innerPcs * height

    } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height

    } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height
    }

    tdPcsPillars.textContent = innerPcs + ` шт`
    tdMPillars.textContent = innerM + ` м`
    // spanPillarsFrontonCount.textContent = frontonPillarsCount + ` шт`
    tdPcsPillarsFront.textContent = frontonPillarsCount //стойки торцевые кол-во
    tdMPillarsFront.textContent = frontonPillarsLength + ` м`
  }

  //прогоны
  const getProgWallsCount = (length, height, width) => {
    const progSectionCount = Math.ceil(height / 1.5)
    const progHeightRemainder = height % 1.5
    const wallProgPipeLength = length * 2
    const frontonProgPipeLength = width * 2

    const frontonGates = null

    let innerPcs = null

    if (progHeightRemainder === 0 || progHeightRemainder <= 1.49) {
      innerPcs = (progSectionCount + 1) * 2 + ` шт`
      tdPcsProgWalls.textContent = innerPcs
    }

    const totalProgPipeLength = (wallProgPipeLength + frontonProgPipeLength) * innerPcs.split(' ')[0]

    tdMProgWalls.textContent = totalProgPipeLength + ` м`
  }

  const getProgCeilingCount = length => {
    const ceilingProgSectionCount = Math.ceil(fermLen / 1.3)
    const ceilingProgHeightRemainder = fermLen % 1.29

    let innerPcsCeil, ceilProg = null

    if (ceilingProgHeightRemainder === 0 || ceilingProgHeightRemainder <= 1.29) {
      innerPcsCeil = (ceilingProgSectionCount + 1) * 2 + ` шт`
      tdPcsProgCeiling.textContent = innerPcsCeil
    }

    const totalCeilingProgPipeLength = +innerPcsCeil.split(' ')[0] * 2 * length

    tdMProgCeiling.textContent = totalCeilingProgPipeLength + ` м`
  }


  //кресты
  const getStrengtheningConstructionCount = () => {
    const crestCol = length < 60 ? 4 : 6
    const crestPipeLen = getPifagorGypotenuse(3, height, 1) * 2
    const crestTotalPipeLen = Math.ceil(crestPipeLen * crestCol)

    const checksCol = 4
    const checkPipeLen = getPifagorGypotenuse(3, height, 1)
    const checksTotalPipeLen = Math.ceil(checkPipeLen * checksCol)

    tdPcsCrests.textContent = crestCol + ` шт`
    tdMCrests.textContent = crestTotalPipeLen + ` м`
    tdPcsChecks.textContent = checksCol + ` шт`
    tdMChecks.textContent = checksTotalPipeLen + ` м`
  }

  //*END OF BASE COUNT

  function addTenPercent(numb, round) {
    return (numb + numb * .1).toFixed(round)
  }

  function getPifagorGypotenuse(triangleWidth, height, round) {
    return (Math.sqrt(triangleWidth ** 2 + height ** 2)).toFixed(round)
  }

  getArea()
  getFermLength()
  getStrengtheningConstructionCount()
  getColumnCount(length, height)
  getProgWallsCount(length, height, width)
  getProgCeilingCount(length)
}

inputForm.addEventListener('input', event => {
  const target = event.target;
  if (!target.value.match(/[0-9_]/g)) {
    target.value = target.value.replace(/[A-Za-zА-Яа-яёЁ]/g, '');
  }
  if (target.matches('select') || target.matches('input')) {
    target.value = target.value.replace(/[A-Za-zА-Яа-яёЁ]/g, '');
  }
});

btn.addEventListener('click', count)