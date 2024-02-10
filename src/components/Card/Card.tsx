import styles from './Card.module.scss';
import { convertIsoToFormattedDate } from '../../helpers/functions';

type Props = {
  card: any
}

export const Card: React.FC<Props> = ({card}) => {
  const { author, title, created_at, url} = card;
  console.log(card);
  return (
    <div key={card.author} className={styles.card}>
      <div className={styles.container}>
        <div>
          <span>Author: </span>
          <span>
            {author}
          </span>
        </div>

        <div>
          <span></span>
          <span></span>
        </div>

        <div>
          <span>{title}</span>
        </div>

        <div>
          <span>Created at: </span>
          <span>
            {convertIsoToFormattedDate(created_at)}
          </span>
        </div>
      </div>
      <a href={url} target="_blank">Follow</a>
    </div>
  )
}