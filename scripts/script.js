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
  console.log("Player", jugadores.length, jugadores[length].nombre);
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

$("#vader-button").click(function () {
  buscarJugadores(this.id);
});

$("#boba-button").click(function () {
  buscarJugadores(this.id);
});

$("#obi-button").click(function () {
  buscarJugadores(this.id);
});

function startGame() {
  const content = document.getElementById("cards-content");
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(jugadores);

  //WIP:
  const gameOver = (p1, p2) => {
    if (p1.vida <= 0) {
      console.log(playerTwo.nombre + " Gana");
    } else if (p2.vida <= 0) {
      console.log(playerOne.nombre + " Gana");
    }
  };

  gameOver(playerOne, playerTwo);

  newContent.innerHTML = `
  <div id="battle-cards-content" class="album py-5 bg-light" style="display: none">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        <!-- Player One  -->
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="${playerOne.img}"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title">${playerOne.nombre}</h2>
              <p class="card-text">algo aca? 🤔</p>
              <small class="text-muted" id="card-info-p1"
                  >Damage: ${playerOne.daño} | Lifepoints: ${playerOne.vida}</small
                >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <!-- Attack Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-ataque-p1"
                  >
                    Attack
                  </button>
                </div>
                <!-- Abillity Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-habilidad-p1"
                  >
                    Abillity
                  </button>
                </div>
                <!-- Ultimate Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-habilidad-especial-p1"
                  >
                    Ultimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Player Two  -->
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="${playerTwo.img}"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title">${playerTwo.nombre}</h2>
              <p class="card-text">algo aca? 🤔</p>
              <small class="text-muted" id="card-info-p2"
                  >Damage: ${playerTwo.daño} | Lifepoints: ${playerTwo.vida}</small
                >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <!-- Attack Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-ataque-p2"
                  >
                    Attack
                  </button>
                </div>
                <!-- Abillity Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-habilidad-p2"
                  >
                    Abillity
                  </button>
                </div>
                <!-- Ultimate Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    id="ejecutar-habilidad-especial-p2"
                  >
                    Ultimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  `;

  content.parentNode.replaceChild(newContent, content);

  // Efecto/Animacion con JQuery
  $("#battle-cards-content").fadeIn(1000);

  // Funciones para el p1
  const player1Attack = (p1, p2) => {
    const cardInfoP2 = document.getElementById("card-info-p2");
    cardInfoP2.innerText = `Damage: ${p2.daño} | Lifepoints: ${p1.atacar(p2)}`;
  };

  const player1Ability = (p1) => {
    const cardInfoP1 = document.getElementById("card-info-p1");
    if (playerOne.bando == "Oscuridad") {
      cardInfoP1.innerText = `Damage: ${p1.usarHabilidad()} | Lifepoints: ${
        p1.vida
      }`;
    } else {
      cardInfoP1.innerText = `Damage: ${
        p1.daño
      } | Lifepoints: ${p1.usarHabilidad()}`;
    }
  };

  const player1SpecialAbility = (p1) => {
    if (playerOne.bando == "Oscuridad") {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Damage: ${p1.habilidadEspecial()} | Lifepoints: ${
        p1.vida
      }`;
    } else {
      const cardInfoP1 = document.getElementById("card-info-p1");
      cardInfoP1.innerText = `Damage: ${
        p1.daño
      } | Lifepoints: ${p1.habilidadEspecial()}`;
    }
  };

  // Funciones para el p2
  const player2Attack = (p2, p1) => {
    const cardInfoP1 = document.getElementById("card-info-p1");
    cardInfoP1.innerText = `Damage: ${p1.daño} | Lifepoints: ${p2.atacar(p1)}`;
  };

  const player2Ability = (p2) => {
    const cardInfoP2 = document.getElementById("card-info-p2");
    if (playerTwo.bando == "Oscuridad") {
      cardInfoP2.innerText = `Damage: ${p2.usarHabilidad()} | Lifepoints: ${
        p2.vida
      }`;
    } else {
      cardInfoP2.innerText = `Damage: ${
        p2.daño
      } | Lifepoints: ${p2.usarHabilidad()}`;
    }
  };

  const player2SpecialAbility = (p2) => {
    if (playerTwo.bando == "Oscuridad") {
      const cardInfoP2 = document.getElementById("card-info-p2");
      cardInfoP2.innerText = `Damage: ${p2.habilidadEspecial()} | Lifepoints: ${
        p2.vida
      }`;
    } else {
      const cardInfoP2 = document.getElementById("card-info-p2");
      cardInfoP2.innerText = `Damage: ${
        p2.daño
      } | Lifepoints: ${p2.habilidadEspecial()}`;
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
  });

  $("#ejecutar-habilidad-p2").click(function () {
    player2Ability(playerTwo);
  });

  $("#ejecutar-habilidad-especial-p2").click(function () {
    player2SpecialAbility(playerTwo);
  });
}
