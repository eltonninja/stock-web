import PortfolioTable from "./components/PortfolioTable";

const data = {
  totalMarketValue: 48234619,
  totalDelivVal: 48232156,
  totalCurrent: 99.98,
  rows: [
    {
      contract: "AMZN",
      bid: 809.42,
      ask: 809.99,
      last: 809.7,
      change: -7.99,
      position: 40867,
      marketValue: 33090010,
      delivVal: 33089881,
      current: 68.59,
    },
    {
      contract: "GOOG",
      bid: 799.04,
      ask: 799.53,
      last: 799.53,
      change: -2.03,
      position: 7519,
      marketValue: 6011666,
      delivVal: 6009714,
      current: 12.46,
    },
    {
      contract: "IBKR",
      bid: 34.26,
      ask: 34.29,
      last: 34.28,
      change: -0.13,
      position: 172210,
      marketValue: 5903359,
      delivVal: 5902963,
      current: 12.24,
    },
    {
      contract: "GOOGL",
      bid: 823.3,
      ask: 823.75,
      last: 823.45,
      change: -3.64,
      position: 5900,
      marketValue: 4858355,
      delivVal: 4858738,
      current: 10.07,
    },
    {
      contract: "AAPL",
      bid: 116.69,
      ask: 116.7,
      last: 116.7,
      change: -0.42,
      position: 16182,
      marketValue: 1888439,
      delivVal: 1888358,
      current: 3.91,
    },
    {
      contract: "IBM",
      bid: 152.39,
      ask: 152.42,
      last: 152.42,
      change: 1.16,
      position: 2701,
      marketValue: 411686,
      delivVal: 411659,
      current: 3.91,
    },
    {
      contract: "HELE",
      bid: 81,
      ask: 81.1,
      last: 81.05,
      change: -0.75,
      position: 3000,
      marketValue: 243150,
      delivVal: 243135,
      current: 0.5,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <PortfolioTable
        rows={data.rows}
        totalMarketValue={data.totalMarketValue}
        totalDelivVal={data.totalDelivVal}
        totalCurrent={data.totalCurrent}
      />
    </div>
  );
}

export default App;
