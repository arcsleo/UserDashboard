import { useState } from 'react';
import SideNav from '../components/sideNav';
import MainContentArea from '../components/MainContentArea';
import styles from './styles.module.scss';

const Home = () => {

    const [showBox, setshowBox] = useState(false);
    
    const callBack = function(){
        setshowBox(!showBox);
    }

    return(
        <div className={styles.homeMainWrapper}>
            <SideNav callBack={callBack} isMobile={false} itemShow={false} />
            <SideNav callBack={callBack} isMobile={true} itemShow={showBox} />
            <MainContentArea callBack={callBack} />
        </div>
    );

};

export default Home;