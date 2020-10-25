import React from 'react'



import './bouton-custom.styles.scss'



const BoutonCustom = ({ children, isGoogleLogin ,...otherProps}) => (

  <button 
    className={`${isGoogleLogin ? 'google-login' : ''} bouton-custom`} 
    {...otherProps}
    >

    {children}

  </button>

)



export default BoutonCustom