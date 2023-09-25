import '../styles/logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <a href='/#'>
                <img className="logo__image" src="/images/logo.svg" alt="snap" />
            </a>
        </div>
    )
}