function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <button
            type="button"
            key={pokemon.id}
            onClick={() => setPokemonIndex(index)}
          >
            {pokemon.name}
          </button>
        );
      })}
    </>
  );
}

export default NavBar;
