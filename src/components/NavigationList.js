import NavigationItem from './NavigationItem';
import '../styles/navigationList.css';

const navigationItems = [
    {
        name: 'Features',
        icon: null,
        sublist: [
            {
                name: 'Todo List',
                icon: 'icon-todo.svg',
                sublist: [],
            },
            {
                name: 'Calendar',
                icon: 'icon-calendar.svg',
                sublist: [],
            },
            {
                name: 'Reminders',
                icon: 'icon-reminders.svg',
                sublist: [],
            },
            {
                name: 'Planning',
                icon: 'icon-planning.svg',
                sublist: [],
            }
        ],
        sublistPosition: 'left'
    },
    {
        name: 'Company',
        icon: null,
        sublist: [
            {
                name: 'History',
                icon: null,
                sublist: [],
            },
            {
                name: 'Our Team',
                icon: null,
                sublist: [],
            },
            {
                name: 'Blog',
                icon: null,
                sublist: [],
            }
        ],
        sublistPosition: 'right'
    },
    {
        name: 'Careers',
        icon: null,
        sublist: [],
        sublistPosition: null
    },
    {
        name: 'About',
        icon: null,
        sublist: [],
        sublistPosition: null
    }
]

export default function NavigationList() {
    return (
        <ul className='navigation-list'>
            {navigationItems.map((item) => (
                <NavigationItem key={item.name} item={item} >
                    {item.name}
                </NavigationItem>
            ))}
        </ul>
    )
}