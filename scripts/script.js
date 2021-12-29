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

let jugadores = [];

function buscarJugadores(clicked_id) {
  console.log("Player", jugadores.length, clicked_id);
  jugadores.push(campeones.find((c) => c.id == clicked_id));
  if (jugadores.length == 2) {
    startGame();
  }
}

//Forma 1
const attack = (attacker, attacked) => {
  attacker.atacar(attacked);
};

//Forma 2
//function attack(attacker, attacked){
//  attacker.atacar(attacked);
//};

function startGame() {
  //TODO:
  //- No funcionan correctamente las funciones e inicia la pelea con un ataque del P1 hacia el P2

  console.log("entro");
  const content = document.querySelector("#content");
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(playerOne);
  console.log(playerTwo);

  //definida en linea
  const playerAttack = (p1, p2) => {
    p1.atacar(p2);
  };

  newContent.innerHTML = `
    <div id="content">
      <!--PlayerOne-->
      <div class="card">
        <img class="card-image" src="${playerOne.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerOne.nombre}</h2>
          <span class="card-info">Ataque: ${playerOne.daño} | Vida: ${playerOne.vida}
          </span>
          <!-- Ataque -->
          <button class="ejecutar-ataque" onClick="playerAttack(playerOne,playerTwo)">Atacar</button>

          <!-- Habilidad -->
          <button class="ejecutar-habilidad">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button class="ejecutar-habilidad-especial">Usar Habilidad Especial</button>

        </div>
      </div>
      <!--PlayerTwo-->
      <div class="card">
        <img class="card-image" src="${playerTwo.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerTwo.nombre}</h2>
          <span class="card-info">Ataque: ${playerTwo.daño} | Vida: ${playerTwo.vida}
          </span>
          <!-- Ataque -->
          <button class="ejecutar-ataque">Atacar</button>

          <!-- Habilidad -->
          <button class="ejecutar-habilidad">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button class="ejecutar-habilidad-especial">Usar Habilidad Especial</button>

        </div>
      </div>
    </div>
  `;

  content.parentNode.replaceChild(newContent, content);

  $("#ejecutar-ataque").click(function () {
    console.log("entro ataque");
  });
}

//Ejecucion de scripts JQuery
$("#yoda-button").click(function () {
  buscarJugadores(this.id);
});

$("#luke-button").click(function () {
  buscarJugadores(this.id);
});

$("#leia-button").click(function () {
  buscarJugadores(this.id);
});

$("#boba-button").click(function () {
  buscarJugadores(this.id);
});

$("#vader-button").click(function () {
  buscarJugadores(this.id);
});

$("#obi-button").click(function () {
  buscarJugadores(this.id);
});
