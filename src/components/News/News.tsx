import { Card } from "../Card/Card";
import { Divider } from "@mui/material";
import styles from './News.module.scss';

type Props = {
  news: any[],
  title: string,
};

export const News: React.FC<Props> = ({ news, title }) => {
  return (
    <ul className={styles.news}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>
        <div className={styles.divider}/>
      </div>
      {news.map((n) => (
        <Card card={n} />
      ))}
    </ul>
  );
};
