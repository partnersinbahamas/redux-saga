import { yellow } from '@mui/material/colors';
import styles from './Error.module.scss';
import { ErrorOutline } from '@mui/icons-material';

type Props = {
  error: string,
};

export const Error: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles.wrapper}>
      <ErrorOutline fontSize="large" sx={{color: yellow[400]}}/>
      <h1 className={styles.error} style={{color: yellow[400]}}>{error}</h1>
    </div>
  )
}