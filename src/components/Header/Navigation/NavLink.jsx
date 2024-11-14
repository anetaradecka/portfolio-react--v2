export default function NavLink({children, linkTo}) {
    return (
        <li className={linkTo === "section--0" ? "nav__item active" : "nav__item"}>
            <a className="nav__link" href={`#${linkTo}`}>{children}</a>
        </li>
    )
}