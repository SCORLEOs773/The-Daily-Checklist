import React from 'react'

const colors = ["green", "red", "Yellow", "Orange"];
const listItems = colors.map((e) => (<li key={e}>{e}</li>));

export default function List() {
  return (  
    <div>

        <ul>
            {listItems}
        </ul>
      
    </div>
  )
}
