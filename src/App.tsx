
import { Logo } from "./components/Logo/Logo";
import { Routes, Route } from "react-router";
import { Footer } from "./components/Footer/Footer";
import { Latest } from "./pages/News/Latest/Latest";
import { Popular } from "./pages/News/Popular/Popular";
import { Home } from './pages/Home/Home';
import styles from './App.module.scss';

const App = () => {
  return (
    <section className={styles.app}>
      <div className={styles.appLogo}>
        <Logo/>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news">
          <Route path="/news/latest" element={<Latest />}/>
          <Route path="/news/popular" element={<Popular />}/>
        </Route>
      </Routes>
      <Footer />
    </section>
  );
};

export default App;