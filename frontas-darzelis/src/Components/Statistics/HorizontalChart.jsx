import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import { Bar, Chart, HorizontalBar, Line } from 'react-chartjs-2';
import axios from 'axios';
import Loading from '../Loading/Loading';

export default class HorizontalChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},

      registrationsInFirstAgeGroup: '',
      registrationsInSecondAgeGroup: '',
      spotsInFirstAgeGroups: '',
      spotsInSecondAgeGroups: '',
      active: '',
      locked: '',
      waitingInFirstAgeGroup: '',
      waitingInSecondAgeGroup: '',
    };
  }
  componentDidMount() {
    this.getChartData();
    axios
      .get(`${API}/api/kindergartens/admission/status`)
      .then((res) => {
        this.setState({
          registrationsInFirstAgeGroup: res.data.registrationsInFirstAgeGroup,
          registrationsInSecondAgeGroup: res.data.registrationsInSecondAgeGroup,
          spotsInFirstAgeGroups: res.data.spotsInFirstAgeGroups,
          spotsInSecondAgeGroups: res.data.spotsInSecondAgeGroups,
          active: res.data.active,
          locked: res.data.locked,
          waitingInFirstAgeGroup:
            res.data.registrationsInFirstAgeGroup -
            res.data.spotsInFirstAgeGroups,
          waitingInSecondAgeGroup:
            res.data.registrationsInSecondAgeGroup -
            res.data.spotsInSecondAgeGroups,
        });
      })
      .catch((err) => console.log(err));
  }
  getChartData() {
    axios.get(`${API}/api/users/statistics`).then((res) => {
      const kindergarten = res.data;
      //   console.log("res data"+res.data.kindergartenName)

      // let labels = [];
      // let data = [];
      // // const arrayOfKindergarten =
      // kindergarten
      //   .map(({ kindergartenName, firstPriorityRegistrations }) => {
      //     labels.push(kindergartenName);
      //     data.push(firstPriorityRegistrations);
      //   })

      let sortedKindergarten = [...kindergarten];
      let sortedLabels = [];
      let sortedData = [];

      const sorted = sortedKindergarten.sort((a, b) => {
        if (a.firstPriorityRegistrations > b.firstPriorityRegistrations) {
          return -1;
        }
        if (a.firstPriorityRegistrations < b.firstPriorityRegistrations) {
          return 1;
        }
        return 0;
      });
      sorted.map(({ kindergartenName, firstPriorityRegistrations }) => {
        sortedLabels.push(kindergartenName);
        sortedData.push(firstPriorityRegistrations);
      });

      console.log(kindergarten);
      this.setState({
        chartData: {
          labels: sortedLabels,

          datasets: [
            {
              label: 'Darželių populiarumas pirmu prioritetu',
              data: sortedData,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(15,15,15)',
              hoverBorderColor: true,
              hoverBackgroundColor: true,
            },
          ],
        },
      });
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="card col">
            <div className="card-body">
              {this.state.registrationsInFirstAgeGroup > 0 ? (
                <h5 className="card-title pb-3">
                  {this.state.registrationsInFirstAgeGroup}
                </h5>
              ) : (
                <p className="card-text">Duomenys atnaujinami </p>
              )}
              <h6 className="card-subtitle mb-2 text-muted">
                2-3m. amžiaus vaikų grupėse
              </h6>
              <p>Viso registracijų į darželius</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              {this.state.registrationsInSecondAgeGroup > 0 ? (
                <h5 className="card-title pb-3">
                  {this.state.registrationsInSecondAgeGroup}
                </h5>
              ) : (
                <p className="card-text">Duomenys atnaujinami </p>
              )}
              <h6 className="card-subtitle mb-2 text-muted">
                3-6m. amžiaus vaikų grupėse
              </h6>
              <p>Viso registracijų į darželius</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              {this.state.spotsInFirstAgeGroups > 0 ? (
                <h5 className="card-title pb-3">
                  {this.state.spotsInFirstAgeGroups}
                </h5>
              ) : (
                <p className="card-text">Duomenys atnaujinami </p>
              )}
              <h6 className="card-subtitle mb-2 text-muted">
                2-3m. amžiaus vaikų grupėse
              </h6>
              <p>Viso vietų darželiuose</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              {this.state.spotsInSecondAgeGroups > 0 ? (
                <h5 className="card-title pb-3">
                  {this.state.spotsInSecondAgeGroups}
                </h5>
              ) : (
                <p className="card-text">Duomenys atnaujinami </p>
              )}
              <h6 className="card-subtitle mb-2 text-muted">
                3-6m. amžiaus vaikų grupėse
              </h6>
              <p>Viso vietų darželiuose</p>
            </div>
          </div>
          {/* {this.state.locked ? ( */}
            <div className="card col">
              <div className="card-body">
                {this.state.waitingInFirstAgeGroup > 0 ? (
                  <h5 className="card-title pb-3">
                    {this.state.waitingInFirstAgeGroup}
                  </h5>
                ) : (
                  <p className="card-text">Nėra vaikų laukiančiųjų eilėje </p>
                )}
                <h6 className="card-subtitle mb-2 text-muted">
                  Laukiantieji vaikai eilėje į darželį 2-3m. amžiaus vaikų
                  grupėse
                </h6>
                <br />
              </div>
            </div>
          {/* ) : (
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title pb-3">
                  {this.state.registrationsInFirstAgeGroup}
                </h5>

                <h6 className="card-subtitle mb-2 text-muted">
                  Laukiantieji vaikai eilėje į darželį 2-3m. amžiaus vaikų
                  grupėse
                </h6>
                <p className="card-text">
                  Eilė nepatvirtinta, visi vaikai laukia{' '}
                </p>
                <br />
              </div>
            </div>
          )} */}
          {/* {this.state.locked ? ( */}
            <div className="card col">
              <div className="card-body">
                {this.state.waitingInSecondAgeGroup > 0 ? (
                  <h5 className="card-title pb-3">
                    {this.state.waitingInSecondAgeGroup}
                  </h5>
                ) : (
                  <p className="card-text">Nėra vaikų laukiančiųjų eilėje </p>
                )}
                <h6 className="card-subtitle mb-2 text-muted">
                  Laukiantieji vaikai eilėje į darželį 3-6m. amžiaus vaikų
                  grupėse
                </h6>

                <br />
              </div>
            </div>
          {/* ) : (
            <div className="card col">
              <div className="card-body">
                <h5 className="card-title pb-3">
                  {this.state.registrationsInSecondAgeGroup}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Laukiantieji vaikai eilėje į darželį 3-6m. amžiaus vaikų
                  grupėse
                </h6>
                <p className="card-text">
                  Eilė nepatvirtinta, visi vaikai laukia{' '}
                </p>
                <br />
              </div>
            </div>
          )} */}
        </div>
        <div>
          {Object.keys(this.state.chartData).length ? (
            <HorizontalBar data={this.state.chartData} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
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
