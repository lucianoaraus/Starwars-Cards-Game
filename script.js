//PROYECTO FINAL - Simulador de batalla Star Wars
//WIP: AJAX - Seguir mirando: https://drive.google.com/file/d/1_ZmK8aT30Mw2Q59b58P8ygEB5AS8af-g/view

//TODO:
//LOCALSTORAGE -> Guardar los jugadores elegidos
//Boton para volver al menu principal
//Ultimate para los demas jugadores? Cubrir undefined

//Constructor y funciones
class Campeon {
  constructor(nombre, daño, vida, bando, id, img, URLGET) {
    this.nombre = nombre;
    this.daño = daño;
    this.vida = vida;
    this.bando = bando;
    this.id = id;
    this.img = img;
  }

  //Nota: Los metodos llevan return ya que sino rompe al cargar el nuevo HTML con los valores actualizados
  atacar(enemigo) {
    console.log(this.nombre, "ataco a", enemigo.nombre);
    if (enemigo.vida <= this.daño) {
      enemigo.vida = 0;
    } else {
      enemigo.vida -= this.daño;
    }
    return enemigo.vida;
  }
  usarHabilidad() {
    if (this.bando == "Oscuridad") {
      this.daño += 150;
      console.log(this.nombre, "Daño +150");
      return this.daño;
    } else {
      this.vida += 300;
      console.log(this.nombre, "Vida +300");
      return this.vida;
    }
  }

  habilidadEspecial() {
    //Si es Darth Vader o Luke, tendria una habilidad especial
    if (this.nombre == "Luke Skywalker") {
      this.vida += 750;
      console.log(this.nombre, "Nueva vida: " + this.vida);
      return this.vida;
    } else if (this.nombre == "Darth Vader") {
      this.daño += 1000;

      //console.log("LORD ETERNO");
      //console.log("Daño aumentado +1000");
      console.log(this.nombre, "Nuevo daño: " + this.daño);
      return this.daño;
    } else {
      console.log("No tiene habilidad especial");
    }
  }
}

//Instanciacion campeones
//TODO: Usar AJAX -> JSON
let yoda = new Campeon(
  "yoda",
  110,
  1500,
  "Luz",
  "yoda-button",
  "../assets/yoda.png"
);
let luke = new Campeon(
  "luke",
  120,
  1100,
  "Luz",
  "luke-button",
  "../assets/luke.png"
);
let leia = new Campeon(
  "leia",
  90,
  1000,
  "Luz",
  "leia-button",
  "../assets/leia.png"
);
let vader = new Campeon(
  "vader",
  150,
  1200,
  "Oscuridad",
  "vader-button",
  "../assets/vader.png"
);
let obiWan = new Campeon(
  "obi",
  105,
  1100,
  "Luz",
  "obi-button",
  "../assets/obi-wan.png"
);
let boba = new Campeon(
  "boba",
  100,
  1100,
  "Oscuridad",
  "boba-button",
  "../assets/boba.png"
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

  newContent.innerHTML = `
  <div id="battle-cards-content" class="album py-5 bg-light" style="display: none">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 battle-cards-div">
        
        <!-- Player One  -->
        <div class="col drop-shadow" id="battle-p1">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="${playerOne.img}"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title"id="${playerOne.nombre}-title"></h2>
              <p class="card-text">*DESCRIPCION DE LA ULTIMATE*</p>
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
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="ejecutar-ataque-p1"
                  >
                    Attack
                  </button>
                </div>
                <!-- Abillity Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="ejecutar-habilidad-p1"
                  >
                    Abillity
                  </button>
                </div>
                <!-- Ultimate Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
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
        <div class="col drop-shadow" id="battle-p2">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="${playerTwo.img}"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title"id="${playerTwo.nombre}-title"></h2>
              
              <p class="card-text">*DESCRIPCION DE LA ULTIMATE*</p>
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
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="ejecutar-ataque-p2"
                  >
                    Attack
                  </button>
                </div>
                <!-- Abillity Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="ejecutar-habilidad-p2"
                  >
                    Abillity
                  </button>
                </div>
                <!-- Ultimate Button -->
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
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

  const gameOver = (p1, p2) => {
    let winner = null;

    //conditions for winner settings
    if (p1.vida == 0) {
      console.log("p2 gana");
      winner = p2;
    } else if (p2.vida == 0) {
      console.log("p1 gana");
      winner = p1;
    }

    //Winner interface creation
    const oldContent = document.getElementById("battle-cards-content");
    const winnerContent = document.createElement("div");

    winnerContent.innerHTML = `
      <div id="battle-cards-content" class="album py-5 bg-light" >
        <div class="container">
        <h2 class="d-flex justify-content-center">Winner</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 battle-cards-div">
            
            <!-- Player One  -->
            <div class="col drop-shadow" id="battle-p1">
              <div class="card shadow-sm">
                <div class="box-image">
                  <img
                    class="card-image"
                    src="${winner.img}"
                  />
                </div>
                <div class="card-body">
                  <h2 class="card-title">${winner.nombre}</h2>
                  <p class="card-text">*DESCRIPCION DE LA ULTIMATE*</p>
                  <small class="text-muted" id="card-info-p1"
                      >Damage: ${winner.daño} | Lifepoints: ${winner.vida}</small
                    >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <!-- Attack Button -->
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary select-button"
                        id="ejecutar-ataque-p1"
                      >
                        Attack
                      </button>
                    </div>
                    <!-- Abillity Button -->
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary select-button"
                        id="ejecutar-habilidad-p1"
                      >
                        Abillity
                      </button>
                    </div>
                    <!-- Ultimate Button -->
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary select-button"
                        id="ejecutar-habilidad-especial-p1"
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

    oldContent.replaceChildren(winnerContent);
  };

  // Funciones para el p1
  const player1Attack = (p1, p2) => {
    const cardInfoP2 = document.getElementById("card-info-p2");
    cardInfoP2.innerText = `Damage: ${p2.daño} | Lifepoints: ${p1.atacar(p2)}`;
    if (p2.vida <= 0) {
      gameOver(p1, p2);
    }
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
    console.log("entra ataque de p2");
    const cardInfoP1 = document.getElementById("card-info-p1");
    cardInfoP1.innerText = `Damage: ${p1.daño} | Lifepoints: ${p2.atacar(p1)}`;
    if (p1.vida <= 0) {
      gameOver(p1, p2);
    }
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

//AJAX SWAPI
let lukeName = fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
  .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[0]);
  });

let leiaName = fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
  .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[4]);
  });

let bobaName = fetch("https://swapi.dev/api/people/?page=3")
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[0]);
  });

let obiName = fetch("https://swapi.dev/api/people/?page=1")
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[9]);
  });

let yodaName = fetch("https://swapi.dev/api/people/?page=2")
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[8]);
  });

let vaderName = fetch("https://swapi.dev/api/people/?page=1")
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.entries(data)[3][1].map((champion) => champion.name)[3]);
  });

let yodaTitle = document.getElementById("yoda-title");
//yodaTitle.innerHTML = `${yodaName}
