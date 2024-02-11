import { Box } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <Box display="flex" justifyContent="center">
        <Navigation />
      </Box>
    </section>
  );
};