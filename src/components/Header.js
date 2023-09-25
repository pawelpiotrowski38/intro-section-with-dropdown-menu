import { useState } from 'react';
import Navigation from './Navigation';
import HamburgerButton from './HamburgerButton';
import '../styles/header.css';
import Logo from './Logo';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = function() {
        setMobileMenuOpen(prevOpen => !prevOpen);
    }

    return (
        <header className="header">
            <Logo />
            <Navigation mobileMenuOpen={mobileMenuOpen} />
            <HamburgerButton
                mobileMenuOpen={mobileMenuOpen}
                onToggleMobileMenu={handleToggleMobileMenu}
            />
            <div className={`header__mask ${mobileMenuOpen ? 'header__mask--visible' : ''}`}></div>
        </header>
    )
}