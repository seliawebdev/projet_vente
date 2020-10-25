import React from 'react'



import FormInput from '../form-input/form-input.component'

import BoutonCustom from '../bouton_custom/bouton-custom.component'

import { auth, creerUserProfilDocument } from '../../firebase/firebase.utils'

//import './inscription.styles'



class Inscription extends React.Component {

  constructor() {

    super()



    this.state = {

      displayName: '',

      email: '',

      password: '',

      confirmPassword: ''

    }

  }



  gestionSubmit = async event => {

    event.preventDefault()



    const { displayName, email, password, confirmPassword } = this.state

    

    if (password !== confirmPassword) {

      alert("Le mot de passe est différent")

      return

    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password)



      await creerUserProfilDocument(user, { displayName })



      this.setState({

        displayName: '',

        email: '',

        password: '',

        confirmPassword: ''

      })

    } catch (error) {

      console.error(error)

    }

  }



  gestionChangement = event => {

    const { name, value } = event.target

    

    this.setState({[name]: value})

  } 



  render() {

    const {displayName, email, password, confirmPassword } = this.state

    return (

      <div className='inscription'>

        <h2 className='titre'>JE N'AI PAS DE COMPTE</h2>

        <span>Inscrivez-vous avec votre email et mot de passe</span>

        <form className='inscription-form' onSubmit={this.gestionSubmit}>

          <FormInput

            type='text'

            name='displayName'

            value={displayName}

            onChange={this.gestionChangement}

            label="Votre nom"

            required

          />

          <FormInput

            type='email'

            name='email'

            value={email}

            onChange={this.gestionChangement}

            label="Email"

            required

          />

          <FormInput

            type='password'

            name='password'

            value={password}

            onChange={this.gestionChangement}

            label="Mot de passe"

            required

          />

          <FormInput

            type='password'

            name='confirmPassword'

            value={confirmPassword}

            onChange={this.gestionChangement}

            label="Confirme mot de passe"

            required

          />

          <BoutonCustom type='submit'>S'INSCRIRE</BoutonCustom>

        </form>

      </div>

    )

  }

}



export default Inscription