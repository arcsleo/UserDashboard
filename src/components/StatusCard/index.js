import styles from './styles.module.scss';
import {ReactComponent as  Dots} from '../../assets/svg/dots.svg';
import {ReactComponent as  Increase} from '../../assets/svg/increase.svg';
import {ReactComponent as  Decrease} from '../../assets/svg/decrease.svg';

const StatusCard = (props) => {

    const { Title, PL, Percent, Amount, IsmainCard } = props;

    return(
        <div className={styles.statusCardMain}>
            <div className={styles.statusCardTop}>
                <div className={styles.statusCardHead}>
                    { Title }
                </div>
                <div className={styles.statusCarddotsWrapper}>
                    <Dots />
                </div>
            </div>
            <div className={styles.statusCardBottom}>
                { IsmainCard ?
                    PL === "Profit" ?
                    <div className={styles.statusCardBottomCardProfitText}>
                        { Amount }
                    </div>
                    :
                    <div className={styles.statusCardBottomCardLostText}>
                        { Amount }
                    </div>
                    :
                    <div className={styles.statusCardBottomText}>
                        { Amount }
                    </div>
                }
                <div className={styles.statusCardBottomPercent}>
                    { PL === "Profit" ? 
                        <>
                            <span className={styles.statusCardBottomhikepercenttext}>+ { Percent }%</span>
                            <Increase />
                        </>
                        :
                        <>
                            <span className={styles.statusCardBottomlosspercenttext}>- { Percent }%</span>
                            <Decrease />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default StatusCard;