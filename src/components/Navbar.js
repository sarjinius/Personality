import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from './buttons/LoginButton';
import { LogoutButton } from './buttons/LogoutButton';
import { SignupButton } from './buttons/SignupButton';
import './styles/Navbar.css';

// The navigation page
export const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className='sum'>
            <div className='logo'>
                Personality
            </div>
            <nav classitem="item">
                <ul className="ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>
                </ul>
            </nav>
            <div className="nav-bar__buttons">
                {!isAuthenticated && (
                    <>
                        <SignupButton />
                        <LoginButton />
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <LogoutButton />
                    </>
                )}
            </div>
        </div>
    );
};