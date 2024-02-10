import dblogo from '../../../images/DB.png';
import styles from './DBLogo.module.scss';

export const DBLogo = () => {
  return (
    <img
      src={dblogo}
      alt="Redux-saga logo"
      title="Saga-logo"
      className={styles.logo}
    />
  )
}