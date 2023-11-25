const pokedexStorageJSON=localStorage.getItem('pokedex-local-storage')
let pokedexData=[]
const list=document.querySelector('ul')
if(pokedexStorageJSON!==null){
  pokedexData=JSON.parse(pokedexStorageJSON)
  pokedexData.forEach((currentValue,index)=>{
    const entry=document.createElement('li')
    const pokeballIcon=document.createElement('img')
    const pokemonName=document.createElement('p')
    const capitalizedPokemon=currentValue.name[0].toUpperCase() +  currentValue.name.slice(1)
    pokemonName.textContent=`${index+1}  ${capitalizedPokemon}`
    pokeballIcon.src='../images/pokeball.png'
    pokeballIcon.className='marker'
    entry.appendChild(pokeballIcon)
    entry.appendChild(pokemonName)
    list.appendChild(entry)
   entry.addEventListener('click',()=>{highlightEntry(entry)})
  })}

const listItems=document.querySelectorAll('li')
function highlightEntry(clicked){
  listItems.forEach((element)=>{
    element.classList.remove('selected')
  })
  clicked.classList.add('selected')
}
