import '../styles/heroSection.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-section__image-container">
                <picture>
                    <source srcSet="/images/image-hero-desktop.png" media="(min-width: 38.75em)" />
                    <img className="hero-section__image" src="/images/image-hero-mobile.png"  alt="man with a laptop" />
                </picture>
            </div>
            <div className="hero-section__info-container">
                <h1 className='hero-section__title'>
                    Make remote work
                </h1>
                <p className='hero-section__paragraph'>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button className='hero-section__button'>
                    Learn more
                </button>
                <div className='hero-section__icons-container'>
                    <img className='hero-section__icon--db' src='/images/client-databiz.svg' alt='databiz' />
                    <img className='hero-section__icon--ap' src='/images/client-audiophile.svg' alt='audiophile' />
                    <img className='hero-section__icon--mt' src='/images/client-meet.svg' alt='meet' />
                    <img className='hero-section__icon--mk' src='/images/client-maker.svg' alt='maker' />
                </div>
            </div>
        </section>
    )
}