import { useInView } from 'react-intersection-observer';
// ------ CUSTOM COMPONENTS ------
import Navigation from './Navigation/Nav'
import CTA from '../UI/Buttons/CTA'
import SocialsLink from '../UI/Links/SocialsLink'

export default function Header({loading}) {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <header id="section--0" ref={ref}>
            <Navigation isSticky={!inView}></Navigation>
            <div className="header__title">
                <h4>Welcome</h4>
                <h1>
                    Hey I’m Aneta – Quality Assurance Developer.&nbsp; <br/> 
                    I test applications, but want to specialise in front-end technologies and web development.
                </h1>
                <div className="header__cta">
                    <CTA type="primary">See my resume</CTA>
                    <CTA type="secondary">Download my resume &darr;</CTA>
                </div>
                <div className="media">
                    <ul>
                        <SocialsLink social="facebook" linkTo="#test"></SocialsLink>
                        <SocialsLink social="github" linkTo={process.env.REACT_APP_GITHUB}></SocialsLink>
                        <SocialsLink social="linkedin" linkTo="#"></SocialsLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}