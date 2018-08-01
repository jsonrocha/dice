const outcome = () => {
  console.log('Deciding roll')

  const generateRandomNumber = () => {
    return Math.ceil(Math.random() * 10)
  }

  const randomPick = Math.ceil(Math.random() * 10)
  console.log(randomPick)


const newSpan = document.createElement('span')
newSpan.textContent = randomPick
document.querySelector('.output').appendChild(newSpan)
}

document.querySelector('.roll').addEventListener('click', outcome)
