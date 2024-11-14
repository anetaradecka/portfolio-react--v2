import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function SocialsLink({ arr }) {
    return (
        <ul>
            {arr.map(el => {
                return (<><FontAwesomeIcon icon={faCaretRight} /><li className="list-item">{el}</li></>)
            })}
        </ul>
    )
}