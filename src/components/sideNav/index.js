// import { useState } from 'react';
import styles from './styles.module.scss';
import {ReactComponent as  Pvdata} from '../../assets/svg/pvdata.svg';
import {ReactComponent as  Home} from '../../assets/svg/home.svg';
import {ReactComponent as  Personal} from '../../assets/svg/personal.svg';
import {ReactComponent as  Gallery} from '../../assets/svg/gallery.svg';
import {ReactComponent as  Settings} from '../../assets/svg/settings.svg';
import {ReactComponent as  Stripe} from '../../assets/svg/stripe.svg';
import CloseIcon from '@material-ui/icons/Close';

const SideNav = (props) => {
    return(
        <div className={ props.isMobile ? props.itemShow ? `${styles.sidenavmain} ${styles.sideScroll}` : `${styles.sidenavmain}` : styles.sidenavmain }>
            <div className={styles.sidenavlogo}>
                <Pvdata />
            </div>
            <div className={styles.closeButton}  onClick={()=>props.callBack()}>
                <CloseIcon />
            </div>
            <div className={styles.sideicon}>
                <Home />
            </div>
            <div className={styles.sideicon}>
                <Personal />
            </div>
            <div className={styles.sideicon}>
                <Stripe />
            </div>
            <div className={styles.sideicon}>
                <Gallery />
            </div>
            <div className={styles.sideicon}>
                <Settings />
            </div>
        </div>
    );
};

export default SideNav;