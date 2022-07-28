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

         const node = document.querySelector('.container')

         const childList = document.querySelectorAll('.square')


         // console.log(childList.length)

         if (childList != 0) {
            while (childList.length != 0) {
                     
               const child = document.querySelector('.square')
   
               node.removeChild(child)
            }
         }

         console.log(node)

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
            container.style.width = '384px'   
         }
         addingSq()    
      }
      
      else if (button.textContent === '32x32') {

         for (let i = 0; i < 1024; i++) {

            const square = document.createElement('div')
            square.className = 'square'
            square.style.padding = '8px'

            container.appendChild(square)
            container.style.width = '512px'   
         }
         addingSq()    
      }

   })
   
})

