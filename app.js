const spanArea = document.querySelector('.res-area')
const spanFermLength = document.querySelector('.res-ferm-length')
const spanFermCount = document.querySelector('.res-ferm-count')
const spanPipeCount = document.querySelector('.res-ferm-pipe-count')
const spanPipeSnakeCount = document.querySelector('.res-ferm-snake-pipe-count')

const btn = document.querySelector('.button')

const count = () => {
  const width = document.getElementById('floatWidth').value
  const length = document.getElementById('floatLength').value
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
    console.log("🚀 ~ file: app.js ~ line 25 ~ count ~ sectionCountStd", sectionCountStd)
    const lengthRemainder = length % 3
    console.log("🚀 ~ file: app.js ~ line 27 ~ count ~ lengthRemainder", lengthRemainder)

    if (lengthRemainder === 0) {
      spanFermCount.textContent = sectionCountStd + 1 + ' шт'
    } else if (lengthRemainder !== 0 && lengthRemainder <= 1) {
      spanFermCount.textContent = sectionCountStd + ` шт. из них 1 пролет до 4м`
    } else if (lengthRemainder !== 0 && lengthRemainder > 1 && lengthRemainder <= 2) {
      spanFermCount.textContent = sectionCountStd + ` шт. из них 2 пролетa до 4м`
    }
  }

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
}

btn.addEventListener('click', count)