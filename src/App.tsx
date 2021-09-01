import React from 'react';
import styles from './App.module.css';
import {GitHub} from "./components/GitHub";
import {DetailsRepository} from "./components/details-repository/DetailsRepository";

function App() {
  return (
    <div className={styles.appContainer}>
      <GitHub/>
      <DetailsRepository/>
    </div>
  );
}

export default App;
