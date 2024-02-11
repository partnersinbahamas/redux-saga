import { PageNavLink } from '../PageNavLink/PageNavLink';
import { routes } from '../../helpers/variables';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Newsnav } from './Newsnav/Newsnav';
import { Grid } from '@mui/material';
import classNames from 'classnames';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();
  const [isNews, setIsNews] = useState<boolean>(false);

  useEffect(() => {
    setIsNews(false);
    if (location.pathname.includes('news')) {
      setIsNews(true);
    };
  }, [location])

  return (
    <nav className={styles.navigation}>
      <Grid
        container
        className={classNames(styles.container, {[styles.container_move]: !isNews})}>
        <Newsnav />
      </Grid>

      <ul className={styles.list}>
        {routes.map((route) => {
          const { id, text, to, icon } = route;
          return (
            <PageNavLink
              key={id}
              text={text}
              to={to}
              icon={icon}
            />
          )
        })}
      </ul>
    </nav>
  )
}