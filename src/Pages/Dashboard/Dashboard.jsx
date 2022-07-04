import React from "react";
import Card from "../../Components/Web Components/Card/Card";
import Chart from "../../Components/Web Components/Chart/Chart";
import Traffic from "./Traffic";

function Dashboard() {
  const data = [
    { color: "red", count: 23569, title: "Revenue", icon: "pe-7s-cash" },
    { color: "green", count: 343, title: "Sales", icon: "pe-7s-cart" },
    { color: "blue", count: 349, title: "Templates", icon: "pe-7s-browser" },
    { color: "purple", count: 2986, title: "Clients", icon: "pe-7s-user" },
  ];

  return (
    <>
      <div className="row">
        {data.map((el) => (
          <Card
            title={el.title}
            count={el.count}
            icon={el.icon}
            color={el.color}
          />
        ))}
      </div>

      <Traffic />
      <Chart />
    </>
  );
}

export default Dashboard;
