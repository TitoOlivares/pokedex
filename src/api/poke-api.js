const URL = process.env.VUE_APP_POKE_URL;

export async function getPokemonList() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemon(name) {
  try {
    const response = await fetch(`${URL}/${name}`);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
