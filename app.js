function loopPokemon(z, y) {
    for (let x = z; x <= y; x++) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
            .then(res => res.json())
            .then(pokeData => {

                // create Span for Pokemon, set class, & append to PokemonList
                var pokeSpan = document.createElement('span')
                pokeSpan.setAttribute('class', 'pokemonFlex', 'id', 'pokemonFlex')
                document.getElementById('pokemonList').appendChild(pokeSpan)
                // console.log(pokeData.name)


                // create P for Pokemon Name, set class, append it to PokeSpan
                var pokemonName = document.createElement('p')
                pokemonName.setAttribute('class', 'pokemonName')
                var mildName = pokeData.name
                var pokeName = mildName.split('-', 1)
                pokemonName.innerHTML = pokeName
                pokeSpan.appendChild(pokemonName)

                // create P for pokemon Number
                var pokemonNumber = document.createElement('p')
                pokemonNumber.setAttribute('class', 'pokemonNumber')
                // create img for pokeomon image
                var pokemonImage = document.createElement('img')
                pokemonImage.setAttribute('class', 'pokemonImage')
                // logic to make sure there are the right amount of zeros
                if (pokeData.id <= 9) {
                    pokemonNumber.innerHTML = String('00').concat(pokeData.id);
                    pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${x}.png`)
                } else if (pokeData.id >= 10 && pokeData.id <= 99) {
                    pokemonNumber.innerHTML = String('0').concat(pokeData.id);
                    pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${x}.png`)
                } else if (pokeData.id >= 100) {
                    pokemonNumber.innerHTML = pokeData.id;
                    pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x}.png`)
                }
                pokeSpan.appendChild(pokemonNumber)
                pokeSpan.appendChild(pokemonImage)

                // create span container to hold the pokemonTypes
                var pokemonType = document.createElement('span')
                pokemonType.setAttribute('class', 'pokemonType')

                // get types & append types into html
                for (x of pokeData.types) {
                    var typeP = document.createElement('p');
                    typeP.innerHTML = x.type.name
                    typeP.setAttribute('class', String('pill background-color-').concat(x.type.name))
                    pokemonType.appendChild(typeP)
                }

                // create the pokemon's consoles' span
                var pokemonConsoles = document.createElement('span')
                pokemonConsoles.setAttribute('class', 'pokemonConsoles', 'id', 'pokemonConsoles')
                let gameArray = []

                for (x of pokeData.game_indices) {
                    gameArray.push(x.version.name)
                }

                if (gameArray.includes('red' || 'yellow' || 'blue')) {
                    var consoleImage = document.createElement('img')
                    consoleImage.setAttribute('class', 'pokemonConsoleImage')
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gb.png')
                    pokemonConsoles.appendChild(consoleImage)
                }
                if (gameArray.includes('gold' || 'silver' || 'crystal')) {
                    var consoleImage = document.createElement('img')
                    consoleImage.setAttribute('class', 'pokemonConsoleImage')
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gbc9.png')
                    pokemonConsoles.appendChild(consoleImage)
                }
                if (gameArray.includes('ruby' || 'sapphire' || 'platinum' || 'heartgold' || 'soulsilver' || 'black' || 'white' || 'black-2' || 'white-2')) {
                    var consoleImage = document.createElement('img')
                    consoleImage.setAttribute('class', 'pokemonConsoleImage')
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png')
                    pokemonConsoles.appendChild(consoleImage)
                }
                pokeSpan.appendChild(pokemonType)
                pokeSpan.appendChild(pokemonConsoles)
            })
    }

}

function addRegion(y) {
    let sunMoon = []
    fetch(`https://pokeapi.co/api/v2/generation/${y}/`)
        .then(res => res.json())
        .then(sunMoonData => {
            for (x in sunMoonData.pokemon_species) {
                sunMoon.push(sunMoonData.pokemon_species[x].name)
            }

            // console.log(sunMoon)
            // iterate through the pokeFlexs displayed{
            for (x = 1; x <= 905; x++) {
                // check if the iterated pokemon's name exists in the sunMoon array
                if (sunMoon.includes(pokemonList.childNodes[x].childNodes[0].innerHTML)) {
                    // console.log(x)
                    // console.log(pokemonList.childNodes[x].childNodes[0].innerHTML)

                    // add the 3DS to PokemonConsoles Span
                    var addedImage = document.createElement('img')
                    if (y <= 5) {
                        addedImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png', 'class', 'pokemonConsoleImage')
                        pokemonList.childNodes[x].childNodes[4].appendChild(addedImage)
                    } else if (y > 5 && y < 8) {
                        addedImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png', 'class', 'pokemonConsoleImage')
                        pokemonList.childNodes[x].childNodes[4].appendChild(addedImage)
                    } else if (y = 8) {
                        addedImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png', 'class', 'pokemonConsoleImage')
                        pokemonList.childNodes[x].childNodes[4].appendChild(addedImage)
                    }
                }
            }
        })
}

function loopRegions() {
    for (x = 4; x <= 8; x++) {
        addRegion(x)
    }
}

// // printing an image practice
// function deliverImage(i) {
//     if (i <= 9) {
//         document.write(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${i}.png" style="">`);
//     } else if (i >= 10 && i <= 99) {
//         document.write(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${i}.png" style = "">`);
//     } else if (i >= 100) {
//         document.write(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png" style = "">`);
//     }
// }

// // printing a number logic practice
// function printNumber(i) {
//     if (i <= 9) {
//         document.write(`Pokemon: 00${i}`);
//     } else if (i >= 10 && i <= 99) {
//         document.write(`Pokemon: 0${i}`);
//     } else if (i >= 100) {
//         document.write(`Pokemon: ${i}`);
//     }
// }