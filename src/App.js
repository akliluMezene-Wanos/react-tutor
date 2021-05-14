import MetricItem from "./components/MetricItem"

function App() {
  let metricDate=new Date(2021, 4, 12, 17, 30, 0, 0);
  let metricDeveloper = "Aklilu"
  let project = "StockMarket Mobile App"
  let count = 33

  return (
    <div>
      <h1>Hello React!</h1>
      <MetricItem
        count={count}
        project={project}
        developer={metricDeveloper}
        date={metricDate}
      />
    </div>

  );
}

export default App;
