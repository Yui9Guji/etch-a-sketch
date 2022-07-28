const container = document.querySelector('.container')

const addingDivs = (amount) => {

   for (let i = 0; i < amount; i++) {

      const square = document.createElement('div')
      square.className = 'square'
      
      container.appendChild(square)   
   }
   
}

addingDivs(256)