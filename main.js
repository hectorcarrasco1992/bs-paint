
    document.querySelector('.color-1').classList.add('red')

    document.querySelector('.color-2').classList.add('blue')

    document.querySelector('.color-3').classList.add('pink')

    document.querySelector('.color-4').classList.add('purple')

    document.querySelector('.color-5').classList.add('green')

    
    
    // event listeners//
    document.querySelector('.color-1').addEventListener('click', addRed('.current-brush'))
    document.querySelector('.color-2').addEventListener('click',addBlue('.current-brush'))
    document.querySelector('.color-3').addEventListener('click',addPink('.current-brush'))
    document.querySelector('.color-4').addEventListener('click',addPurple('.current-brush'))
    document.querySelector('.color-5').addEventListener('click',addGreen('.current-brush'))
    document.querySelector('.square').addEventListener('click',paint)
    
    function addRed(classNameZ){
        // document.querySelector('.current-brush').classList.remove('')
        if(document.querySelector(classNameZ).classList.contains('.red')===false){

            document.querySelector(classNameZ).classList.add('red')
        }
    }

    function addBlue(classNameZ){
        
        document.querySelector(classNameZ).classList.toggle('blue')

    }
    function addPink(classNameZ){
        
        document.querySelector(classNameZ).classList.toggle('pink')

    }
    function addPurple(classNameZ){
        document.querySelector(classNameZ).classList.toggle('purple')

    }
    function addGreen(classNameZ){
        document.querySelector(classNameZ).classList.toggle('green')

    }

    function paint(){
        
        
        
        
            
    }
    