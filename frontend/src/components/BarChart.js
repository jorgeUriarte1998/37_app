import {Bar} from "react-chartjs-2";
import { useState, useEffect } from "react";
import {backEndUris} from './utils/utils.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChart () {
    const [bargraph, setBargraph] = useState(
        {
            options : {
            },
            data : {
                labels: [],
                datasets: [
                    {
                        label: "Expenses",
                        data:[],
                        backgroundColor:["#3D6FA6"],
                        borderColor: ["#264556"],
                        borderWidth: 1
                    }
                ]
            }
        }
    )
    const loadBardata = async () => {
        const response = await fetch(backEndUris.barchartData);
        const data = await response.json()
        setBargraph({
            options : {
                scales: {
                    y: {
                        ticks: {
                            stepSize:1
                        }
                    }
                  }
            },
            data:{
                labels: data.map(a => a.random_number),
                datasets:[
                    {
                        label: "Ocurrencias",
                        data:data.map(a => a.count),
                        backgroundColor:["#3D6FA6"],
                        borderColor: ["#A4C9C9"],
                        borderWidth: 1
                    } 
                ]
            }
        })
    }
    useEffect(() => {loadBardata()},[])
    return (  
        <>
            <Bar options={bargraph.options} data={bargraph.data}/>
        </>
    )   
}