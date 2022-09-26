import './SmoothButton.css'

const SmoothButton = (props) => {
    return (
        <button className={"smooth-button"} type={props.type} id={props.id}>{props.title}</button>
    )
}

export { SmoothButton }