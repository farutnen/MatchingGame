let personajes = []
let selecciones = []
let cartasSeleccionadas = 0;
let puntajes = 0;
let tiempo = 0;
let intentos = 0;

generarMesa()

function cargarPersonajes() {
    personajes = [
        '<img src="img/cartas/1-homero.jpg" width="100%">',
        '<img src="img/cartas/2-abejorro.jpg" width="100%">',
        '<img src="img/cartas/3-dally.jpg" width="100%">',
        '<img src="img/cartas/4-duffman.jpg" width="100%">',
        '<img src="img/cartas/5-snake.jpg" width="100%">',
        '<img src="img/cartas/6-sujeto-historietas.jpg" width="100%">',
        '<img src="img/cartas/7-jefe.jpg" width="100%">',
        '<img src="img/cartas/8-apu.jpg" width="100%">',
        '<img src="img/cartas/9-bart.jpg" width="100%">',
        '<img src="img/cartas/10-millhouse.jpg" width="100%">',
        '<img src="img/cartas/11-marge.jpg" width="100%">',
        '<img src="img/cartas/12-lisa.jpg" width="100%">',
        '<img src="img/cartas/13-burns.jpg" width="100%">',
        '<img src="img/cartas/14-flanders.jpg" width="100%">',
        '<img src="img/cartas/15-tomyDally.jpg" width="100%">',
        '<img src="img/cartas/16-Martin.jpg" width="100%">',
        '<img src="img/cartas/17-TroyMcClue.jpg" width="100%">',
        '<img src="img/cartas/18-joy.jpg" width="100%">',
        '<img src="img/cartas/19-Uther.jpg" width="100%">',
        '<img src="img/cartas/20-todd.jpg" width="100%">',
    ]
}

function generarMesa() {
    cargarPersonajes()
    selecciones = []
    let mesa = document.getElementById("mesa")
    let cartas = []
    for (let i = 0; i < 40; i++) {
        cartas.push(`
        <div class="area-carta" onclick="seleccionarCarta(${i})">
            <div class="carta" id="carta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${personajes[0]}
                </div>
                <div class="cara superior">
                    <img src="img/cartas/0-mazo.jpg" width="100%" heigth="100%">
                </div>
            </div>
        </div>
        `)
            //el método push 
        if (i % 2 == 1) {
            personajes.splice(0, 1)
                //El método splice() me cambia el contenido de personajes eliminando elementos existentes.
                //después agrego otros elementos.
        }
    }
    cartas.sort(() => Math.random() - 0.5)
    mesa.innerHTML = cartas.join(" ")
    let nuevoJuego = document.getElementById("inicio")
    nuevoJuego.innerHTML = 'Nuevo Juego'

    function temporalizador() {
        tiempoAtras = setInterval(() => {
            tiempo--;
            temporalizador.innerHTML = `Tiempo: ${tiempo} segundos`;
            if (tiempo == 0)
                clearInterval(temporalizador);
        }, 1000)
    }

}

function seleccionarCarta(i) {
    let carta = document.getElementById("carta" + i)
    if (carta.style.transform != "rotateY(180deg)") {
        carta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        NoSonParejas(selecciones)
        selecciones = []
    }
}

function NoSonParejas(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let carta1 = document.getElementById("carta" + selecciones[0])
            let carta2 = document.getElementById("carta" + selecciones[1])
            carta1.style.transform = "rotateY(0deg)"
            carta2.style.transform = "rotateY(0deg)"
            cartasSeleccionadas++;
            let intentos = document.getElementById("intentos")
            intentos.innerHTML = `intentos ${cartasSeleccionadas}`;

        } else {
            trasera1.style.opacity = 0;
            trasera2.style.opacity = 0;
            puntajes = puntajes + 10;
            let puntos = document.getElementById("puntaje")
            puntos.innerHTML = `puntaje:  ${puntajes}`;
        }

    }, 1000);

}