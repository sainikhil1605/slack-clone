import SideBar from "../../components/SideBar";
import { homeStyles } from "./Home.styles";

const Home = () => {
  const styles = homeStyles();
  return (
    <div className={styles.homeContainer}>
      <SideBar />
    </div>
  );
};
export default Home;
