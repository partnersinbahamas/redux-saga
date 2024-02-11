import { convertIsoToFormattedDate } from '../../helpers/functions';
import { Comment } from '@mui/icons-material';
import { Badge, Rating } from '@mui/material';
import styles from './Card.module.scss';

type Props = {
  card: any
};

export const Card: React.FC<Props> = ({ card }) => {
  console.log(card);
  const { author, title, created_at, url, points, num_comments, _tags} = card;
  return (
    <div key={card.author} className={styles.card}>
      <div>
        <div className={styles.title}>
          <h4>{title}</h4>
          <span>{author}</span>
        </div>
        <p>{convertIsoToFormattedDate(created_at)}</p>
      </div>

      <div className={styles.container}>
        <ul className={styles.tags}>
          {_tags.map((tag: any) => (
            <li>{tag}</li>
          ))}
        </ul>
        <div className={styles.status}>
          <Badge badgeContent={num_comments} color='secondary'>
            <Comment />
          </Badge>

          <Rating value={points} readOnly />
        </div>
      </div>
    </div>
  );
};
