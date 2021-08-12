// import { useState } from 'react';
import styles from './styles.module.scss';
import {ReactComponent as  Leftarrow} from '../../assets/svg/leftarrow.svg';
import {ReactComponent as  Downarrow} from '../../assets/svg/downarrow.svg';
import {ReactComponent as  Bell} from '../../assets/svg/bell.svg';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import LineChartPage from '../LineChart';
import PieChartPage from '../PieChart';
import BarChartPage from '../BarChart';
import StatusBarPage from '../StatusBar';
import {ReactComponent as  Search} from '../../assets/svg/search.svg';
import StatusCard from '../StatusCard';

const MainContentArea = (props) => {
    return(
        <div className={styles.mainContentWrapper}>
            <div className={styles.container}>
                <div className={styles.mainContentHead}>
                    <div className={styles.mainContentHeadText}>
                        PVDATA
                    </div>
                    <div className={styles.mainContentHeadArrow}>
                        <Leftarrow />
                    </div>
                    <div className={styles.mainContentHeadSearchmain}>
                        <Search />
                        <input type="text" placeholder="Search" className={styles.mainContentHeadSearchinput}></input>
                    </div>
                    <div className={styles.mainContentHeadBell}>
                        <Bell />
                        <div className={styles.mainContentHeadNotification}></div>
                    </div>
                    <div className={styles.mainContentHeadAdmin}>
                        <div className={styles.mainContentHeadAdmin}>
                            Admin
                        </div>
                        <Downarrow />
                    </div>
                    <div className={styles.hamBurger} onClick={()=>props.callBack()}>
                        <ViewHeadlineIcon />
                    </div>
                </div>
                <div className={styles.StatusCardWrapper}>
                    <StatusCard Title="Registered Users" PL="Profit" Percent="0.7" Amount="7,320" IsmainCard={false} />
                    <StatusCard Title="Paid Users" PL="Loss" Percent="1.7" Amount="5,180" IsmainCard={false} />
                    <StatusCard Title="Monthly recurring rev." PL="Profit" Percent="1" Amount="$25,928" IsmainCard={true} />
                </div>
                <div className={styles.chartsFirstcover}>
                    <LineChartPage />
                    <PieChartPage />
                    <BarChartPage />
                    <StatusBarPage />
                </div>
            </div>
        </div>
    );
};

export default MainContentArea;