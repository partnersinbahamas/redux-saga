import { ErrorOutline } from '@mui/icons-material';
import styles from './Error.module.scss';

type Props = {
  error: string,
};;

export const Error: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles.wrapper}>
      <ErrorOutline fontSize="large" sx={{color: 'red'}}/>
      <h1 className={styles.error}>{error}</h1>
    </div>
  );
};