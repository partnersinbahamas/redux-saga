import { Card } from "../Card/Card";
import { Divider } from "@mui/material";
import styles from './News.module.scss';

type Props = {
  news: any[],
};

export const News: React.FC<Props> = ({ news }) => {
  return (
    <ul className={styles.news}>
      {news.map((n) => (
        <Card card={n} />
      ))}
    </ul>
  );
};
