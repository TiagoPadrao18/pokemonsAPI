const pokemons = {
  pokemon1: document.getElementById("pokemon1"),
  pokemon2: document.getElementById("pokemon2"),
  pokemon3: document.getElementById("pokemon3"),
  pokemon4: document.getElementById("pokemon4")
}

const card = document.getElementById("card");
const  buttonDrop = document.getElementById("buttonDrop");

const statusPokemon = {
  title: document.getElementById("title"),
  imgPokemon: document.getElementById("img"),
  hp: document.getElementById("hp"),
  attack: document.getElementById("attack"),
  specialAttack: document.getElementById("specialAttack"),
  specialDefense: document.getElementById("specialDefense"),
  speed: document.getElementById("speed"),
  height: document.getElementById("height"),
  weight: document.getElementById("weight"),
  type: document.getElementById("style"),
  defense: document.getElementById("defense"),
  ability: document.getElementById("ability"),
  hodenAbility: document.getElementById("hodenAbility")
};

const getPokemon1 = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    const name = data.name;
    const pokemonAbility = data.abilities[0].ability.name;
    const image = data.sprites.front_default;
    const life = data.stats[0].base_stat;
    const pokemonStyle = data.types[0].type.name;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAtt = data.stats[3].base_stat;
    const specialDef = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;
    const height = data.height;
    const weight = data.weight;
    const ability = data.abilities[0].ability.name;
    const hodenAbility = data.abilities[1].ability.name;
    return {
      name: name,
      ability: pokemonAbility,
      imagePokemon: image,
      hpPokemon: life,
      style: pokemonStyle,
      attack: attack,
      defense: defense,
      specialAtt: specialAtt,
      specialDef: specialDef,
      speed: speed,
      height: height,
      weight: weight,
      ability: ability,
      hodenAbility: hodenAbility
    };
  } catch (error) {
    console.log(error);
  }
};

buttonDrop.addEventListener("click",()=>{
  document.getElementById("myDropdown").classList.toggle("show");

});



const setPokemon = (pokemonName) => {
  getPokemon1(pokemonName).then((pokemonData) => {
    statusPokemon.title.innerHTML = pokemonData.name;
    statusPokemon.imgPokemon.src = pokemonData.imagePokemon;
    statusPokemon.hp.innerHTML = pokemonData.hpPokemon;
    statusPokemon.type.innerHTML = pokemonData.style;
    statusPokemon.attack.innerHTML = pokemonData.attack;
    statusPokemon.defense.innerHTML = pokemonData.defense;
    statusPokemon.specialAttack.innerHTML = pokemonData.specialAtt;
    statusPokemon.specialDefense.innerHTML = pokemonData.specialDef;
    statusPokemon.speed.innerHTML = pokemonData.speed;
    statusPokemon.height.innerHTML = pokemonData.height;
    statusPokemon.weight.innerHTML = pokemonData.weight;
    statusPokemon.ability.innerHTML = pokemonData.ability;
    statusPokemon.hodenAbility.innerHTML = pokemonData.hodenAbility;
    console.log(pokemonData.style + pokemonData.hpPokemon);
  });
}
setPokemon("flareon");
card.style.backgroundImage = "linear-gradient(0deg, #c71800 10%, #fcc245 100%)";
document.getElementById("myDropdown").classList.remove("show");

for (let key in pokemons) {
  pokemons[key].addEventListener("click", ()=> {
    switch (key) {
      case "pokemon1":
        setPokemon("flareon");
          card.style.backgroundImage = "linear-gradient(0deg, #c71800 10%, #fcc245 100%)";
          document.getElementById("myDropdown").classList.remove("show");
        break;
      case "pokemon2":
        setPokemon("greninja");
        card.style.backgroundImage = "linear-gradient(0deg, #19B5FE 10%, #FCC9B9 100%)";
        document.getElementById("myDropdown").classList.remove("show");

        break;
      case "pokemon3":
        setPokemon("houndoom");
        card.style.backgroundImage = "linear-gradient(0deg, #F9690E 10%, #000 100%)";
        document.getElementById("myDropdown").classList.remove("show");

        break;
      case "pokemon4":
        setPokemon("mewtwo");
        card.style.backgroundImage = "linear-gradient(0deg, #9B59B6 10%, #F3F3F3F3 100%)";
        document.getElementById("myDropdown").classList.remove("show");


        break;
      default:
        break;
    }
  });
}
