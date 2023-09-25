import NavigationButtons from './NavigationButtons';
import NavigationList from './NavigationList';
import '../styles/navigation.css';

export default function Navigation({ mobileMenuOpen }) {
    return (
        <nav className={`navigation ${mobileMenuOpen ? 'navigation__mobile--visible' : ''}`}>
            <NavigationList />
            <NavigationButtons />
        </nav>
    )
}