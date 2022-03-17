import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['Dragon Ball']);

  // const handleAdd = () => {
  //   // setCategorias(['HunterXHunter',...categorias]);
  //   setCategorias(cat => [...cat, 'HunterXHunter']);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {
          categorias.map(categoria =>(
            <GifGrid
            key={categoria} 
            categoria={categoria} 
            />
          ))
        }
      </ol>
    </div>
  )
}
