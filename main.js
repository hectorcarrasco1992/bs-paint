
    document.querySelector('.color-red').classList.add('red')

    document.querySelector('.color-blue').classList.add('blue')

    document.querySelector('.color-pink').classList.add('pink')

    document.querySelector('.color-purple').classList.add('purple')

    document.querySelector('.color-green').classList.add('green')

    document.querySelector('.color-white').classList.add('white')

    
    
    // event listeners//
    document.querySelector('.color-red').addEventListener('click', addColor)
    document.querySelector('.color-blue').addEventListener('click',addColor)
    document.querySelector('.color-pink').addEventListener('click',addColor)
    document.querySelector('.color-purple').addEventListener('click',addColor)
    document.querySelector('.color-green').addEventListener('click',addColor)
    document.querySelector('.color-white').addEventListener('click',addColor)
    
    // One function that:
    // * Checks what palette square was clicked.
    // * Checks the color class of that palette square.
    // * Adds that color class to the current brush.
    const currentBrush = document.querySelector('.current-brush')
    function addColor(event){
        document.querySelector('.current-brush').classList.replace(currentBrush.classList[1], event.target.classList[2])
        
        
    }

    const canvasSquare = document.querySelectorAll('.square')

    for (let i =0;i<canvasSquare.length;i++){
        canvasSquare[i].addEventListener('click',changeSquare)

    }

    function changeSquare(event){
        event.target.classList.replace(event.target.classList[1],currentBrush.classList[1])
    }
    

    