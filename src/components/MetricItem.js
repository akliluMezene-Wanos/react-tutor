import "./MetricItem.css"

const MetricItem = (props) => {
    const dispDate = props.date.toLocaleString("en-US", 
        {hour: "2-digit", minute: "2-digit", hour12: false});
    const dispCount = props.count === 0 ? "-" : props.count;

    return <div className="metric-item">
    <div className="metric-item__date">{dispDate}</div>
    <div className="metric-item__metric">
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
    </div>
    <div className="metric-item__count">{dispCount}</div>
</div>
}

export default MetricItem