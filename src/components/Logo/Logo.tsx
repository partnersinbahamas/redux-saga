import sagaLogo from '../../images/Redux-Saga-logo.png';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <img src={sagaLogo} alt="Redux-saga logo" title="Saga-logo" className={styles.logo}/>
  );
};