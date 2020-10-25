import React from 'react'



import './form-input.styles.scss'



const FormInput = ({ gestionChangement, label, ...otherProps }) => (

  <div className='group'>

    <input className='form-input'

      onChange={gestionChangement}

      {...otherProps} />

    {

      label ? 

        <label className={`${otherProps.value.length ? 'reduis' : ''} form-input-label`}>

          {label}

        </label>

        : null

    }

  </div>

) 



export default FormInput