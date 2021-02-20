import logo from './logo.svg';
import styles from './App.module.css';
import PageContainer from './PageContainer/PageContainer.js';
// import MenuHeader from './PageContainer/MenuHeader/MenuHeader';

function App() {
  return (
    <div className={styles.App}>
      {/* <header className={styles.App_header}></header> */}
      {/* <MenuHeader /> */}
      <PageContainer />
    </div>
  );
}

export default App;
