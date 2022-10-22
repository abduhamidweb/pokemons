
const AllPokemons = pokemons.map((e, i) => {
  return {
    id: e.id,
    num: e.num,
    name: e.name,
    img: e.img,
    type: e.type,
    height: e.height,
    weight: e.weight,
    candy: e.candy,
    candy_count: e.candy_count,
    egg: e.egg,
    spawn_chance: e.spawn_chance,
    avg_spawns: e.avg_spawns,
    spawn_time: e.spawn_time,
    multipliers: e.multipliers,
    weaknesses: e.weaknesses,
    next_evolution: e.next_evolution,
  };
});

AllPokemons.forEach((e) => {
  let newCard = document.createElement("div");
  let wrapper = $("#card-items");
  newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
  newCard.innerHTML = `                    
                        <div class="card " id="${e.id}">
                            <div class="card-img text-center">
                                <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">
                            <div class="card-like"> <i class="fa-regular fa-heart"></i></div>
                                <div class="card-title">
                                    <p>${e.name}</p>
                                </div>
                                <div class="card-category">
                                    <p>${e.candy}</p>
                                </div>
                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${e.weight}</h5>
                                        <h5 class="card-info-age">${e.candy_count} age</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
             `;
  wrapper.appendChild(newCard);
});

// finde function

const findePokemone = function (title) {
  const searchPokemone = AllPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(title);
  });
  renderPokemone(searchPokemone);
};
$(".search-pokemone").addEventListener("input", (e) => {
  e.preventDefault();
  $("#card-items").innerHTML = "";
  const searchTerm = $(".search-pokemone").value.trim().toLowerCase();
  const regexpSearch = new RegExp(searchTerm, "gi");
  const result = searchTerm.match(regexpSearch);
  findePokemone(result);
  console.log(result);
});
// render function
function renderPokemone(searchPokemone) {
  searchPokemone.forEach((e) => {
    let newCard = document.createElement("div");
    let wrapper = $("#card-items");
    newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
    newCard.innerHTML = `                    
                        <div class="card ">
                            <div class="card-img text-center">
                                <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">

                            <div class="like"> <i class="fa-solid fa-heart"></i></div>
                                <div class="card-title">
                                    <p>${e.name}</p>
                                </div>

                                <div class="card-category">
                                    <p>${e.candy}</p>
                                </div>

                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${e.weight}</h5>
                                        <h5 class="card-info-age">${e.candy_count} age</h5>
                                    </div>
                                </div>


                            </div>
                        </div>
             `;
    wrapper.appendChild(newCard);
  });
}

// click like start
$(".click-like i").addEventListener("click", () => {
  $(".sidebar").classList.add("block");
});
$(".sidebar-back i").addEventListener("click", () => {
  $(".sidebar").classList.remove("block");
});

// selecter start

var arr = [];
AllPokemons.forEach((e) => {
  e.type.forEach((element) => {
    if (!arr.find((e) => e == element)) {
      arr.push(element);
    }
  });
});

arr.forEach((i) => {
  let option = crElement("option", "", i);
  $(".selector-wrap").appendChild(option);
});

let filters = $(".selector-wrap");

filters.addEventListener("change", (e) => {
  $("#card-items").innerHTML = "";
  let valueCate = e.target.value.trim().toLowerCase();
  AllPokemons.forEach((e) => {
    e.type.filter((element) => {
      let elementObje = element.trim().toLowerCase();
      if (valueCate == elementObje) {
        let newCard = document.createElement("div");
        let wrapper = $("#card-items");
        newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12 mx-auto");
        newCard.innerHTML = `
                            <div class="card " id="${e.id}">
                                <div class="card-img text-center">
                                    <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                        height="157px">
                                </div>
                                <span class="line"></span>
                                <div class="card-body">
                                <div class="card-like"> <i class="fa-regular fa-heart"></i></div>
                                    <div class="card-title">
                                        <p>${e.name}</p>
                                    </div>
                                    <div class="card-category">
                                        <p>${e.candy}</p>
                                    </div>
                                    <div class="card-info">
                                        <div class="d-flex">
                                            <h5 class="card-info-kg">${e.weight}</h5>
                                            <h5 class="card-info-age">${e.candy_count} age</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                 `;
        // if (elementObje.includes(valueCate)) {
        //   console.log(1);
        // }
        wrapper.appendChild(newCard);
      }
    });
  });
  if (e.target.value.trim().toLowerCase() == "all") {
    AllPokemons.forEach((e) => {
      let newCard = document.createElement("div");
      let wrapper = $("#card-items");
      newCard.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
      newCard.innerHTML = `                    
                        <div class="card " id="${e.id}">
                            <div class="card-img text-center">
                                <img src="${e.img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">
                            <div class="card-like"> <i class="fa-regular fa-heart"></i></div>
                                <div class="card-title">
                                    <p>${e.name}</p>
                                </div>
                                <div class="card-category">
                                    <p>${e.candy}</p>
                                </div>
                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${e.weight}</h5>
                                        <h5 class="card-info-age">${e.candy_count} age</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
             `;
      newCard.dataset.set = e.type;
      wrapper.appendChild(newCard);
    });
  }
  let as = document.querySelectorAll(".card-like i");
  window.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("fa-regular")) {
      as.forEach((item) => {
        if (e.target === item) {
          item.classList.toggle("fa-solid");
        }
      });
    }
  });
});

let as = document.querySelectorAll(".card-like i");
let cardPokemon = document.querySelectorAll(".card");
window.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("fa-regular")) {
    as.forEach((item) => {
      if (e.target === item) {
        item.classList.toggle("fa-solid");
        cardPokemon.forEach((itms) => {
          if (item.classList.contains("fa-solid")) {
            item.addEventListener("click", (e) => {
              e.preventDefault();
            });
            itms.classList.toggle("bookmark");
          } else {
            itms.classList.toggle("bookmark");
          }
        });
      }
    });
  }
});
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  console.log(card);
});

//bu function elementlarni like bosilganda savatga qo'shadi

let hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((item) => {
  item.addEventListener("click", function () {
    let parent = this.parentElement.parentElement;
    let titleDiv = parent.querySelector(".card-title");
    let title = titleDiv.querySelectorAll("p")[0].innerText;
    let categoryDiv = parent.querySelector(".card-category");
    let category = categoryDiv.querySelectorAll("p")[0].innerText;
    let cardInfo = parent.querySelector(".card-info");
    let dFlex = cardInfo.querySelector(".d-flex");
    let cardInfoKg = dFlex.querySelectorAll(".card-info-kg")[0].innerText;
    let cardInfoAge = dFlex.querySelectorAll(".card-info-age")[0].innerText;
    let parentPrev = parent.previousElementSibling.previousElementSibling;
    let img = parentPrev.querySelectorAll("img")[0].src;
    cardBeautifulFunction(title, category, cardInfoAge, cardInfoKg, img);
  });
});

function cardBeautifulFunction(title, category, cardInfoAge, cardInfoKg, img) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-lg-10 col-sm-10 col-md-10 mx-auto");
  let card = document.querySelector("#row-cols");
  div.innerHTML = `                    
                        <div class="card ">
                            <div class="card-img text-center">
                                <img src="${img}" class="img-fluid" alt="img" width="157px "
                                    height="157px">
                            </div>
                            <span class="line"></span>
                            <div class="card-body">
                            <div class="card-like"> <i class="fa-solid fa-trash"></i></div>
                                <div class="card-title">
                                    <p>${title}</p>
                                </div>
                                <div class="card-category">
                                    <p>${category}</p>
                                </div>
                                <div class="card-info">
                                    <div class="d-flex">
                                        <h5 class="card-info-kg">${cardInfoKg}</h5>
                                        <h5 class="card-info-age">${cardInfoAge} age</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
             `;

  card.append(div);
}

let faTimes = document.querySelectorAll(".card-body i");
window.addEventListener("click", (e) => {
  let target = e.target;
  if (target && target.classList.contains("fa-times")) {
    faTimes.forEach((item) => {
      if (item.classList.contains("fa-times")) {
        alert("jinni");
      } else {
        console.log(item);
      }
    });
  }
});
let cardMenu = document.querySelector(".sidebar");
let body = document.querySelector("body");
document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    cardMenu.classList.remove("block");
  }
});

// zaazz
let zzaa = $(".selecter-az");
zzaa.addEventListener("change", () => {
  if (zzaa.value == "azza") {
    // AllPokemons.sort((a, b) => a - b);
    let arr=[]
    AllPokemons.forEach(elemet => {
    arr.push(elemet)
    })
    


  }
});
