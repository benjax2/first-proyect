const pokemonContainer = document.getElementById("pokemons-container");
const nextButton = document.getElementById("siguiente");
const previousButton = document.getElementById("anterior");
const typeDropdown = document.getElementById("drpwn");
const typeOptions = document.getElementById("opciones");
const searchInput = document.querySelector("#filtros input[type='text']");
const searchButton = document.querySelector("#filtros button");

const modal = document.getElementById("pokemon-modal");
const closeModal = document.getElementById("close-modal");

let currentOffset = 0;
const POKEMONS_POR_PAGINA = 10;
let filterPokemon = null;
let filteredPokemonList = [];

function openPokemonModal(pokemon) {
  document.getElementById("modal-name").textContent = pokemon.name;
  document.getElementById("modal-id").textContent = `#${String(pokemon.id).padStart(3, "0")}`;
  document.getElementById("modal-img").src =
    pokemon.sprites.other["official-artwork"].front_default;
  document.getElementById("modal-height").textContent = pokemon.height;
  document.getElementById("modal-weight").textContent = pokemon.weight;
  document.getElementById("modal-abilities").textContent = pokemon.abilities
    .map((ab) => ab.ability.name)
    .join(", ");
  document.getElementById("modal-types").textContent = pokemon.types
    .map((t) => t.type.name)
    .join(", ");
  document.getElementById("modal-move").textContent = pokemon.moves?.[0]?.move.name ?? "N/A";

  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

function renderPokemonCard(pokemon) {
  const pokemonTypesHtml = pokemon.types
    .map(
      (typeInfo) =>
        `<span class="capitalize ${typeInfo.type.name} px-2 py-1 rounded-full text-xs font-semibold">${typeInfo.type.name}</span>`,
    )
    .join(" ");

  const card = document.createElement("div");
  card.className =
    "max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg";

  card.innerHTML = `
    <a href="#" class="bg-gray-100 flex items-center justify-center p-4">
      <img class="w-full h-auto object-contain max-h-64 rounded-t-lg" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}" />
    </a>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">${pokemon.name}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#${String(pokemon.id).padStart(3, "0")}</p>
      <div class="mb-4 flex flex-wrap gap-2">${pokemonTypesHtml}</div>
      <button class="info-btn inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Más información
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  `;

  card.querySelector(".info-btn").addEventListener("click", () => openPokemonModal(pokemon));
  pokemonContainer.appendChild(card);
}

async function fetchAndRenderPokemons(offset = 0, type = null) {
  currentOffset = offset;
  pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-gray-500">Cargando Pokémon...</div>`;
  typeOptions.classList.add("hidden");

  try {
    previousButton.disabled = offset === 0;

    if (type) {
      filterPokemon = type;
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      filteredPokemonList = data.pokemon.map((p) => p.pokemon);

      const pokemonsToShow = filteredPokemonList.slice(offset, offset + POKEMONS_POR_PAGINA);
      nextButton.disabled = offset + POKEMONS_POR_PAGINA >= filteredPokemonList.length;

      if (pokemonsToShow.length === 0) {
        pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-gray-500">No se encontraron Pokémon de tipo "${type}".</div>`;
        return;
      }

      pokemonContainer.innerHTML = "";
      for (const p of pokemonsToShow) {
        const res = await fetch(p.url);
        const poke = await res.json();
        renderPokemonCard(poke);
      }
    } else {
      filterPokemon = null;
      filteredPokemonList = [];
      nextButton.disabled = false;

      pokemonContainer.innerHTML = "";
      for (let i = offset + 1; i <= offset + POKEMONS_POR_PAGINA + offset; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        renderPokemonCard(data);
      }
    }
  } catch (error) {
    console.error("Error al cargar Pokémon:", error);
    pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-red-500">Error al cargar Pokémon. Inténtalo de nuevo más tarde.</div>`;
  }
}

// --- Event Listeners ---

nextButton.addEventListener("click", () => {
  const nextOffset = currentOffset + POKEMONS_POR_PAGINA;
  if (filterPokemon) {
    if (nextOffset < filteredPokemonList.length) {
      fetchAndRenderPokemons(nextOffset, filterPokemon);
    }
  } else {
    fetchAndRenderPokemons(nextOffset);
  }
});

previousButton.addEventListener("click", () => {
  const prevOffset = currentOffset - POKEMONS_POR_PAGINA;
  if (prevOffset >= 0) {
    fetchAndRenderPokemons(prevOffset, filterPokemon);
  }
});

typeDropdown.addEventListener("click", () => {
  typeOptions.classList.toggle("hidden");
});

typeOptions.addEventListener("click", (e) => {
  const listItem = e.target.closest("li");
  if (listItem) {
    const selectedType = listItem.id;
    fetchAndRenderPokemons(0, selectedType);
  }
});

searchButton.addEventListener("click", async () => {
  const pokemonName = searchInput.value.trim().toLowerCase();
  if (pokemonName) {
    pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-gray-500">Buscando ${pokemonName}...</div>`;
    typeOptions.classList.add("hidden");
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-red-500">No se encontró el Pokémon "${pokemonName}".</div>`;
        return;
      }
      const data = await response.json();
      pokemonContainer.innerHTML = "";
      renderPokemonCard(data);
      previousButton.disabled = true;
      nextButton.disabled = true;
    } catch (error) {
      console.error("Error al buscar Pokémon:", error);
      pokemonContainer.innerHTML = `<div class="col-span-full text-center text-xl text-red-500">Error al buscar Pokémon.</div>`;
    }
  } else {
    fetchAndRenderPokemons(currentOffset);
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetchAndRenderPokemons(0);
});
