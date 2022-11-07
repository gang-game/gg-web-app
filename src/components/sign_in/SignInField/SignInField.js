import "./SignInField.css"

/** field used in sign in page
 * @param {string} title - name of the field
 * @param {string} additionalInfo - some information you want to add
 * @param {string} type - type of the field
 */
const SignInField = (props) => {
    return (
        <div className={"sign-in-field"}>
            <div className={"sign-in-field-title"}>
                {props.title}
            </div>
            <div className={"additional-info"}>
                {props.additionalInfo}
            </div>
            <input type={props.type}/>
        </div>
    )
}

export { SignInField };