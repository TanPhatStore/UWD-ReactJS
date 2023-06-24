
import './header.scss'
import logoGray from './logoGray.png'
import { Link } from 'react-router-dom'

function HeaderWelcome() {
    return (
        <div id='headerWelcome' className='col-lg-12'>
            <div className='logo'>
                <img src={logoGray} height='90%' />
            </div>
            <div className='menu'>
                <div className='menu-item'>COLLECTIONS</div>
                <div className='menu-item'>LEARN</div>
                <div className='menu-item'>COMMUNITY</div>
                <div className='menu-item'>FAQ</div>
            </div>
            <div className='login-logout'>
                <button><Link to='/signin' style={{textDecoration : 'none', color : 'rgb(89, 87, 87)'}}>Sign in</Link></button>
                <button className='btn-signup' ><Link to='/signup/new' style={{textDecoration : 'none', color : 'rgb(89, 87, 87)'}}>Sign up</Link></button>
            </div>
        </div>
    );
}

export default HeaderWelcome;