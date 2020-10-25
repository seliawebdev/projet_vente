import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './apercu-collection.styles.scss'



const ApercuCollection = ({ titre, items}) => (

  <div className='apercu-collection'>

    <h1 className='titre'>{titre.toUpperCase()}</h1>

    <div className='apercu'>

      {

        items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherItemPorps}) => (

                <CollectionItem key={id} {...otherItemPorps}/>

          //<div key={item.id}> {item.nom}</div>

        ))

      }

    </div>

  </div>



)



export default ApercuCollection