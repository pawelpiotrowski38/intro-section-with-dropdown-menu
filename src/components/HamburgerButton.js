import '../styles/hamburgerButton.css';

export default function HamburgerButton({ mobileMenuOpen, onToggleMobileMenu }) {
    return (
        <button onClick={onToggleMobileMenu} className="hamburger-button">
            <span
                className={`hamburger-button__span ${mobileMenuOpen ? 'hamburger-button__span-first--close' : 'hamburger-button__span-first--open'}`}>
            </span>
            <span
                className={`hamburger-button__span ${mobileMenuOpen ? 'hamburger-button__span-second--close' : 'hamburger-button__span-second--open'}`}>
            </span>
            <span
                className={`hamburger-button__span ${mobileMenuOpen ? 'hamburger-button__span-third--close' : 'hamburger-button__span-third--open'}`}>
            </span>
        </button>
    )
}