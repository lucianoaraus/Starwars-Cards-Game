//PROYECTO FINAL - Simulador de batalla Star Wars
//TODO:
//- Dark mode (jquery)

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
    console.log(this.nombre, "ataco a", enemigo.nombre);
    enemigo.vida -= this.daño;
    console.log(
      this.nombre,
      "LP:",
      this.vida,
      "|",
      enemigo.nombre,
      "LP:",
      enemigo.vida
    );
    return enemigo.vida;
  }
  usarHabilidad() {
    if (this.bando == "Oscuridad") {
      this.daño += 150;
      console.log(this.nombre, "Daño +150");
      console.log("Tu daño ascendio a " + this.daño);
      return this.daño;
    } else {
      this.vida += 300;
      console.log(this.nombre, "Vida +300");
      console.log("Tu vida ascendio a " + this.vida);
      return this.vida;
    }
  }

  habilidadEspecial() {
    //Si es Darth Vader o Luke, tendria una habilidad especial
    if (this.nombre == "Luke Skywalker") {
      this.vida += 750;
      console.log("Usaste Habilidad Especial!");
      console.log("Vida +750");
      console.log("Tu vida ascendio a " + this.vida);
      return this.vida;
    } else if (this.nombre == "Darth Vader") {
      this.daño += 1000;
      console.log("Usaste Habilidad Especial!");
      console.log("LORD ETERNO");
      console.log("Daño aumentado +1000");
      console.log("Tu daño ascendio a " + this.daño);
      return this.daño;
    } else {
      console.log("No tiene habilidad especial");
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

/* function gameOver(){
  if(playerOne.vida || player){}
} */

function startGame() {
  console.log("entro");
  const content = document.querySelector("#content");
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(playerOne);
  console.log(playerTwo);

  newContent.innerHTML = `
    <div id="content">
      <!--PlayerOne-->
      <div id="card-player-one" class="card">
        <img class="card-image" src="${playerOne.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerOne.nombre}</h2>
          <span class="card-info-p1">Ataque: ${playerOne.daño} | Vida: ${playerOne.vida}
</span>
          <!-- Ataque -->
          <button id="ejecutar-ataque-p1">Atacar</button>

          <!-- Habilidad -->
          <button id="ejecutar-habilidad-p1">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button id="ejecutar-habilidad-especial-p1">Usar Habilidad Especial</button>

        </div>
      </div>
      <!--PlayerTwo-->
      <div id="card-player-two" class="card">
        <img class="card-image" src="${playerTwo.img}"/>
        <div class="card-content">
          <h2 class="card-title">${playerTwo.nombre}</h2>
          <span >Ataque: ${playerTwo.daño} | </span><span id="card-info-p2">Vida: ${playerTwo.vida}
          </span>
          <!-- Ataque -->
          <button id="ejecutar-ataque-p2">Atacar</button>

          <!-- Habilidad -->
          <button id="ejecutar-habilidad-p2">Usar Habilidad</button> 

          <!-- Habilidad Especial (si tiene)-->
          <button id="ejecutar-habilidad-especial-p2">Usar Habilidad Especial</button>

        </div>
      </div>
    </div>
  `;

  content.parentNode.replaceChild(newContent, content);

  // Funciones para el p1
  const player1Attack = (p1, p2) => {
    const cardInfoP2 = document.getElementById("card-info-p2");
    cardInfoP2.innerText = `Vida: ${p1.atacar(p2)}`;
  };

  const player1Ability = (p1) => {
    const cardInfoP1 = document.getElementById("card-info-p1");
    if (playerOne.bando == "Oscuridad") {
      console.log("entro y el p1 es oscuro");
      cardInfoP1.innerText = `Ataque: ${p1.usarHabilidad()}`;
    } else {
      console.log("entro y el p1 es luz");
      cardInfoP1.innerText = `Vida: ${p1.usarHabilidad()}`;
    }
  };

  const player1SpecialAbility = (p1) => {
    if (playerOne.bando == "Oscuridad") {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Daño: ${p1.habilidadEspecial()}`;
    } else {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Vida: ${p1.habilidadEspecial()}`;
    }
  };

  // Funciones para el p2
  const player2Attack = (p2, p1) => {
    const cardInfoP1 = document.getElementById("card-info-p1");
    cardInfoP1.innerText = `Vida: ${p2.atacar(p1)}`;
  };

  const player2Ability = (p1) => {
    const cardInfoP1 = document.getElementById("card-info-p1");
    if (playerOne.bando == "Oscuridad") {
      console.log("entro y el p1 es oscuro");
      cardInfoP1.innerText = `Ataque: ${p1.usarHabilidad()}`;
    } else {
      console.log("entro y el p1 es luz");
      cardInfoP1.innerText = `Vida: ${p1.usarHabilidad()}`;
    }
  };

  const player2SpecialAbility = (p1) => {
    if (playerOne.bando == "Oscuridad") {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Daño: ${p1.habilidadEspecial()}`;
    } else {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Vida: ${p1.habilidadEspecial()}`;
    }
  };

  //Listeners de ataques y funciones JQuery
  //Player 1
  $("#ejecutar-ataque-p1").click(function () {
    player1Attack(playerOne, playerTwo);
  });

  $("#ejecutar-habilidad-p1").click(function () {
    player1Ability(playerOne);
  });

  $("#ejecutar-habilidad-especial-p1").click(function () {
    player1SpecialAbility(playerOne);
  });
  //Player 2
  $("#ejecutar-ataque-p2").click(function () {
    player2Attack(playerTwo, playerOne);
    // Cambiar valores del HTML
  });

  $("#ejecutar-habilidad-p2").click(function () {
    player2Ability(playerTwo);
    // Cambiar valores del HTML
  });

  $("#ejecutar-habilidad-especial-p2").click(function () {
    player2SpecialAbility(playerTwo);
    // Cambiar valores del HTML
  });
}
