const URL = process.env.VUE_APP_POKE_URL;

export async function getPokemonList(payload) {
  try {
    const response = await fetch(
      `${URL}?` + new URLSearchParams({ offset: payload, limit: 20 })
    );
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

    return data;
  } catch (error) {
    console.log(error);
  }
}
