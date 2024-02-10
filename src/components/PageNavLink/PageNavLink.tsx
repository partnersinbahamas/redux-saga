import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from './PageNavLink.module.scss';
import classNames from "classnames";

type Props = {
  to: string,
  text: string,
  icon?: ReactNode,
};

export const PageNavLink: React.FC<Props> = ({ to, text, icon }) => {
  return (
    <NavLink to={to} className={styles.pageNavLink}>
      {icon && icon}

      <p className={classNames(
        styles.title,
        {[styles.title_news]: !icon}
      )}>{text}</p>
    </NavLink>
  )
}