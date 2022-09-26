import "./SignInField.css"

const SignInField = (props) => {
    return (
        <div className={"sign-in-field"}>
            <div className={"sign-in-field-title"}>
                {props.title}
            </div>
            <div className={"additional-info"}>
                {props.additionalInfo}
            </div>
            <input type={props.type} id={props.id}/>
        </div>
    )
}

export { SignInField };