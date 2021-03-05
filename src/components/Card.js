import React from 'react'

function Card() {
  return (
    <div className="card">
      <span className="pokenumber">#0001</span>
      <img alt="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
      <span className="pokemonName">Bulbasaur</span>
      <div className="types">
        <span>Grass</span>
        <span>Poison</span>
      </div>
    </div>
  )
}

export default Card
