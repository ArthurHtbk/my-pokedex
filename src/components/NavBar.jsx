function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <button
            type="button"
            key={index}
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
