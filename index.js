console.clear();

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
  defense: document.getElementById("defense")
};

console.log("ola");

const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/flareon");
    const data = await response.json();
    const pokemonName = data.name;
    const pokemonAbility = data.abilities[0].ability.name;
    const image = data.sprites.front_default;
    const life = data.stats[0].base_stat;
    const pokemonStyle = data.types[0].type.name;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAtt = data.stats[3].base_stat;
    const specialDef = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;



    return {
      name: pokemonName,
      ability: pokemonAbility,
      imagePokemon: image,
      hpPokemon: life,
      style: pokemonStyle,
      attack: attack,
      defense: defense,
      specialAtt: specialAtt,
      specialDef: specialDef,
      speed: speed
    };
  } catch (error) {
    console.log(error);
  }
};

getPokemon().then((pokemonData) => {
  statusPokemon.title.innerHTML = pokemonData.name;
  statusPokemon.imgPokemon.src = pokemonData.imagePokemon;
  statusPokemon.hp.innerHTML = pokemonData.hpPokemon;
  statusPokemon.type.innerHTML = pokemonData.style;
  statusPokemon.attack.innerHTML = pokemonData.attack;
  statusPokemon.defense.innerHTML = pokemonData.defense;
  statusPokemon.specialAttack.innerHTML = pokemonData.specialAtt;
  statusPokemon.specialDefense.innerHTML = pokemonData.specialDef;
  statusPokemon.speed.innerHTML = pokemonData.speed;
  console.log(pokemonData.pokemonStyle + hp);
});
