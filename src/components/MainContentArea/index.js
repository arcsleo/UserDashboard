// import { useState } from 'react';
import styles from './styles.module.scss';
import {ReactComponent as  Leftarrow} from '../../assets/svg/leftarrow.svg';
import {ReactComponent as  Downarrow} from '../../assets/svg/downarrow.svg';
import {ReactComponent as  Bell} from '../../assets/svg/bell.svg';
import {ReactComponent as  Search} from '../../assets/svg/search.svg';

const MainContentArea = () => {
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
                </div>
            </div>
        </div>
    );
};

export default MainContentArea