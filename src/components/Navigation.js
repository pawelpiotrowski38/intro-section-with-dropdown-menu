import '../styles/navigation.css';

export default function Navigation({ mobileMenuOpen }) {
    return (
        <nav className={`navigation ${mobileMenuOpen ? 'navigation__mobile--visible' : ''}`}>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <a className='navigation__item-link' href='/#'>Features</a>
                    <img
                        className='navigation__item-icon'
                        src='/images/icon-arrow-down.svg' alt='arrow'
                    />
                </li>
                <li className='navigation__item'>
                    <a className='navigation__item-link' href='/#'>Company</a>
                    <img
                        className='navigation__item-icon'
                        src='/images/icon-arrow-down.svg' alt='arrow'
                    />
                </li>
                <li className='navigation__item'>
                    <a className='navigation__item-link' href='/#'>Careers</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__item-link' href='/#'>About</a>
                </li>
            </ul>
            <div className='navigation__buttons-container'>
                <a className='navigation__button-login' href='/#'>Login</a>
                <a className='navigation__button-register' href='/#'>Register</a>
            </div>
        </nav>
    )
}