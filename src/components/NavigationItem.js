import NavigationSublist from "./NavigationSublist";
import '../styles/navigationItem.css';
import { useState } from "react";

export default function NavigationItem({ icon, sublist, children }) {
    const [isSublistOpen, setIsSublistOpen] = useState(false);
    const isSublist = sublist.length > 0;

    return (
        <li className='navigation-item'>
            <a onClick={() => setIsSublistOpen(prevOpen => !prevOpen)}
                className='navigation-item__link'
                href='/#'
            >
                {icon && (
                    <img
                        className='navigation-item__icon'
                        src={`/images/${icon}`} alt={children}
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
                <NavigationSublist sublist={sublist} isSublistOpen={isSublistOpen} />
            )}
        </li>
    )
}