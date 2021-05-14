import MetricItem from "./components/MetricItem"

function App() {
  const metrics = [
    {
      date: new Date(2021, 4, 12, 17, 39, 0, 0),
      developer: "Aklilu",
      project: "StockMarket Backend App",
      count: 5,
    },
    {
      date: new Date(2021, 4, 11, 19, 32, 0, 0),
      developer: "Joni",
      project: "Fanzine Mobile App",
      count: 0,
    },
    {
      date: new Date(2021, 4, 11, 18, 40, 0, 0),
      developer: "Theodoros",
      project: "Fanzine Mobile App",
      count: 3,
    },
    {
      date: new Date(2021, 4, 12, 17, 30, 0, 0),
      developer: "Joni",
      project: "StockMarket Backend App",
      count: 22,
    },
    {
      date: new Date(2021, 4, 12, 15, 23, 0, 0),
      developer: "Theodoros",
      project: "StockMarket Mobile App",
      count: 0,
    }
  ]

  return (
    <div>
      <h1>Hello React!</h1>
      <MetricItem count={metrics[0].count} project={metrics[0].project} developer={metrics[0].developer} date={metrics[0].date} />
      <MetricItem count={metrics[1].count} project={metrics[1].project} developer={metrics[1].developer} date={metrics[1].date} />
      <MetricItem count={metrics[2].count} project={metrics[2].project} developer={metrics[2].developer} date={metrics[2].date} />
      <MetricItem count={metrics[3].count} project={metrics[3].project} developer={metrics[3].developer} date={metrics[3].date} />
      <MetricItem count={metrics[4].count} project={metrics[4].project} developer={metrics[4].developer} date={metrics[4].date} />
    </div>

  );
}

export default App;
