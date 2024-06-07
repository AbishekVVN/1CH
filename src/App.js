import React, { useState } from "react";
import "./App.css";
import ReactApexChart from "react-apexcharts";
import { Col, Row ,Card} from 'antd';
function App() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        title:{
            text:"Years"
        }
      },
      yaxis:{
        title:{
          text:"Counts"
        }
      },
    },
      
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [32, 45, 70, 90, 59, 60, 80, 91],
      },
    ],
  });
  
  return (
    <div className="App">
      <h1>React Chart</h1>
      <Row span={24}>
      <Col span={8}>
      <Card>
      <div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
        </Card>
        </Col>
      <Col span={8}>
      <Card>
        <div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            width="450"
          />
        </div>
        </Card>
        </Col>
      <Col span={8}>
      <Card>
      <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
        </Card>
      </Col>
      <Col span={6}>
      <Card>
      <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="radar"
            width="500"
          />
        </div>
        </Card>
      </Col>
      
    </Row>


      {/* <div className="row">
        <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
        <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            width="500"
          />
        </div>
        <div className="col-4">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="radar"
            width="500"
          />
        </div>
        
      </div> */}
    </div>
  );
}

export default App;
