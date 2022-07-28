const container = document.querySelector('.container')

const addingDivs = (amount) => {

   for (let i = 0; i < amount; i++) {

      const square = document.createElement('div')
      square.className = 'square'
      
      container.appendChild(square)   
   }
   
}

container.style.width = '384px'

addingDivs(256) 
// amount of squares ** 2


const squares = document.querySelectorAll('.square')

// const color = depends on the button clicked

squares.forEach((square) => {

   square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black'
   })
})