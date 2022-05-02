// Tome el javascript de la entrega anterior y lo usaré para representar estos datos en el DOM. 
// Concepto: Le presentamos al usuario una lista de canciones, compuesta por un array de objetos, las cuales el usuario a traves de ingresar algunos datos alterará y se le serán presentados de vuelta. 

/// Array de 20 canciones, con los siguientes campos: id, name, autor, genero y tiempo
    // Tiempo = segundos => hace falta establecer una funcion para presentarlos en formato mm:ss    #TOFIX#
    const songs = [
        {   id:1 , name: "Romantic Movies", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 228   },
        {   id:2 , name: "En cuatro", autor: "Amigos Invisibles", genero:"Rock", tiempo: 240   },
        {   id:3 , name: "Toxic", autor: "Britney Spears", genero:"Pop", tiempo: 190      },
        {   id:4 , name: "The Feels", autor: "TWICE", genero:"KPOP", tiempo: 190      },
        {   id:5 , name: "Patiently Waiting (ft Eminem)", autor: "50 Cent", genero:"Rap", tiempo: 270  },
        {   id:6 , name: "Sunny Afternoon", autor: "Drake Bell", genero:"Rock", tiempo: 198     },
        {   id:7 , name: "Till I Collapse", autor: "Eminem", genero:"Rap", tiempo: 298    },
        {   id:8 , name: "Bad Habits", autor: "Ed Sheeran", genero:"Pop", tiempo: 234  },
        {   id:9 , name: "Lie", autor: "BTS", genero:"KPOP", tiempo: 144   },
        {   id:10 , name: "I Will Survive", autor: "Hermes House Band", genero:"Pop", tiempo: 318   },
        {   id:11 , name: "Still D.R.E. (ft. Snoop Dog)", autor: "Dr. Dre", genero:"Rap", tiempo: 201  },
        {   id:12 , name: "Love Again", autor: "Dua Lipa", genero:"Pop", tiempo: 168    },
        {   id:13 , name: "Come With Me Now", autor: "Kongos", genero:"Rock", tiempo: 204   },
        {   id:14 , name: "Bellacoso", autor: "Residente", genero:"Rap", tiempo: 246    },
        {   id:15 , name: "Close Up On Your Lips", autor: "Kay Vs the Moon", genero:"Rock", tiempo: 144    },
        {   id:16 , name: "Torero", autor: "Chayanne", genero:"Pop", tiempo: 225     },
        {   id:17 , name: "How u like that", autor: "BLACKPINK", genero:"KPOP", tiempo: 246     },
        {   id:18 , name: "Energetic", autor: "Wanna One", genero:"KPOP", tiempo: 222    },
        {   id:19 , name: "Ko Ko Bop", autor: "EXO", genero:"KPOP", tiempo: 288    },
        {   id:20 , name: "The Bidding", autor: "Tally Hall", genero:"Rock", tiempo: 192   },
    ]
        
    // Toda esta sección, toma un array y sus distintos valores (los cuales no he logrado generalizar) y los imprime en un string que puedes llamar para colocarlo facilmente en un console.log. Esto es solo para presentarlo de una forma mas estetica al usuario.
    let printedMenu;
    const songMenu = [];
    function printingMenu (valor) {
        songMenu.splice(0, songMenu.length);
        for (const item of valor ) {
            let selector = 0
            // newArray recolecta los valores de los objetos en el array
            const newArray = [item.id, item.name, item.autor, item.genero, item.tiempo ];
            
            // Luego uso .push para unirlos todos en una string dentro de menu, los valores de los objetos son recolectados y guardados como strings.
            songMenu.push(item.id + " - " + item.name + " by " + item.autor + " - Genero: " + item.genero + " Duración: " + item.tiempo);
            
        } 
        // Luego los strings de arriba, se unen, separados por un \n y ahora es mucho mas facil presentarlos de una manera facil y visual al usuario. 
        printedMenu = songMenu.join("\n");
        console.log(printedMenu)
    }
    printingMenu(songs);
    
    // #######################################################################
    // FLUJO DEL USUARIO #####################################################
    // #######################################################################
    
    // Se le presenta la playlist general al usuario.
    
    let message = document.getElementById("playlist");
    message.innerText = "Por favor ayudanos a crear una playlist ideal para nuestros castorescuchas. \n" + "\nEsta es nuestra playlist actual: \n" + printedMenu;

    alert("Bienvenido a radio CH-Jack, la unica radio enfocada 100% en musica para castores.");
    let userGenre;
    let songFilter; 

    const getValueInput = () => {
        let inputValue = document.getElementById("genre").value; 
        userGenre = inputValue;
        console.log(userGenre);
        let eraseArea = document.getElementById("actionArea");
        eraseArea.remove();
        songFilter = songs.filter(   (el) => el.genero.includes(userGenre)  );
        console.log(songFilter);
        newFilteredPlaylist();
      }

    let userTimeAdd

    const newFilteredPlaylist = () => {
        let newPlaylist = document.createElement("section");
        newPlaylist.className = "actionArea";
        newPlaylist.innerHTML = "<p>Los castores detestan cuando una canción termina y empieza la siguiente inmediatamente. <br><br>¿Cuantos segundos deberiamos esperar entre canción y canción?</p>" + 
        "<input type='text' id='timeAdditionInput'>" +
        "<button id='timeAdditionButton' type='button'  onclick='getTimeInput()'> click me!! </button> ";
        document.body.append(newPlaylist);
        console.log("milestone 1");
    }

    let getTimeInput = () => {
        console.log("milestone 2")
        let timeAddedByUser = document.getElementById("timeAdditionInput").value;
        userTimeAdd = timeAddedByUser;
        console.log("userTimeAdd is " + userTimeAdd)
        let eraseArea = document.getElementById("actionArea");
        console.log("milestone 3");
        songFilter = songFilter.map( (el) => {
            return {
                id: el.id,
                name: el.name,
                autor: el.autor,
                genero: el.genero,
                tiempo: el.tiempo + parseInt(userTimeAdd),
            }
        } );
        console.log("milestone 4");
        console.log(songFilter);    
        printingMenu(songFilter);  
        console.log("milestone 5");  
        finalPlaylist();
    }

    const finalPlaylist = () => {
        console.log("milestone 6");  
        let eraseTimeInputs = document.querySelector(".actionArea p");
        eraseTimeInputs.remove();
        eraseTimeInputs = document.querySelector(".actionArea input");
        eraseTimeInputs.remove();
        eraseTimeInputs = document.querySelector(".actionArea button");
        eraseTimeInputs.remove();
        console.log("milestone 7");  
        printingFinalPlaylist = document.querySelector(".actionArea");
        console.log("milestone 8");  
        printingFinalPlaylist.innerHTML = "<p id='userPlaylist'></p>"
        console.log("milestone 9");  
        f = document.getElementById("userPlaylist");
        message.innerText = "¡Excelente! Gracias a ti por ahora contamos con esta playlist para los castores:\n" + printedMenu;
        console.log("milestone 10");  
    }


