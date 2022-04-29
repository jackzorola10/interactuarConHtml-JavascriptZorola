// Tome el javascript de la entrega anterior y lo usaré para representar estos datos en el DOM. 
// Concepto: Le presentamos al usuario una lista de canciones, compuesta por un array de objetos, las cuales el usuario podra filtrar y que despues ordenaremos. Ademas, hacemos que estas crucen por varias funciones para presentarlas mejor y extraer ciertos datos. Finalmente extraeremos una playlist final con un acumulado de tiempo que tomaria reproducirla por completo. 

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
    
    
    // Constructor de canciones, le permitiremos al usuario ingresar una nueva canción a la playlist la cual acomodaremos junto con las demas. 
    class newSong {
        constructor(id, name, autor, genero, tiempo) {
            this.id = songFilter.length + 1
            this.name = userSongName;
            this.autor = userAutor;
            this.genre = userGenre;
            this.tiempo = userTiempo;
        }
    }
    
    
    
    
    // Funcion que toma la playlist y la reordena segun el orden alfabetico del nombre.
        // Podríamos hacerla un poco mas generica y permitir que cambien de valor a ordenar, no solo name #TOFIX#
        // Necesitamos hacer una validación porque parece ser que si el usuario ingresa un nombre que inicia con minuscula no lo ordena bien. #TOFIX# 
    function alphabetical (array) {
        array.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a es igual a b
            return 0;
        })
    }
    
    
    
    
    
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
    alert("Bienvenido a radio CH-Jack, la unica radio enfocada 100% en musica para castores.");
    alert("Por favor ayudanos a crear una playlist ideal para nuestros castorescuchas. \n" + "Esta es nuestra playlist actual: \n\n" + printedMenu)
    
    // Se le pide que escoga un genero para filtrar la playlist: 4 opciones posibles Rock, Pop, KPOP, Rap.
    let userGenre = prompt("A los castores no les gusta que mezclemos generos, podrías seleccionar un genero para ellos?\n\n" + "Ej. Rock, Pop, KPOP, Rap");
    console.log("userGenre is" + userGenre);
    
            // VALIDACIÓN DE INPUT - Asegurarnos que solo ingrese 1 de los 4 valores permitidos. (Aún no he encontrado una forma de generalizar esto)
                let userGenreLowerCase = userGenre.toLowerCase();
                console.log("userGenreLowerCase is " + userGenreLowerCase);
    
                for (let i = 0; i < 1; i++) {
                    userGenreLowerCase = userGenre.toLowerCase();
                    switch(userGenreLowerCase){
                        case "rock":
                            userGenre = "Rock";
                            break;
                        case "pop":
                            userGenre = "Pop";
                            break;
                        case "kpop":
                            userGenre = "KPOP";
                            break;
                        case "rap":
                            userGenre = "Rap"
                            break;
                        default:
                            i--;
                        userGenre = prompt("Por favor ingrese alguno de los 4 generos que tenemos:\n- 'Rock'\n- 'Pop'\n- 'KPOP'\n- 'Rap'");
                        console.log("userGenre iterated is" + userGenre);
                            break;
                        } 
                }
    
    // Filtramos el array por la selección del usuario y creamos uno nuevo a partir de este. 
    let songFilter = songs.filter(   (el) => el.genero.includes(userGenre));
    console.log(songFilter);
    
    
    // Solicite al usuario que me dijera un tiempo extra para añadir entre canción y canción, que despues agregaré al tiempo de duración de cada canción.
    let userTimeAdd = prompt("Los castores detestan cuando una canción termina y empieza la siguiente inmediatamente.\n\n ¿Cuantos segundos deberiamos esperar entre canción y canción?");
    console.log("userTimeAdd is " + userTimeAdd)
    // Falta validación para number
    
    
    // Use el mapping para reescribir los valores de "tiempo" y sumarle el userTimeAdd que preguntamos arriba.
    songFilter = songFilter.map( (el) => {
        return {
            id: el.id,
            name: el.name,
            autor: el.autor,
            genero: el.genero,
            tiempo: el.tiempo + parseInt(userTimeAdd),
        }
    } );
    console.log(songFilter);
    
    printingMenu(songFilter);
    alert("¡Excelente! por ahora contamos con esta playlist:\n\n" + printedMenu);
    
    // Función que ordena alfabeticamente
    alphabetical(songFilter);
    
    // Función que imprime el array de objetos en un string facilmente imprimible.
    printingMenu(songFilter);
    alert("Ahora... se que esto parecera tonto, pero a los castores realmente les molesta cuando las canciones no van en orden alfabetico. Así que las acomodé aquí abajo en ese orden.\n\n" + printedMenu)
    
    // Hacemos la peticion al usuario como si este constase con una banda/autor ellos mismos y les pedimos datos para pasarselos al constructor al final
    let userAutor = prompt("¿Que dices? ¿Vos tenes una agrupación musical?\nMira, no digas que yo te lo dije, pero... podemos darte algo de promoción aquí ¿ves?, siempre y cuando sea " + userGenre + ", claro esta.\n\n" + "¿Como se llama vuestra agrupación?")
    let userSongName = prompt("¿Como se llama la canción mas pegajosa de " + userAutor + "?")
    let userTiempo = prompt("¿Cuanto dura " + userSongName + " en segundos?");
    
    // Armamos la entrada en el array y la empujamos
    songFilter.push(new newSong(0, userSongName, userAutor, userGenre, userTiempo));
    
    // Volvemos a acomodar e imprimir
    alphabetical(songFilter);
    printingMenu(songFilter);
    
    // Extraemos el tiempo total del array y lo sumamos.
        // Intenté un rato hacer esto con un reduce() pero no pude.
    let runtime = 0;
    for (let i = 0; i < songFilter.length; i++) {
            runtime += parseInt(songFilter[i].tiempo);
    }
    console.log(runtime);
    
    // Presentamos el valor final.
    alert("¡Venga, la he agregado aquí, esos castores van a amarlo! \n\n" + printedMenu + "\n\n El total runtime es de: " + runtime);
    
    // PENDIENTE
        // funcion de conversión de decimales a tiempo
        // validaciones
    