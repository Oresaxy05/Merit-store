export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter} &mdash; Price: ₦${counter * 1000}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
