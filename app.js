// https://github.com/Tatohead/Console-Iconset/tree/main/Console

function loopPokemon(z, y) {
    for (let x = z; x <= y; x++) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
            .then(res => res.json())
            .then(pokeData => {

                // create Span for Pokemon, set class, & append to PokemonList
                var pokeSpan = document.createElement('span')
                pokeSpan.setAttribute('class', 'pokemonFlex', 'id', 'pokemonFlex')
                document.getElementById('pokemonList').appendChild(pokeSpan)

                // create P for Pokemon Name, set class, append it to PokeSpan
                var pokemonName = document.createElement('p')
                pokemonName.setAttribute('class', 'pokemonName')

                // correcting the names from PokeApi
                switch (true) { // if theres no hyphen or includes the name don't change the name
                    case (!((pokeData.name).includes('-'))):
                    case ((pokeData.name).includes('ho-oh')):
                    case (((pokeData.name).includes('porygon'))):
                    case ((pokeData.name).includes('type-null')):
                    case ((pokeData.name).includes('jangmo')):
                    case ((pokeData.name).includes('hakamo')):
                    case ((pokeData.name).includes('kommo')):
                        var pokeName = pokeData.name
                        break;
                    // if name includes below name, then replace hyphen with space
                    case ((pokeData.name).includes('tapu')):
                    case ((pokeData.name).includes('rime')):
                    case ((pokeData.name).includes('mime')):
                        var pokeName = (pokeData.name).replace('-', ' ')
                        break;
                    // split all others at the hyphen in the name, return first element
                    default: var pokeName = (pokeData.name).split('-', 1)[0]
                }
                // append pokeName into the PokeSpan
                pokemonName.innerHTML = pokeName
                pokeSpan.appendChild(pokemonName)

                // create P element for pokemon Number
                var pokemonNumber = document.createElement('p')
                pokemonNumber.setAttribute('class', 'pokemonNumber')
                // create img element for pokeomon image
                var pokemonImage = document.createElement('img')
                pokemonImage.setAttribute('class', 'pokemonImage')

                // logic to make sure there are the right amount of zeros for the image url
                switch (true) {
                    case (pokeData.id < 10):
                        pokemonNumber.innerHTML = String('00').concat(pokeData.id);
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${x}.png`)
                        break;
                    case ((pokeData.id >= 10) && (pokeData.id <= 99)):
                        pokemonNumber.innerHTML = String('0').concat(pokeData.id);
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${x}.png`)
                        break;
                    case (pokeData.id >= 100):
                        pokemonNumber.innerHTML = pokeData.id
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x}.png`)
                        break;
                }
                // append pokemonNumber into pokeSpan
                pokeSpan.appendChild(pokemonNumber)
                // trying to create a light circle element behind the pokemon
                // var pokemonNumber = document.create 'pokeCircle')
                // pokeSpan.appendChild(pokeCircle)

                // append the image into the span
                pokeSpan.appendChild(pokemonImage)
                // create span container to hold the pokemonTypes
                var pokemonType = document.createElement('span')
                pokemonType.setAttribute('class', 'pokemonType')

                // get types, then append types into html
                for (pokeTypes of pokeData.types) {
                    var typeElement = document.createElement('p');
                    typeElement.innerHTML = pokeTypes.type.name
                    typeElement.setAttribute('class', String('pill background-color-').concat(pokeTypes.type.name))
                    pokemonType.appendChild(typeElement)
                }
                pokeSpan.appendChild(pokemonType)

                // // create the pokemon's consoles' span
                var pokemonConsoles = document.createElement('span')
                pokemonConsoles.setAttribute('class', 'pokemonConsoles', 'id', 'pokemonConsoles')

                var consoleImage = document.createElement('img')
                consoleImage.setAttribute('class', 'pokemonConsoleImage')

                switch (true) {
                    case (pokeData.id <= 151): // apply gameboy OG icon to gen 1 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gb.png')
                        consoleImage.classList.add('genOne')
                        break;
                    case ((pokeData.id >= 152) && (pokeData.id <= 251)): // apply gameboy color icon to gen 2 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gbc9.png')
                        consoleImage.classList.add('genTwo')
                        break;
                    case ((pokeData.id >= 252) && (pokeData.id <= 386)): // apply gameboy advance icon to gen 3 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GBA/Gameboy%20Sp4.png')
                        consoleImage.classList.add('genThree')
                        break;
                    case ((pokeData.id >= 387) && (pokeData.id <= 493)): // apply nintendo DS icon to gen 4 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png')
                        consoleImage.classList.add('genFour')
                        consoleImage.classList.add('consoleDS')
                        break;
                    case ((pokeData.id >= 494) && (pokeData.id <= 649)): // apply nintendo DS icon to gen 5 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png')
                        consoleImage.classList.add('genFive')
                        consoleImage.classList.add('consoleDS')
                        break;
                    case ((pokeData.id >= 650) && (pokeData.id <= 721)): // apply 3DS icon to gen 6 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')
                        consoleImage.classList.add('genSix')
                        consoleImage.classList.add('console3DS')
                        break;
                    case ((pokeData.id >= 722) && (pokeData.id <= 809)): // apply 3DS & switch icon to gen 7 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')
                        consoleImage.classList.add('genSeven')
                        consoleImage.classList.add('console3DS')
                        consoleImage.classList.add('consoleSwitch')
                        var consoleImage2 = document.createElement('img')
                        consoleImage2.setAttribute('class', 'pokemonConsoleImage')
                        consoleImage2.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                        consoleImage2.classList.add('genSeven')
                        break;
                    case ((pokeData.id >= 810) && (pokeData.id <= 905)): // apply switch icon to gen 8 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                        consoleImage.classList.add('genEight')
                        consoleImage.classList.add('consoleSwitch')
                        break;
                }
                // append the console icon to the pokemonConsoles span
                pokemonConsoles.appendChild(consoleImage)
                // only apply second icon if it exists
                if (consoleImage2) { pokemonConsoles.appendChild(consoleImage2) }
                // append the pokemonConsoles span to the pokeSpan
                pokeSpan.appendChild(pokemonConsoles)
            })
    }

}

function filterType(e) {
    const pokemons = document.querySelectorAll(".pokemonFlex");
    let filter = e.target.dataset.filter;

    if (filter === '*') {
        pokemons.forEach(pokemon => pokemon.classList.remove('hidden'));
    } else {
        pokemons.forEach(pokemon => {
            // if second type exists & it is the same as the filter, remove hidden class
            if ((pokemon.children[3].children[1]) && (pokemon.children[3].children[1].innerHTML == filter)) {
                pokemon.classList.remove('hidden')
            } else if (pokemon.children[3].children[0].innerHTML == filter) {
                pokemon.classList.remove('hidden')
                // else add hidden class
            } else { pokemon.classList.add('hidden') }
        });
    };
}
function filterGeneration(e) {
    const pokemons = document.querySelectorAll(".pokemonFlex");
    let filter = e.target.dataset.filter;

    if (filter === '*') {
        pokemons.forEach(pokemon => pokemon.classList.remove('hidden'));
    } else {
        pokemons.forEach(pokemon => {
            // if second type exists & it is the same as the filter, remove hidden class
            if (pokemon.children[4].children[0].classList.contains(filter)) {
                pokemon.classList.remove('hidden')
                // else add hidden class
            } else { pokemon.classList.add('hidden') }
        });
    };
}

const legendary = [144, 145, 146, 150, 243, 244, 245, 250, 249, 377, 378, 379, 381, 380, 382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 772, 773, 785, 786, 787, 788, 790, 791, 792, 800, 793, 888, 889, 890, 891, 892, 896, 898, 894, 895, 905]
function filterLegendary(e) {
    const pokemons = document.querySelectorAll(".pokemonFlex");
    let filter = e.target.dataset.filter;

    if (filter === '*') {
        pokemons.forEach(pokemon => pokemon.classList.remove('hidden'));
    } else {
        pokemons.forEach(pokemon => {
            let stringPokeID = Number(pokemon.children[1].innerHTML)
            // if second type exists & it is the same as the filter, remove hidden class
            if (legendary.includes(stringPokeID)) {
                pokemon.classList.remove('hidden')
                // else add hidden class
            } else { pokemon.classList.add('hidden') }
        });
    };
}

const mythical = [151, 251, 385, 386, 490, 489, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893]
function filterMythical(e) {
    const pokemons = document.querySelectorAll(".pokemonFlex");
    let filter = e.target.dataset.filter;

    if (filter === '*') {
        pokemons.forEach(pokemon => pokemon.classList.remove('hidden'));
    } else {
        pokemons.forEach(pokemon => {
            let stringPokeID = Number(pokemon.children[1].innerHTML)
            // if second type exists & it is the same as the filter, remove hidden class
            if (mythical.includes(stringPokeID)) {
                pokemon.classList.remove('hidden')
                // else add hidden class
            } else { pokemon.classList.add('hidden') }
        });
    };
}

var sortByPokemonNumber = document.getElementsByClassName('sortPokeID');
function sortingbyPokeNumber() {
    var items = document.querySelectorAll(".pokemonFlex");
    console.log('Ran the sort script')
    // console.log(items.forEach(element => console.log(element)))
    // items.forEach(element =>
    //     console.log(element.children[1].innerHTML)

    // get all items as an array and call the sort method
    Array.from(items).sort(function (a, b) {
        // get the text content
        a = a.querySelector('.pokemonNumber').innerHTML
        b = b.querySelector('.pokemonNumber').innerHTML
        return (a > b) - (a < b)
    }).forEach(function (n, i) {
        n.style.order = i
    })
    // )
}
sortByPokemonNumber.addEventListener('click', sortingbyPokeNumber);

var sortByPokemonNumber2 = document.getElementsByClassName('sortPokeID');
function sortingbyPokeNumberBackward() {
    var items = document.querySelectorAll(".pokemonFlex");
    // console.log(items.forEach(element => console.log(element)))
    // items.forEach(element =>
    //     console.log(element.children[1].innerHTML)

    // get all items as an array and call the sort method
    Array.from(items).sort(function (a, b) {
        // get the text content
        a = a.querySelector('.pokemonNumber').innerHTML
        console.log(a)
        b = b.querySelector('.pokemonNumber').innerHTML
        console.log(b)
        return (a < b) - (a > b)
    }).forEach(function (n, i) {
        n.style.order = i
    })
    // )
}
sortByPokemonNumber2.addEventListener('click', sortingbyPokeNumberBackward);

window.onload = sortByPokemonNumber;