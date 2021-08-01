import { Pie } from "react-chartjs-2";
import styles from './styles.module.scss';
import { chartColors } from "./colors";
  
  const pieOptions = {
    legend: {
      display: false,
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    // labels: ["Paid", "Unpaid"],
    datasets: [
      {
        data: [140, 860],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

const PieChartPage = () => {
    
    return(
        <div className={styles.piechartcover}>
            <div className={styles.piechartcoverHead}>
                Conversion
            </div>
            <div className={styles.piewrapper}>
                <Pie
                    data={data}
                    options={pieOptions}
                />
            </div>
        </div>
    );

};

export default PieChartPage;