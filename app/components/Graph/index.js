import React from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from "react-chartjs-2";
import Card from 'components/Card';


import Paper from '@material-ui/core/Paper';

import { GraphContainer, Image, Title, Subtitle } from './styles';

class Graph extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { datagraph } = this.props;
    console.log("RRRRRRRRRRRRRRRRRRRRR")
    console.log(datagraph[0])
    var max_temp = 0;
    var max_ph = 0;
    var max_oxigeno_dis = 0;
    var min_temp = 50;
    var min_ph = 50;
    var min_oxigeno_dis = 50;

    var temp_data=[];
    var ph_data=[];
    var oxigeno_dis_data=[];
    var fecha_data=[];

    for (var i = 0; i < 12; i++) {
      temp_data[i]=datagraph[i].temperatura;
      //ph_data[i]=datagraph[i].ph;
      //oxigeno_dis_data[i]=datagraph[i].oxigeno_dis;
      //fecha_data[i]=datagraph[i].fecha;

      if (temp_data[i] > max_temp) {max_temp = temp_data[i]; }
      if (temp_data[i] < min_temp) {min_temp = temp_data[i]; }

      if (ph_data[i] > max_ph) {max_ph = ph_data[i]; }
      if (ph_data[i] < min_ph) {min_ph = ph_data[i]; }

      if (oxigeno_dis_data[i] > max_oxigeno_dis) {max_oxigeno_dis = oxigeno_dis_data[i]; }
      if (oxigeno_dis_data[i] < min_oxigeno_dis) {min_oxigeno_dis = oxigeno_dis_data[i]; }
    } 
    temp_data.reverse();
      console.log(temp_data)



    let chart_temp_options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: min_temp,
              suggestedMax: max_temp,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };

    let chartTemp = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          11,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
          0
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            //data: temps2,
            data: temp_data,
          }
        ]
      };
    }
  };

    let chart_ph_options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: min_ph,
              suggestedMax: max_ph,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };

    let chartPh = {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: [
          11,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
          0
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            //data: temps2,
            data: ph_data,
          }
        ]
      };
    }
  };

  let chart_oxigeno_dis_options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: min_oxigeno_dis,
            suggestedMax: max_oxigeno_dis,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  let chartOxigenoDis = {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: [
          11,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
          0
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            //data: temps2,
            data: oxigeno_dis_data,
          }
        ]
      };
    }
  };


console.log(chartTemp.data);
    return (
      <div>
        <div>
          <Card title="Temperatura"></Card>
          <GraphContainer>
            <div><Line
            data={chartTemp.data}
            options={chart_temp_options}
            /></div>
          </GraphContainer>
        </div>
        <div>
          <Card title="Ph"></Card>
          <GraphContainer>
            <div><Line
            data={chartPh.data}
            options={chart_ph_options}
            /></div>
          </GraphContainer>
        </div>
        <div>
          <Card title="Oxigeno Disuelto"></Card>
          <GraphContainer>
            <div><Line
            data={chartOxigenoDis.data}
            options={chart_oxigeno_dis_options}
            /></div>
          </GraphContainer>
        </div>
        
      </div>
      
        
    );
  }
}

Graph.propTypes = {
  datagraph: PropTypes.array
};

export default Graph;
