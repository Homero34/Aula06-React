import React from 'react'

function Propt(props) {
    return <li> {props.frase} {props.brand} </li>;
    
  }


  
export const File = () => {
    const cars = [
        {id: 1, brand: 'Ford' , frase: 'Uma'},
        {id: 2, brand: 'BMW' , frase: 'Uma'},
        {id: 3, brand: 'Audi' , frase: 'Uma'}
      ];

      const books = [
       {id: 1,brand: 'Harry Potter' , frase:'Eu leio'},
       {id: 2,brand: 'Percy Jackson', frase:'Eu leio'},
       {id: 3,brand: 'Noites Estreladas', frase:'Eu leio'}
      ];

  return (
    <>
        <div>
            <h1>Quem mora em minha garagem?</h1>
            <ul>
            {cars.map((car) => <Propt key={car.id} brand={car.brand} frase={car.frase} />)}
            </ul>
        </div>

        <div>
            <h1>Qual livro voce le?</h1>
            <ul>
            {books.map((book) => <Propt key={book.id} brand={book.brand} frase={book.frase} />)}
             </ul>
        </div>


          

    </>
  )
}
