import {Bar} from "react-chartjs-2";
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

export const BarChart = () => {
    const options = {};
    const data = {
        labels: ["Rent", "Grocery"],
        datasets: [
            {
                label: "Expenses",
                data:[1200,500]
                
            }
        ]
    };
    return <Bar options={options} data={data}/>   
}