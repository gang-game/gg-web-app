import '../../styles/header.css'


const Header = () => {
    return (
        <header className={"hat"}>
            <HeaderLogo />
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

export default Header;