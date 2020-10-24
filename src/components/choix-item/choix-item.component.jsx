
import React from 'react';

import {withRouter} from 'react-router-dom'





import './choix-item.styles.scss';



const ChoixItem = ( {titre, imageUrl, taille, history , linkUrl, match}) => (

  <div 
    
  className={`${taille} choix-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

<div className='background-image' style={{

backgroundImage: `url(${imageUrl})`

}}/>
    <div className="content">

        <h1 className='titre'> {titre.toUpperCase()} </h1>

        <span className="sous-titre">Achetez maintenant</span>

    </div>

  </div>

)



export default withRouter(ChoixItem);