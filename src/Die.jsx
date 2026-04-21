export default function Die(props)
{
    return (
        <button
            style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
            aria-pressed={props.isHeld} 
            aria-label={`Die with a value ${props.value}
            ${props.isHeld ? "held" : "not held"}`}
            onClick={()=>{props.hold(props.id)}}
        >{props.value}</button>
    )
}