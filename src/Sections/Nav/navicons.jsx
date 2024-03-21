import "./navicons.css";


export default function NavIcons(props) {


    return (
        <div className="iconwrapper">
            <a href={props.link} target="blank">
                <img src={props.image} alt={props.alt} className="sc-icn" />
            </a>
        </div>
    )
}