import "./MetricItem.css"
import MetricDate from "./MetricDate"

const MetricItem = (props) => {
    const dispCount = props.count === 0 ? "-" : props.count;

    return <div className="metric-item">
    <div className="metric-item__metric">
        <MetricDate date={props.date} />
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
    </div>
    <div className="metric-item__count">{dispCount}</div>
</div>
}

export default MetricItem