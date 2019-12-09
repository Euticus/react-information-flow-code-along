// Nothing in this file needs to be altered (but it is your solution so feel free to!)
export function getRandomColor() {
  // this function generates a random hex color from the letters below
  const letters = '123456789ABCDEF' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 11)]
  }
  return color
}
