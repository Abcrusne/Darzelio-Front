import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import { Bar, Chart, HorizontalBar, Line} from 'react-chartjs-2';
import axios from 'axios';
import Loading from '../Loading/Loading';

export default class HorizontalChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentDidMount() {
    this.getChartData();
  }
  getChartData() {
    axios.get(`${API}/api/users/statistics`)
    .then(res=> {
      const kindergarten = res.data;
    //   console.log("res data"+res.data.kindergartenName)
     
      
      let labels =[];
      let data =[];
kindergarten.map(({kindergartenName,firstPriorityRegistrations }) => {
    labels.push(kindergartenName);
    data.push(firstPriorityRegistrations)
})
    //   [...kindergarten].forEach(element => {
    //       labels.push(element.kindergartenName);
    //       data.push(element.firstPriorityRegistrations);
    //   }) 
      console.log(kindergarten);
      this.setState({
          chartData: {
              labels: labels,
            
              datasets: [
                  {
                      label: "Darželių populiarumas pirmu prioritetu",
                      data: data,
                      backgroundColor:   'rgba(75, 192, 192, 0.6)',
                      borderColor: 'rgba(15,15,15)',
                      hoverBorderColor: true,
                      hoverBackgroundColor:true,
                     
                  }
              ]
          }
      })
    }
    )
  }
  render() {
    return <div>
        {Object.keys(this.state.chartData).length ? (
            <HorizontalBar
        data={this.state.chartData}
        
        />
        )
        : <Loading/>
        }
    </div>;
  }
}

// import React, { useState, useEffect } from "react";
// import { HorizontalBar } from 'react-chartjs-2';
// import axios from 'axios';
// import { API } from '../../Configuration/AppConfig';

// export const HorizontalChart = () => {
//   const [chartData, setChartData] = useState({});
//   const [kindergartens, setKindergartens] = useState({});
//   const [firstPriorityRegistrations, setFirstPriorityRegistrations] = useState({});
//   // const [employeeSalary, setEmployeeSalary] = useState([]);
//   // const [employeeAge, setEmployeeAge] = useState([]);

//   const chart = () => {
//     //   let kindergartens = [];
//     //   let firstPriorityRegistrations = [];
//     axios
//       .get(`${API}/api/statistics`)
//       .then((res) => {
//     //     setKindergartens(res.data.kindergartenName);
//     //     setFirstPriorityRegistrations(res.data.firstPriorityRegistrations);
//     // //   console.log(kindergartens)
//     // console.log("kindergartens"+kindergartens);
//     // console.log("count"+firstPriorityRegistrations)

//         console.log(res);
//         for (const dataObj of res.data) {

//             kindergartens.push((dataObj.kindergartenName));
//             firstPriorityRegistrations.
//             push(parseInt(dataObj.firstPriorityRegistrations));
//             console.log("kindergartens"+kindergartens);
//             console.log("count"+firstPriorityRegistrations)
//         }

//         setChartData({
//         //   labels: kindergartens,
//           datasets: [
//             {
//              label: 'Darželių populiarumas pagal 1-ą prioritetą',

//               backgroundColor: ['rgba(75, 192, 192, 0.6)'],
//               borderWidth: 4,
//               data: firstPriorityRegistrations,
//             },
//           ],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log();
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <h4>Statistika</h4>
//       <div>
//         <HorizontalBar
//           data={chartData}
//         //   options={{
//         //     responsive: true,
//         //     title: { text: 'pavadinimas', display: true },
//         //     scales: {
//         //       yAxes: [
//         //         {
//         //           ticks: {
//         //             autoSkip: true,
//         //             //   maxTicksLimit: 10,
//         //             beginAtZero: true,
//         //           },
//         //           gridLines: {
//         //             display: false,
//         //           },
//         //         },
//         //       ],
//         //       xAxes: [
//         //         {
//         //           gridLines: {
//         //             display: false,
//         //           },
//         //         },
//         //       ],
//         //     },
//         //   }}
//         />
//       </div>
//     </div>
//   );
// };
