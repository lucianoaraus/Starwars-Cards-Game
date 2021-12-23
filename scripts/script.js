//PROYECTO FINAL - Simulador de batalla Star Wars

//Constructor y funciones
class Campeon {
  constructor(nombre, daño, vida, bando, id, img) {
    this.nombre = nombre;
    this.daño = daño;
    this.vida = vida;
    this.bando = bando;
    this.id = id;
    this.img = img;
  }
  atacar(enemigo) {
    enemigo.vida -= this.daño;
  }
  usarHabilidad() {
    if (this.bando == "Oscuridad") {
      this.daño += 150;
      /* console.log("Daño +150");
      console.log("Tu daño ascendio a " + this.daño); */
    } else {
      this.vida += 300;
      /* console.log("Vida +300");
      console.log("Tu vida ascendio a " + this.vida); */
    }
  }

  habilidadEspecial() {
    //Si es Darth Vader o Luke, tendria una habilidad especial
    if (this.nombre == "Luke Skywalker") {
      this.vida += 750;
      /* console.log("Usaste Habilidad Especial!");
      console.log("Vida +750");
      console.log("Tu vida ascendio a " + this.vida); */
    } else if (this.nombre == "Darth Vader") {
      this.daño += 1000;
      /* console.log("Usaste Habilidad Especial!");
      console.log("LORD ETERNO");
      console.log("Daño aumentado +1000");
      console.log("Tu daño ascendio a " + this.daño); */
    }
  }
}

//Instanciacion campeones
let yoda = new Campeon(
  "Maestro Yoda",
  110,
  1500,
  "Luz",
  "yoda-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/yoda.png"
);
let luke = new Campeon(
  "Luke Skywalker",
  120,
  1100,
  "Luz",
  "luke-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/luke.jpg"
);
let leia = new Campeon(
  "Princesa Leia",
  90,
  1000,
  "Luz",
  "leia-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/leia.jpg"
);
let vader = new Campeon(
  "Darth Vader",
  150,
  1200,
  "Oscuridad",
  "vader-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/vader.jpg"
);
let obiWan = new Campeon(
  "Obi Wan",
  105,
  1100,
  "Luz",
  "obi-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/obi-wan.jpg"
);
let boba = new Campeon(
  "Boba Fett",
  100,
  1100,
  "Oscuridad",
  "boba-button",
  "https://raw.githubusercontent.com/lucianoaraus/DOM_Coderhouse/main/assets/boba.png"
);

const campeones = [yoda, luke, leia, vader, obiWan, boba];
const idCampeones = campeones.map((champ) => champ.id);

//Listeners
//let jugadorUno = document.getElementsByClassName("seleccionar");
//console.log(jugadorUno);

let jugadores = []; //i:0 = "Player 1"; i:1 = "Player 2"; TODO: Maximo 2 campeones

function buscarJugadores(clicked_id) {
  jugadores.push(campeones.find((c) => c.id == clicked_id));
  //puede haber una condicion de carrera -> probar
  if (jugadores.length == 2) {
    startGame();
  }
}

const attack = (attacker, attacked) => {
  attacker.atacar(attacked);
};

/* function attack(attacker, attacked){
  attacker.atacar(attacked);
}; */

function startGame() {
  //TODO:
  //- No carga correctamente las imagenes de cada campeon
  //- No funcionan correctamente las funciones
  //- Inicia la pelea con un ataque del P1 hacia el P2

  console.log("entro");
  const content = document.querySelector("#content");
  console.log("content:", content);
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(playerOne);
  console.log(playerTwo);

  newContent.innerHTML = `
    <div id="content">
      <!--PlayerOne-->
      <div class="card">
        <img class="card-image" src="${playerOne.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerOne.nombre}</h2>
          <span class="card-info">Ataque: ${playerOne.daño} | Vida: ${
    playerOne.vida
  }
          </span>
          <!-- Ataque -->
          <button onClick="${attack(playerOne, playerTwo)}">Atacar</button>

          <!-- Habilidad -->
          <button onClick="playerOne.usarHabilidad()">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button onClick="playerOne.habilidadEspecial()">Usar Habilidad Especial</button>

        </div>
      </div>
      <!--PlayerTwo-->
      <div class="card">
        <img class="card-image" src="${playerTwo.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerTwo.nombre}</h2>
          <span class="card-info">Ataque: ${playerTwo.daño} | Vida: ${
    playerTwo.vida
  }
          </span>
          <!-- Ataque -->
          <button onClick="${attack(playerTwo, playerOne)}">Atacar</button>

          <!-- Habilidad -->
          <button onClick="playerTwo.usarHabilidad()">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button onClick="playerTwo.habilidadEspecial()">Usar Habilidad Especial</button>

        </div>
      </div>
    </div>
    `;

  content.parentNode.replaceChild(newContent, content);
}
