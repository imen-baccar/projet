import React from 'react'
import { Link } from 'react-router-dom'
import Addproduct from './Addproduct'
import SingIn from './SingIn'
import '../style/nav.css'

const Nav = () => {
  return (
    <div>
      <div id='pnav'>
        <div> <img className='logos' src='https://cdn-icons-png.flaticon.com/512/2111/2111819.png' />
          <h6>twitter</h6></div>
        <div><img className='logos' src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" />
          <h6>instagram</h6></div>
        <div> <img className='logos' src='https://cdn-icons-png.flaticon.com/512/2374/2374467.png' />
          <h6>facebook</h6></div>
        <div><img className='logos' src='https://cdn-icons-png.flaticon.com/512/1384/1384023.png' />
          <h6 >whatsapp</h6></div>
      </div>
      <hr />
      <div id='tnav' >
        <div id='logo'>
          <Link to={'/'}>
          <img id="fimg" src="https://cdn-icons-png.flaticon.com/128/6597/6597982.png" />
          </Link>
          <h3 id="your">YOUR HOME</h3>

        </div>
        <div id='tlog' >
        <Link id='und' to={'/wishlist'}>
          <div className='child'>
            <img className='tim' src='https://cdn-icons-png.flaticon.com/512/520/520459.png' />
            <h5 className='tt' >Wish List</h5>
          </div>
          </Link>
          <div className='child'>
            <img clas className='tim'sName='tim' src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' />
            <h5 className='tt' ><SingIn/></h5>
          </div>
          
          <div className='child' id='rr'>
            <img id='tim' src='https://cdn-icons-png.flaticon.com/512/1828/1828925.png' />
            <h5 id='tt'><Addproduct /></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav