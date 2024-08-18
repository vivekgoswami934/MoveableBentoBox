import {  Chart as ChartJS,ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

function Guagechart({filledPercentage}){

    const data={
        label:['yes','No'],
        datasets:[{
         label:'POLL',
         data: [filledPercentage, 100 - filledPercentage],
         backgroundColor: ["#FF0087", "rgb(205, 205, 205"],
         circumference:180,
         rotation:270,
         cutout:"80%",
        }]
    }
    const option={
        


    }
    return(
        <div style={{width:"50px"}}>
        <Doughnut data={data} options={option}/></div>
    )
}

export default Guagechart;