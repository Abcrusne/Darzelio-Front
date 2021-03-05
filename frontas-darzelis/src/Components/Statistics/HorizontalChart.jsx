import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';
import { API } from '../../Configuration/AppConfig';

export const HorizontalChart = () => {
  const [chartData, setChartData] = useState({});
  const [kindergartens, setKindergartens] = useState({});
  const [firstPriorityRegistrations, setFirstPriorityRegistrations] = useState({});
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    //   let kindergartens = [];
    //   let firstPriorityRegistrations = [];
    axios
      .get()
      .then((res) => {
        setKindergartens(res.data.kindergartenName);
        setFirstPriorityRegistrations(res.data.firstPriorityRegistrations);
        // console.log(res);
        // for (const dataObj of res.data.data) {
        //   empSal.push(parseInt(dataObj.employee_salary));
        //   empAge.push(parseInt(dataObj.employee_age));
        // }

        setChartData({
          labels: kindergartens,
          datasets: [
            {
              label: 'Darželių populiarumas pagal 1-ą prioritetą',
              data: firstPriorityRegistrations,
              backgroundColor: ['rgba(75, 192, 192, 0.6)'],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
    console.log();
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h4>Statistika</h4>
      <div>
        <HorizontalBar
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'pavadinimas', display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    //   maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};
