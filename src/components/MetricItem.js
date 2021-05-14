import "./MetricItem.css"

const MetricItem = (props) => {
    return <div className="metric-item">
    <div className="metric-item__date">{props.date.toISOString()}</div>
    <div className="metric-item__metric">
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
    </div>
    <div className="metric-item__count">{props.count}</div>
</div>
}

export default MetricItem