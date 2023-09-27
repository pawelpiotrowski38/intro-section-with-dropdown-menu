import NavigationItem from "./NavigationItem";
import '../styles/navigationSublist.css';

export default function NavigationSublist({ sublist, sublistPosition, isSublistOpen }) {
    const style = sublistPosition === 'left' ? {right: '0'} : {left: '0'};

    return (
        <ul className={`navigation-sublist ${isSublistOpen ? 'navigation-sublist--open' : ''}`} style={style} >
            {sublist.map((item) => (
                <NavigationItem key={item.name} item={item} >
                    {item.name}
                </NavigationItem>
            ))}
        </ul>
    )
}