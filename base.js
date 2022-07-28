const container = document.querySelector('.container')


const sizing = document.querySelectorAll('.grid')

function addingSq() {
   
   const squares = document.querySelectorAll('.square')
   // const color = depends on the button clicked

   squares.forEach((square) => {

      square.addEventListener('mouseover', () => {
         square.style.backgroundColor = 'black'
      })

   })
   
}

sizing.forEach((button) => {
   
   button.addEventListener('click', () => {

      if (button.textContent === '16x16') {

         for (let i = 0; i < 256; i++) {

            const square = document.createElement('div')
            square.className = 'square'
            square.style.padding = '12px' 

            container.appendChild(square)
            container.style.width = '384px'
            
            
         }
         addingSq()  
      }
      
      else if (button.textContent === '8x8') {

         for (let i = 0; i < 64; i++) {

            const square = document.createElement('div')
            square.className = 'square'
            square.style.padding = '24px'   

            container.appendChild(square)
            container.style.width = '576px'   
         }
         addingSq()    
      }
      
      else if (button.textContent === '32x32') {

         for (let i = 0; i < 1024; i++) {

            const square = document.createElement('div')
            square.className = 'square'
            container.appendChild(square)
            container.style.width = '768px'   
         }
         addingSq()    
      } 
   })
   
})

