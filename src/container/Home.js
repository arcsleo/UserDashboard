// import { useState } from 'react';
import SideNav from '../components/sideNav';
import MainContentArea from '../components/MainContentArea';
import styles from './styles.module.scss';

const Home = () => {

    return(
        <div className={styles.homeMainWrapper}>
            <SideNav />
            <MainContentArea />
        </div>
    );

};

export default Home;