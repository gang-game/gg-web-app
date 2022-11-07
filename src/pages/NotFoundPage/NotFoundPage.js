import './NotFoundPage.css'
import {Link} from "react-router-dom";


const NotFoundPage = () => {
    return (
        <Link to={"/"} className={"not-found"}>
            Sorry! Page not found.
        </Link>
    )
}

export { NotFoundPage }