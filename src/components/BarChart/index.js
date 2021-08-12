import Chart from "react-google-charts";
import styles from './styles.module.scss';

const data = [
  ["Year", "Unpaid", "Paid"],
  ["Jan", 500, 400],
  ["Feb", 600, 460],
  ["Mar", 860, 720],
  ["Apr", 1030, 540],
  ["May", 800, 10],
  ["Jun", 80, 70],
  ["Jul", 150, 60],
  ["Aug", 50, 200],
];

const options = {
  colors: ["#c6752b", "#008753"],
  legend: {position:'none'},
};

const BarChartPage = () => {
    
    return(
        <div className={styles.barchartcover}>
            <div className={styles.barchartcoverHead}>
              <div className={styles.barchartcoverHeadText}>
                Month by Month Stats
              </div>
              <div className={styles.pointers}>
                <div className={styles.pointersorange}></div>
                <div className={styles.pointersText}>Unpaid</div>
                <div className={styles.pointersgreen}></div>
                <div className={styles.pointersText}>Paid</div>
              </div>
            </div>
            <div className={styles.piewrapper}>
              <Chart chartType="Bar" options={options} data={data} />
            </div>
        </div>
    );

};

export default BarChartPage;