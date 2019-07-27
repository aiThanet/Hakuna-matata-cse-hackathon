import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts';

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

function RenderBarChart(props) {
  console.log(props.data)
  return <BarChart width={600} height={300} data={props.data}
  margin={{
    top: 5, right: 30, left: 20, bottom: 5,
  }}
  >
    <XAxis 
    dataKey="date"
    dy='25'
    />
    <YAxis type="number" domain={[0, 'dataMax + 1']}/>
    <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
      label={renderCustomBarLabel}/>
  </BarChart>
};

class TheBarChart extends React.Component {

  render() {
    return <div>
    <RenderBarChart data = {this.props.data}/>
    </div>
  }
}

export default TheBarChart;
