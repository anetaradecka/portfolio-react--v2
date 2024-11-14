import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function SocialsLink({social, linkTo }) {
    const socials = {
        facebook: <FontAwesomeIcon icon={faFacebookF} />,
        github: <FontAwesomeIcon icon={faGithub} />,
        linkedin: <FontAwesomeIcon icon={faLinkedinIn} />
    }

    function selectSocialIcon(social) {
        for (const [key, value] of Object.entries(socials)) {
            if (key === social) return value;
        }   
    }

    const icon = selectSocialIcon(social);

    return (
        <li>
            <a href={linkTo}>{icon}</a>
        </li>
    )
}