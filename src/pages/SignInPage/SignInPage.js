import {SignInField} from "../../components/sign_in/SignInField/SignInField";
import {SmoothButton} from "../../components/ui/SmoothButton/SmoothButton";
import {Link} from "react-router-dom";

import "./SignInPage.css"


const SignInPage = () => {
    return (
        <form className={"sign-in-form"}>
            <Link to={"/"}>
                <img alt={""} src={require("../../resources/logo.png")} />
            </Link>
            <div className={"title"}>
                Sign In
            </div>
            <SignInField title={"Email"} id={"email"} type={"email"} />
            <SignInField title={"Password"} id={"password"} type={"password"}
                         additionalInfo={<Link to={"/"} className={"additional-info-link"}>Forgot password?</Link>}/>
            <SmoothButton title={"Sign In"} id={"submit"} type={"submit"} />
            <div className={"sign-up-additional-info"}>
                <Link to={"/signup"} className={"additional-info-link"}>
                    Create an account
                </Link>
            </div>
        </form>
    )
}

export { SignInPage };