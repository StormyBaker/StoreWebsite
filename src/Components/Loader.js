import loadGif from '../Assets/loading.gif'

export default function Loader(props) {
    return (
        <div className="center-center">
            <p className="loading">{(props.text) ? props.text : "Loading..."}</p>
            <img width="50" height="50" src={loadGif} alt="Loading page animation"></img>
        </div>
    )
}