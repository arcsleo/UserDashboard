import styles from './styles.module.scss';
import { Line } from "react-chartjs-2";
import moment from "moment";
import {ReactComponent as  Downarrow} from '../../assets/svg/downarrow.svg';
import {ReactComponent as  Download} from '../../assets/svg/download.svg';

const startDate = new Date(2020, 1, 31);
const labels = [];
for (let i = 0; i < 6; i++) {
  const date = moment(startDate)
    .add(i, "days")
    .format("DD/MM");
  labels.push(date.toString());
}

const data = canvas => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  return {
    backgroundColor: gradient,
    labels,
    datasets: [
      {
        label: "Paid",
        data: [0.5, 0.9, 1, 1.5, 0.9, 0.6],
        borderWidth: 3,
        lineTension: 0.5,
        fill: false,
        borderColor: "rgba(0, 135, 83, 0.68)"
      },
      {
        label: "Unpaid", 
        data: [0.8, 0.5, 1.5, 1.2, 0.8, 0.2],
        borderWidth: 3,
        lineTension: 0.5,
        fill: false,
        borderColor: "rgba(209, 209, 209, 0.57)"
      }
    ]
  };
};

const options = {
  plugins:{   
    legend: {
      display: false
            },
         },
  tooltips: {
    enabled: false
 },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};


const LineChartPage = () => {


    return(
        <div className={styles.lineGraph}>
            <div className={styles.mainContentHeadAdmin}>
                <div className={styles.mainContentHeadAdmin}>
                    All categories
                </div>
                <Downarrow />
                <div className={styles.mainContentHeadAdmin}>
                    Past 12 months
                </div>
                <Downarrow />
            </div> 
            <div className={styles.contentDownload}>
                <Download />
                <div className={styles.contentDownloadText}>
                    Download
                </div>
            </div>
            <div className={styles.mainContentHeadAdmin}>
            </div>            
            <div className={styles.linegraphInner}>
                <Line 
                    data={data}
                    height="60px"
                    options={options}
                />
            </div>
		</div>
    );
};

export default LineChartPage;