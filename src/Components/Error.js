export default function Error(props) {
    return (
        <div className="center-center">
            <p className="loading">{(props.text) ? props.text : "Error"}</p>
        </div>
    )
}