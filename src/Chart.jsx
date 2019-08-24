import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";
import "chartjs-plugin-doughnutlabel";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "rgb(255, 99, 132)",
      backGroundColor: ["orange", "red", "blue"],
      boxWidth: 10,
      padding: 30
    }
  },
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
    doughnutlabel: {
      labels: [
        {
          text: "The title",
          font: {
            size: "60"
          }
        }
      ]
    }
  }
};

const chartData = {
  labels: ["100", "200", "300"],
  datasets: [
    {
      data: [100, 200, 300],
      label: "pop",
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};
const getChartData = canvas => {
  return chartData;
};

const Chart = props => (
  <div
    style={{
      position: "relative",
      width: 300,
      height: 370,
      margin: 0,
      border: "1px solid red"
    }}
  >
    <Doughnut options={options} data={getChartData} />
  </div>
);

export default Chart;
