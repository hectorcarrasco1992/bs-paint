
    document.querySelector('.color-1').classList.add('red')

    document.querySelector('.color-2').classList.add('blue')

    document.querySelector('.color-3').classList.add('pink')

    document.querySelector('.color-4').classList.add('purple')

    document.querySelector('.color-5').classList.add('green')

    
    
    // event listeners//
    document.querySelector('.color-1').addEventListener('click', addBlue('.current-brush'))
    // document.querySelector('.color-2').addEventListener('click',addBlue('.current-brush'))
    // document.querySelector('.color-3').addEventListener('click',addPink)
    // document.querySelector('.color-4').addEventListener('click',addPurple)
    // document.querySelector('.color-5').addEventListener('click',addGreen)
    // document.querySelector('.square').addEventListener('click',paint)
    
    function addRed(classNamez){
        // document.querySelector('.current-brush').classList.remove('')
        
        document.querySelector(classNamez).classList.toggle('red')
    }

    function addBlue(classNamez){
        
        document.querySelector(classNamez).classList.toggle('blue')

    }
    function addPink(className){
        
        document.querySelector(className).classList.toggle('pink')

    }
    function addPurple(className){
        document.querySelector(className).classList.toggle('purple')

    }
    function addGreen(className){
        document.querySelector(className).classList.toggle('green')

    }

    function paint(){
        
        
        
        
            
    }
    