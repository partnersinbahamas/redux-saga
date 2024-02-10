import { newsRoutes } from "../../../helpers/variables";
import { PageNavLink } from "../../PageNavLink/PageNavLink";
import styles from './Newsnav.module.scss';

export const Newsnav = () => {
  return (
    <ul className={styles.newnav}>
      {newsRoutes.map((route) => {
        const { id, text, to } = route;
        return (
          <PageNavLink
            key={id}
            text={text}
            to={to}
          />
        )
      })}
    </ul>
  );
};