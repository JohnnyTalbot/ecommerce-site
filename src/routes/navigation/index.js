import { Outlet, Link } from 'react-router-dom';

import './style.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <div>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </ Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </ Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
  }

export default Navigation;