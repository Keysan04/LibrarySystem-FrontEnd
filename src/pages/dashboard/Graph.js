import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const { users } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);
  const dataset1 = users.map((item, i) => i);
  const dataset2 = books.map((item, i) => i);
  const total = books.reduce((accumulator, i) => {
    return accumulator + i;
  }, 0);
  console.log(total);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["January", "Feb", "March", "April", "May"];
  const data = {
    labels,
    datasets: [
      {
        //transList.datatype.number({ min: -1000, max: 1000 })
        label: "Users",
        data: dataset1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Books",
        data: dataset2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default Graph;
