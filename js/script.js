const content = document.querySelector('.content');
const coin = document.querySelector('.coin__image');
const countNumber = document.querySelector('.count__number');

let localStorageCount = Number(localStorage.getItem('count')) || 0;
setCount(localStorageCount);

function setCount(count) {
  countNumber.innerText = (count / 100).toFixed(2);
}

let time = Date.now()

coin.addEventListener('click', (e) => {
  if (time + 40 < Date.now()) {
    const coordinateX = e.clientX;
    const coordinateY = e.clientY;

    localStorageCount = Number(localStorage.getItem('count')) || 0;
    const newCount = localStorageCount + 1;
    setCount(newCount)
    createTapCount(coordinateX, coordinateY, newCount)

    localStorage.setItem('count', newCount)
    time = Date.now()
  }
})



function createTapCount(coordinateX, coordinateY, newCount) {
  let tapCount = document.createElement('p');
  tapCount.style.top = coordinateY + 'px';
  tapCount.style.left = coordinateX + 'px';
  tapCount.classList.add('coin__tap');
  tapCount.innerText = '0.01';
  content.append(tapCount);

  setTimeout(() => {
    tapCount.remove();
  }, 501);
}