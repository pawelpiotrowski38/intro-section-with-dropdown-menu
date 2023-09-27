import NavigationSublist from "./NavigationSublist";
import '../styles/navigationItem.css';
import { useState } from "react";

export default function NavigationItem({ item, children }) {
    const [isSublistOpen, setIsSublistOpen] = useState(false);
    const isSublist = item.sublist.length > 0;

    return (
        <li className='navigation-item'>
            <a onClick={() => setIsSublistOpen(prevOpen => !prevOpen)}
                className='navigation-item__link'
                href='/#'
            >
                {item.icon && (
                    <img
                        className='navigation-item__icon'
                        src={`/images/${item.icon}`} alt={`${children} icon`}
                    />
                )}
                {children}
                {isSublist && (
                    <img
                        className={`navigation-item__arrow-icon ${isSublistOpen ? 'navigation-item__arrow-icon--open' : ''}`} 
                        src='/images/icon-arrow-down.svg' alt='arrow'
                    />
                )}
            </a>
            {isSublist && (
                <NavigationSublist sublist={item.sublist} sublistPosition={item.sublistPosition} isSublistOpen={isSublistOpen} />
            )}
        </li>
    )
}