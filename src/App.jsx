import "./App.css";

export default function App() {
  return (
    <div className="priceList">
      <PriceList />
    </div>
  );
}

function PriceList() {
  const data = [
    {
      how: "F R E E",
      price: "$0",
      user: "✅ Single-User",
      gb: "✅ 5GB Storage",
      limit: "❎ Unlimited Public Projects",
      private: "❎ Unlimited Private Projects",
      community: "❎ Community Access",
      phone: "❎ Dedicated Phone Support",
      free: "❎ Free Subdomain",
      month: "❎ Monthly Status Report",
    },
    {
      how: "P L U S",
      price: "$9",
      user: "✅ 5-Users",
      gb: "✅ 50GB Storage",
      limit: "✅ Unlimited Public Projects",
      private: "✅ Unlimited Private Projects",
      community: "✅ Community Access",
      phone: "❎ Dedicated Phone Support",
      free: "❎ Free Subdomain",
      month: "❎ Monthly Status Report",
    },
    {
      how: "P R O",
      price: "$49",
      user: "✅ Unlimited-User",
      gb: "✅ 150GB Storage",
      limit: "✅ Unlimited Public Projects",
      private: "✅ Unlimited Private Projects",
      community: "✅ Community Access",
      phone: "✅ Dedicated Phone Support",
      free: "✅ Unlimited Free Subdomain",
      month: "✅ Monthly Status Report",
    },
  ];
  return (
    <div className="container">
      {data.map((ele) => (
        <Price arr={ele} />
      ))}
    </div>
  );
}

function Price({ arr }) {
  return (
    <div className="main">
      <div className="first">
        <p className="how">{arr.how}</p>
        <p className="rice">{arr.price}<span className="month">/month</span></p>
      </div>
      <div className="secound">
        <p>{arr.user}</p>
        <p>{arr.gb}</p>
        <p>{arr.limit}</p>
        <p>{arr.community}</p>
        <p>{arr.private}</p>
        <p>{arr.phone}</p>
        <p>{arr.free}</p>
        <p>{arr.month}</p>
        <button className="button">BUTTON</button>
      </div>
    </div>
  );
}
