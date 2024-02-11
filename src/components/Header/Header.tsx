import { DBLogo } from '../Logo/DBLogo/DBLogo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.subtitle}>Powered by</span>
      <DBLogo />
    </header>
  );
};