import React from 'react';
import styles from './App.module.css';
import {GitHub} from "./components/github/GitHub";

function App() {
  return (
    <div className={styles.appContainer}>
      <GitHub/>
    </div>
  );
}

export default App;
