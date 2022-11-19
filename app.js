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
                // console.log(pokeData.name)


                // create P for Pokemon Name, set class, append it to PokeSpan
                var pokemonName = document.createElement('p')
                pokemonName.setAttribute('class', 'pokemonName')
                var mildName = pokeData.name
                var pokeName = mildName.split('-', 1)
                // attempting to change the naming function so that some pokemon's hyphen name can stay
                // if (mildName.textContent.includes('Tapu')) {
                //     var pokeName = mildName.split('-', 1)
                // } else {
                //     var pokeName = mildName
                // }
                pokemonName.innerHTML = pokeName
                pokeSpan.appendChild(pokemonName)

                // create P for pokemon Number
                var pokemonNumber = document.createElement('p')
                pokemonNumber.setAttribute('class', 'pokemonNumber')
                // create img for pokeomon image
                var pokemonImage = document.createElement('img')
                pokemonImage.setAttribute('class', 'pokemonImage')
                // logic to make sure there are the right amount of zeros for the image url
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
                // var pokemonNumber = document.create 'pokeCircle')
                // pokeSpan.appendChild(pokeCircle)
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

                //  determine the first child inner HTML, then make the box shadow
                // a color corresponding to the pokemon's first color
                // console.log(pokemonType.firstChild.innerHTML)
                // pokeSpan.addEventListener("mouseenter", (event) => {
                //     // highlight the mouseenter target
                //     if (pokemonType.firstChild.innerHTML == 'grass') {
                //         event.target.style["boxShadow"] = "#9bcc50 0px 19px 38px, #9bcc50 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'poison') {
                //         event.target.style["boxShadow"] = "#b97fc9 0px 19px 38px, #b97fc9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fire') {
                //         event.target.style["boxShadow"] = "#fd7d24 0px 19px 38px, #fd7d24 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'water') {
                //         event.target.style["boxShadow"] = "#4592c4 0px 19px 38px, #4592c4 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'bug') {
                //         event.target.style["boxShadow"] = "#729f3f 0px 19px 38px, #729f3f 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'normal') {
                //         event.target.style["boxShadow"] = "#a4acaf 0px 19px 38px, #a4acaf 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'rock') {
                //         event.target.style["boxShadow"] = "#ab9842 0px 19px 38px, #ab9842 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'flying') {
                //         event.target.style["boxShadow"] = "#3dc7ef 0px 19px 38px, #3dc7ef 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ground') {
                //         event.target.style["boxShadow"] = "#ab9842 0px 19px 38px, #f7de3f 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'psychic') {
                //         event.target.style["boxShadow"] = "#f366b9 0px 19px 38px, #f366b9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'electric') {
                //         event.target.style["boxShadow"] = "#eed535 0px 19px 38px, #eed535 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ice') {
                //         event.target.style["boxShadow"] = "#51c4e7 0px 19px 38px, #51c4e7 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ghost') {
                //         event.target.style["boxShadow"] = "#7b62a3 0px 19px 38px, #7b62a3 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fighting') {
                //         event.target.style["boxShadow"] = "#d56723 0px 19px 38px, #d56723 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fairy') {
                //         event.target.style["boxShadow"] = "#fdb9e9 0px 19px 38px, #fdb9e9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'dragon') {
                //         // event.target.style["boxShadow"] = "#f16e57 0px 19px 38px, #f16e57 0px 15px 12px";
                //         // event.target.style["boxShadow"] = "#f16e57 0px 19px 38px, #53a4cf 0px -15px 10px";
                //         event.target.style["boxShadow"] = "0 19px 12px 0.2em #f16e57, 0 15px 20px 0.8em #53a4cf";
                //     } if (pokemonType.firstChild.innerHTML == 'dark') {
                //         event.target.style["boxShadow"] = "#707070 0px 19px 38px, #707070 0px 15px 12px";
                //     }
                // }, false);
                // // reset the box
                // pokeSpan.addEventListener("mouseleave", (event) => {
                //     event.target.style["boxShadow"] = "";
                // }, false);


                // // create the pokemon's consoles' span
                var pokemonConsoles = document.createElement('span')
                pokemonConsoles.setAttribute('class', 'pokemonConsoles', 'id', 'pokemonConsoles')

                var consoleImage = document.createElement('img')
                consoleImage.setAttribute('class', 'pokemonConsoleImage')

                // Apply Gameboy to Gen 1
                if (pokemonNumber.innerHTML <= 151) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gb.png')
                } // apply GBC to Gen 2 
                else if (pokemonNumber.innerHTML >= 152 && pokemonNumber.innerHTML <= 251) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gbc9.png')
                } // apply GBA to Gen 3
                else if (pokemonNumber.innerHTML >= 252 && pokemonNumber.innerHTML <= 386) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GBA/Gameboy%20Sp4.png')
                } // apply DS to Gen 4 & 5
                else if (pokemonNumber.innerHTML >= 387 && pokemonNumber.innerHTML <= 649) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png')
                } // apply 3DS to Gen 6
                else if (pokemonNumber.innerHTML >= 650 && pokemonNumber.innerHTML <= 721) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')
                } // apply 3DS & Switch to Gen 7 
                else if (pokemonNumber.innerHTML >= 722 && pokemonNumber.innerHTML <= 809) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')

                    var consoleImage2 = document.createElement('img')
                    consoleImage2.setAttribute('class', 'pokemonConsoleImage')
                    consoleImage2.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                } // apply switch to Gen 8
                else if (pokemonNumber.innerHTML >= 810 && pokemonNumber.innerHTML <= 905) {
                    consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                }

                pokeSpan.appendChild(pokemonType)
                pokemonConsoles.appendChild(consoleImage)
                // only apply second image if it exists
                if (consoleImage2) { pokemonConsoles.appendChild(consoleImage2) }
                pokeSpan.appendChild(pokemonConsoles)
            })
    }

}