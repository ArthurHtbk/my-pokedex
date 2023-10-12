function NavBar({
  pokemonIndex,
  pokemonList,
  handleNextPokemon,
  handlePreviousPokemon,
}) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handlePreviousPokemon}>
          Précédent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleNextPokemon}>
          Suivant
        </button>
      ) : null}
    </>
  );
}

export default NavBar;
