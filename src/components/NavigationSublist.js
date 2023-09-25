import NavigationItem from "./NavigationItem";
import '../styles/navigationSublist.css';

export default function NavigationSublist({ sublist, isSublistOpen }) {
    return (
        <ul className={`navigation-sublist ${isSublistOpen ? 'navigation-sublist--open' : ''}`}>
            {sublist.map((item) => (
                <NavigationItem key={item.name} icon={item.icon} sublist={false} >
                    {item.name}
                </NavigationItem>
            ))}
        </ul>
    )
}