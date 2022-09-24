import '../../styles/header.css'


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
        <div className={"header-logo"}>
            <img alt={""} src={require('../../resources/logo.png')}/>
            <a href={"/"}>
                Gang Game
            </a>
        </div>
    )
}

const HeaderProfileInfo = () => {
    return (
        <div className={"profile-info"}>

        </div>
    )
}

export { Header };