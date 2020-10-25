import React from 'react'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'



import { auth } from '../../firebase/firebase.utils'



import { ReactComponent as Logo } from '../../assets/couronne.svg'

import './header.styles.scss'



const Header = ({currentUser}) => (

  <div className='header'>

    <Link className='logo-container' to="/">

      <Logo className='logo'/>

    </Link>

    <div className='options'>

      <Link className='option' to="/shopping">

        SHOP

      </Link>

      <Link className='option' to="/contact">

        CONTACT

      </Link>
      {

currentUser ? 

  <div className='option' onClick={ () => auth.signOut()}>

      LOGOUT

  </div>

  :

  <Link className='option' to="/inscription">

    LOGIN

  </Link>

}


    </div>

  </div> 

)

const mapStateToProps = state => ({

  currentUser: state.user.currentUser

})



export default connect(mapStateToProps)(Header)