import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

const url = "https://thronesapi.com/api/v2/Characters";

function Charts() {
  const [characters, setCharacters] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data);
    }
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (!characters.length) {
      return;
    }

    const houseRegex = /House /;
    const houseCounts = {};
    characters.forEach((character) => {
      let house = character.family;

      if (
        house === "House Targaryn" ||
        house === "Targaryn" ||
        house === "Targaryan"
      ) {
        house = "House Targaryen";
      } else if (
        house === "House Lannister" ||
        house === "Lanister" ||
        house === "Lannister"
      ) {
        house = "House Lanister";
      } else if (
        house === "" ||
        house === "Unknown" ||
        house === "Unkown" ||
        house === "None"
      ) {
        houseCounts["Unknown"] = (houseCounts["Unknown"] || 0) + 1;
      }
      const familyName = character.family.replace(houseRegex, "");
      houseCounts[familyName] = (houseCounts[familyName] || 0) + 1;
    });

    if (chartInstance) {
      chartInstance.destroy();
    }

    const donutChart = document.querySelector(".donut-chart");
    const newChartInstance = new Chart(donutChart, {
      type: "doughnut",
      data: {
        labels: Object.keys(houseCounts),
        datasets: [
          {
            label: "Number of Characters",
            data: Object.values(houseCounts),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
    });

    setChartInstance(newChartInstance);
  }, [characters]);

  return (
    <main>
      <canvas
        className="donut-chart"
        aria-label="donut chart"
        role="img"
      ></canvas>
    </main>
  );
}

export default Charts;
