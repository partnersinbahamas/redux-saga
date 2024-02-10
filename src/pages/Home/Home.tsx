import { Logo } from "../../components/Logo/Logo";
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <section className={styles.home}>
      <Logo />
    </section>
  )
}