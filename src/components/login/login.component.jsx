import React from 'react'

import FormInput from '../form-input/form-input.component' 

import BoutonCustom from '../bouton_custom/bouton-custom.component'

import { auth, loginAvecGoogle } from '../../firebase/firebase.utils'

import './login.styles.scss'



class Login extends React.Component {

  constructor(props){

    super(props)



    this.state = {

      email: '',

      password: ''

    }

  }



  gestionSubmit = async event => {

    event.preventDefault()

    const { email, password } = this.state



    try {

      await auth.signInWithEmailAndPassword(email, password)

      this.setState({email:'', password: ''})

    } catch (error) {

      console.log(error)

    }
  }



  gestionChangement = event => {

    const { value, name } = event.target

    this.setState({ [name] : value })

  }



  render() {

    return (

      <div className='login'>

        <h2 className='titre'>J'ai déjà un compte</h2>

        <span>Connectez vous avec votre email et mot de passe</span>



        <form onSubmit={this.gestionSubmit}>

          <FormInput

            type="email"

            name="email"

            value={this.state.email}

            onChange={this.gestionChangement}

            required />

          

          <FormInput

            type="password"

            name="password"

            value={this.state.password}

            onChange={this.gestionChangement}

            required />

        <div className='bouttons'>
          <BoutonCustom type="submit">Connecter</BoutonCustom>
                <BoutonCustom onClick={loginAvecGoogle} isGoogleLogin>Connection Google</BoutonCustom>
        
        </div>
        </form>

      </div>



    )

  }

}



export default Login