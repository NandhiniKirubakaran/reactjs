import { Card } from '@mui/material';
import React from 'react';



export function Products({mobile={}, onAddToCart=()=>{} }) {
  

  return (
    <div>
      <Card className='card-container'>
        <img className='card-img' src={mobile.img} alt={mobile.model} />
        <h4 className='card-model'>{mobile.model}</h4>
        <h4 className='card-price'>{mobile.price}</h4>

        <button type="submit"
          className='card-button'
          onClick={() => onAddToCart(mobile)}>
          Buy Item</button>

      </Card>
    </div>
  );
}
