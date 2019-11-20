
    document.querySelector('.color-1').classList.add('red')

    document.querySelector('.color-2').classList.add('blue')

    document.querySelector('.color-3').classList.add('pink')

    document.querySelector('.color-4').classList.add('purple')

    document.querySelector('.color-5').classList.add('green')

    const brush = document.querySelector('.current-brush')
    
    // event listeners//
    document.querySelector('.color-1').addEventListener('click',addRed)
    document.querySelector('.color-2').addEventListener('click',addBlue)
    document.querySelector('.color-3').addEventListener('click',addPink)
    document.querySelector('.color-4').addEventListener('click',addPurple)
    document.querySelector('.color-5').addEventListener('click',addGreen)
    document.querySelector('.square').addEventListener('click',paint)
    
    function addRed(){
        // document.querySelector('.current-brush').classList.remove('')
        
        document.querySelector('.current-brush').classList.toggle('red')
    }

    function addBlue(){
        
        document.querySelector('.current-brush').classList.toggle('blue')

    }
    function addPink(){
        
        document.querySelector('.current-brush').classList.toggle('pink')

    }
    function addPurple(){
        document.querySelector('.current-brush').classList.toggle('purple')

    }
    function addGreen(){
        document.querySelector('.current-brush').classList.toggle('green')

    }

    function paint(){
        if(brush.classList.contains('red')){
            document.querySelector('.square').classList.add('red')
        }
            while(brush.classList.contains(blue)){
                document.querySelector('.square').classList.add('blue')
            }
        
    }
