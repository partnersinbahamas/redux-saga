import styles from './Card.module.scss';

type Props = {
  card: any
}

export const Card: React.FC<Props> = ({card}) => {
  return (
    <div key={card.author} className={styles.card}>
      {card.title}
    </div>
  )
}