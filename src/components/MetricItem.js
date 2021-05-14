import "./MetricItem.css"

const MetricItem = () => {
    let metricDate=new Date(2021, 4, 12, 17, 30, 0, 0);
    let metricDeveloper = "Aklilu"
    let project = "StockMarket Mobile App"
    let count = 3

    return <div className="metric-item">
    <div className="metric-item__date">{metricDate.toISOString()}</div>
    <div className="metric-item__metric">
        <div>{metricDeveloper}</div>
        <h3>{project}</h3>
    </div>
    <div className="metric-item__count">{count}</div>
</div>
}

export default MetricItem