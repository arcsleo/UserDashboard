import styles from './styles.module.scss';

const StatusBarPage = () => {
    
    return(
        <div className={styles.statuschartcover}>
            <div className={styles.statuschartcoverHead}>
              <div className={styles.statuschartcoverHeadText}>
                Monthly stats
              </div>
              <div className={styles.statuschartcoverHeadRight}>
                Jun 2021
              </div>
            </div>
            <div className={styles.statuswrapper}>
              <div className={styles.statuschartcoverHeadWrap}>
                <div className={styles.statuschartcoverHeadLeft}>
                  Unpaid Users
                </div>
                <div className={styles.statuschartcoverHeadRight1}>
                  75
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressCompleteGreen} style={{width: "70%"}}></div>
              </div>
              <div className={styles.statuschartcoverHeadWrap}>
                <div className={styles.statuschartcoverHeadLeft}>
                  Paid Users
                </div>
                <div className={styles.statuschartcoverHeadRight1}>
                  40
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressCompleteOrange} style={{width: "40%"}}></div>
              </div>
              <div className={styles.statuschartcoverHeadWrap}>
                <div className={styles.statuschartcoverHeadLeft}>
                Deleted Users
                </div>
                <div className={styles.statuschartcoverHeadRight1}>
                  3
                </div>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressCompleteGreen} style={{width: "95%"}}></div>
              </div>
            </div>
        </div>
    );

};

export default StatusBarPage;