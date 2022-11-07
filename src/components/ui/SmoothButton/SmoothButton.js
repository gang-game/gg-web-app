import './SmoothButton.css'

/**
 * Smoothly filling button
 * @param {string} type - type of the button
 * @param {string} title - text in the button
 */
const SmoothButton = (props) => {
    return (
        <button className={"smooth-button"} type={props.type}>{props.title}</button>
    )
}

export { SmoothButton }