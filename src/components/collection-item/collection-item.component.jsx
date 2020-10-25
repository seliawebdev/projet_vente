import React from 'react'



import './collection-item.styles.scss'



const CollectionItem = ({id, nom, prix, imageUrl}) => (

  <div className='collection-item'>

    <div className='image'

      style={{

          backgroundImage: `url(${imageUrl})`

      }}

    />

    <div className='collection-footer'>

      <span className='nom'>{nom}</span>

      <span className='prix'>{prix}</span>

    </div>

  </div>

)

export default CollectionItem