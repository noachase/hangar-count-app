const spanArea = document.querySelector('.res-area')
const spanFermLength = document.querySelector('.res-ferm-length')
const spanFermCount = document.querySelector('.res-ferm-count')
const spanHangarWidth = document.querySelector('.res-hangar-width')
const spanHangarLength = document.querySelector('.res-hangar-length')
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

  if (!(width && length && height)) return

  spanHangarWidth.textContent = width + ` м`
  spanHangarLength.textContent = length + ` м`

  const getFermLength = () => {
    const fermRise = width <= 19 ? 3.2 : 3.5
    const fermLen = (Math.sqrt((fermRise ** 2) + (width / 2) ** 2)).toFixed(2)

    spanFermLength.textContent = fermLen + ' м'

    const getFermCount = length => {
      const sectionCountStd = Math.ceil(length / 3) //кол-во секций в ангаре
      const lengthRemainder = length % 3 // остаток от длинны 3х метровой секции

      let fermCol, sectionCol, rosPipeLength = null

      if (lengthRemainder === 0) { //если длина ангара делится нацело, то это кол-во пролетов +1 начальный
        fermCol = (sectionCountStd + 1) * 2
        sectionCol = sectionCountStd + 1
        const pipeLen = (sectionCol * 2 * (fermLen)).toFixed(1)
        rosPipeLength = Math.ceil(pipeLen * 1.5)

        tdPcsFerm.textContent = fermCol + ` шт`   //
        spanFermCount.textContent = sectionCol + ` шт` //кол-во секций в ангаре
        tdMFerm.textContent = pipeLen + ` м`
        tdMRos.textContent = rosPipeLength + ` м`

      } else if (lengthRemainder !== 0 && lengthRemainder <= 1) { //если длина ангара не делится нацело, то остаток прибавляется к последнему пролету
        fermCol = sectionCountStd * 2
        sectionCol = sectionCountStd
        const pipeLen = (fermCol * fermLen).toFixed(1)
        rosPipeLength = Math.ceil(pipeLen * 1.5)

        tdPcsFerm.textContent = fermCol // кол-во пролетов *2 = кол-во ферм
        spanFermCount.textContent = sectionCol + ` шт. из них 1 пролет до 4м`
        tdMFerm.textContent = pipeLen + ` м` // кол-во м трубы для изгот. ферм
        tdMRos.textContent = rosPipeLength + ` м`

      } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
        fermCol = sectionCountStd * 2
        sectionCol = sectionCountStd
        const pipeLen = (fermCol * fermLen).toFixed(1)
        rosPipeLength = Math.ceil(pipeLen * 1.5)

        spanFermCount.textContent = sectionCol + ` шт. из них 2 пролетa до 4м`
        tdPcsFerm.textContent = fermCol + ` шт`
        tdMFerm.textContent = pipeLen + ` м`
        tdMRos.textContent = rosPipeLength + ` м`
      }
    }

    getFermCount(length)
  }

  // площадь ангара
  const getArea = () => {
    const area = +width * +length
    spanArea.textContent = area + ` м.кв`
  }

  //*START OF BASE COUNT

  //стойки
  const getColumnCount = (length, height) => {
    const sectionCountStd = Math.ceil(length / 3)
    const lengthRemainder = length % 3
    let innerPcs, innerM = null

    if (lengthRemainder === 0) {
      innerPcs = (sectionCountStd + 1) * 2
      innerM = innerPcs * height
      tdPcsPillars.textContent = innerPcs + ` шт`
      tdMPillars.textContent = innerM + ` м`
    } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height
      tdPcsPillars.textContent = innerPcs + ` шт`
      tdMPillars.textContent = innerM + ` м`
    } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
      innerPcs = sectionCountStd * 2
      innerM = innerPcs * height
      tdPcsPillars.textContent = innerPcs + ` шт`
      tdMPillars.textContent = innerM + ` м`
    }

  }

  //прогоны
  const getProgCount = (length, heigth) => {
    const progSectionCount = Math.ceil(length / 1.5)
    const progHeightRemainder = height % 1.5
    let innerPcs, innerM = null

    if (progHeightRemainder === 0) {
      innerPcs = (progSectionCount + 1)
    }
  }
  const getProgPipeLength = () => {

  }

  //кресты
  const getStrengtheningConstruction = () => {
    const crestCol = length < 60 ? 4 : 6
    const crestPipeLen = ((Math.sqrt(3 ** 2 + height ** 2)) * 2).toFixed(1)
    const crestTotalPipeLen = crestPipeLen * crestCol

    const checksCol = 4
    const checkPipeLen = (Math.sqrt(3 ** 2 + height ** 2)).toFixed(1)
    const checksTotalPipeLen = checkPipeLen * checksCol

    tdPcsCrests.textContent = crestCol + ` шт`
    tdMCrests.textContent = crestTotalPipeLen + ` м`
    tdPcsChecks.textContent = checksCol + ` шт`
    tdMChecks.textContent = checksTotalPipeLen + ` м`
  }

  //*END OF BASE COUNT




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
  getStrengtheningConstruction()
  getColumnCount(length, height)
}

btn.addEventListener('click', count)