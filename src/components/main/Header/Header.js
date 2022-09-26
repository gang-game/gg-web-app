import {Link} from "react-router-dom";

import './Header.css'


const Header = () => {
    return (
        <header className={"hat"}>
            <HeaderLogo />
            <HeaderProfileInfo />
        </header>
    )
}

const HeaderLogo = () => {
    return (
        <Link className={"header-logo"} to={"/"}>
            <img alt={""} src={require('../../../resources/logo.png')}/>
            <div className={"name"}>
                Gang Game
            </div>
        </Link>
    )
}

const HeaderProfileInfo = () => {
    return (
        <Link to={"/"} className={"profile-info"}>

        </Link>
    )
}

export { Header };