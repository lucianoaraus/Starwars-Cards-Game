//PROYECTO FINAL - Simulador de batalla Star Wars

//TODO:
//Boton para volver al menu principal
//Ultimate para los demas jugadores? Cubrir undefined

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
      return this.daño;
    } else {
      this.vida += 300;
      return this.vida;
    }
  }

  habilidadEspecial() {
    if (this.nombre == "Luke Skywalker") {
      this.vida += 750;
      return this.vida;
    } else if (this.nombre == "Darth Vader") {
      this.daño += 1000;
      return this.daño;
    } else if (this.bando == "Oscuridad") {
      console.log("no tiene ulti");
      return this.daño;
    } else if (this.bando == "Luz") {
      console.log("no tiene ulti");
      return this.vida;
    }
  }
}

//Instanciacion campeones
//TODO: Usar AJAX -> JSON
let yoda = new Campeon(
  "Yoda",
  110,
  1500,
  "Luz",
  "yoda-button",
  "./assets/yoda.png"
);
let luke = new Campeon(
  "Luke Skywalker",
  120,
  1100,
  "Luz",
  "luke-button",
  "./assets/luke.png"
);
let leia = new Campeon(
  "Leia Organa",
  90,
  1000,
  "Luz",
  "leia-button",
  "./assets/leia.png"
);
let vader = new Campeon(
  "Darth Vader",
  150,
  1200,
  "Oscuridad",
  "vader-button",
  "./assets/vader.png"
);
let obiWan = new Campeon(
  "Obi-Wan Kenobi",
  105,
  1100,
  "Luz",
  "obi-button",
  "./assets/obi-wan.png"
);
let boba = new Campeon(
  "Boba Fett",
  100,
  1100,
  "Oscuridad",
  "boba-button",
  "./assets/boba.png"
);

const campeones = [yoda, luke, leia, vader, obiWan, boba];

let jugadores = [];

//WIP: LocalStorage
// localStorage.setItem("players", JSON.stringify(jugadores));
//let playersQuery = JSON.parse(localStorage.getItem("players"));
//console.log(playersQuery);

function buscarJugadores(clicked_id) {
  console.log("Player", jugadores.length, clicked_id);
  jugadores.push(campeones.find((c) => c.id == clicked_id));
  //LocalStorage
  //let p1 = jugadores.push(campeones.find((c) => c.id == clicked_id));
  //localStorage.setItem("playerOne", p1);
  if (jugadores.length == 2) {
    startGame();
  }
}

const bobaSelect = () => {
  buscarJugadores("boba-button");
};

const lukeSelect = () => {
  buscarJugadores("luke-button");
};

const vaderSelect = () => {
  buscarJugadores("vader-button");
};

const leiaSelect = () => {
  buscarJugadores("leia-button");
};

const obiSelect = () => {
  buscarJugadores("obi-button");
};

const yodaSelect = () => {
  buscarJugadores("yoda-button");
};

function startGame() {
  const content = document.getElementById("cards-content");
  const newContent = document.createElement("div");
  const playerOne = jugadores[0];
  const playerTwo = jugadores[1];

  console.log(jugadores);

  newContent.innerHTML = `
  <div id="battle-cards-content" class="album py-5" style="display: none">
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
              <h2 class="card-title"id="${playerOne.nombre}-title">${playerOne.nombre}</h2>
              <p class="card-text">Only some masters who have trained hard possess the power of the special ability...</p>
              
              <div class="bottom-card-div">
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
              <h2 class="card-title"id="${playerTwo.nombre}-title">${playerTwo.nombre}</h2>
              
              <p class="card-text">Only some masters who have trained hard possess the power of the special ability...</p>
              <div class="bottom-card-div">
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
  </div>
  `;

  content.parentNode.replaceChild(newContent, content);

  // Efecto/Animacion con JQuery
  $("#battle-cards-content").fadeIn(1000);

  const gameOver = (p1, p2) => {
    let winner = null;

    // conditions for winner settings
    if (p1.vida == 0) {
      winner = p2;
    } else if (p2.vida == 0) {
      winner = p1;
    }

    // winner interface creation
    const oldContent = document.getElementById("battle-cards-content");
    const winnerContent = document.createElement("div");

    winnerContent.innerHTML = `
      <div id="battle-cards-content" class="album py-5" >
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
                  <p class="card-text">Only some masters who have trained hard possess the power of the special ability...</p>
                  <div class="bottom-card-div">
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

let championsSelectUI = false;
let cardsContentDiv = document.getElementById("cards-content-div");
let selectChampionsButton = document
  .getElementById("select-champions")
  .addEventListener("click", () => {
    if (!championsSelectUI) {
      //Yoda
      fetch("https://swapi.dev/api/people/?page=2") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let yodaName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[8];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="./assets/yoda.png"
                id="yoda-image"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title" id="yoda-title">${yodaName}</h2>
              <p class="card-text">
              Member of a mysterious species. A revered Jedi Master who served as Grand Master of the Jedi Order in the last days of the Galactic Republic. He is famous within the Order for his wisdom, Force powers and lightsaber combat, and he lived for almost 900 years.
              </p>
              <small class="text-muted"
                >Damage: 110 | Lifepoints: 1500 | Side: Light</small
              >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="yoda-button"
                    onclick="yodaSelect()"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        });

      //Luke
      fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let lukeName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[0];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="./assets/luke.png"
                id="luke-image"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title" id="luke-title">${lukeName}</h2>
              <p class="card-text">
              A Force-sensitive human and Jedi Master who, along with his twin sister, Princess Leia Organa, fought against the government of the Galactic Empire during the Galactic Civil War. He is the son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala of Naboo.
              </p>
              <small class="text-muted"
                >Damage: 120 | Lifepoints: 1100 | Side: Light</small
              >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="luke-button"
                    onclick="lukeSelect()"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        });

      //Leia
      fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let leiaName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[4];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="./assets/leia.png"
                id="leia-image"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title" id="leia-title">${leiaName}</h2>
              <p class="card-text">
                A Force-sensitive human female, she was a princess of Alderaan, a member of the Imperial Senate, leader of the Alliance to Restore the Republic, a member of the Galactic Senate, and a general in the Resistance.
              </p>
              <small class="text-muted"
                >Damage: 90 | Lifepoints: 1000 | Side: Light</small
              >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="leia-button"
                    onclick="leiaSelect()"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        });

      //Vader
      fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let vaderName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[3];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
          <div class="card shadow-sm">
            <div class="box-image">
              <img
                class="card-image"
                src="./assets/vader.png"
                id="vader-image"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title" id="vader-title">${vaderName}</h2>
              <p class="card-text">
              Anger fuels the Dark Side and Vader's hate hasn't limits. After turning to the dark side of the Force, he became known as the Dark Lord of the Sith and an apprentice to Emperor Darth Sidious. As the Sith Lord, Vader turned on his former comrades and hunted the surviving Jedi to near extinction.
              </p>
              <small class="text-muted"
                >Damage: 150 | Lifepoints: 1200 | Side: Dark</small
              >
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary select-button"
                    id="vader-button"
                    onclick="vaderSelect()"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
        });

      //Obi
      fetch("https://swapi.dev/api/people/?page=1") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let obiName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[9];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
            <div class="card shadow-sm">
              <div class="box-image">
                <img
                  class="card-image"
                  src="./assets/obi-wan.png"
                  id="obi-wan-image"
                />
              </div>
              <div class="card-body">
                <h2 class="card-title" id="obi-title">${obiName}</h2>
                <p class="card-text">
                  A Force-sensitive human male and a legendary Jedi Master and member of the Jedi High Council during the Fall of the Republic.
                </p>
                <small class="text-muted"
                  >Damage: 105 | Lifepoints: 1100 | Side: Light</small
                >
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary select-button"
                      id="obi-button"
                      onclick="obiSelect()"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
        });

      //Boba
      fetch("https://swapi.dev/api/people/?page=3") //Devuelve un 'OBJETO PROMESA'
        .then((response) => response.json()) //Lo transformo y devuelve un 'OBJETO TIPO JSON'
        .then((data) => {
          let bobaName = Object.entries(data)[3][1].map(
            (champion) => champion.name
          )[0];
          cardsContentDiv.innerHTML += `
        <div class="col drop-shadow">
            <div class="card shadow-sm">
              <div class="box-image">
                <img
                  class="card-image"
                  src="./assets/boba.png"
                  id="boba-image"
                />
              </div>
              <div class="card-body">
                <h2 class="card-title" id="boba-title">${bobaName}</h2>
                <p class="card-text">
                  A Mandalorian warrior and bounty hunter. Clone of the famed Jango Fett, created in 32 BBY as the first of several replicas of Fett designed to become part of the Grand Army of the Republic, and raised by Jango as his son.
                </p>
                <div class="bottom-card-div">
                <small class="text-muted"
                  >Damage: 100 | Lifepoints: 1100 | Side: Dark</small
                >
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary select-button boba-button"
                      id="boba-button"
                      onclick="bobaSelect()"
                    >
                      Select
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      `;
        });
    }
    championsSelectUI = true;
  });

/*Comentarios sobre el proyecto:
    - Se decidio realizar las funciones de seleccion de jugadores desde el boton y no con el formato de escuchar el evento de la etiqueta con su respectivo ID
    ya que al intentarlo de esta ultima forma no se podia localizar el boton con su id, por lo tanto, no se podia ejecutar la funcion de seleccion de jugadores.
    - LocalStorage: pendiente
    - Demora unos segundos el cargar cada card debido a que el fetch se realiza varias veces, falta optimizar.
*/
