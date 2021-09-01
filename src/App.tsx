import React, {useState} from 'react';
import styles from './App.module.css';
import {GitHub} from "./components/github/GitHub";

function App() {
    const [isFetching, setIsFetching] = useState<boolean>(false)

    return (
    <div className={styles.appContainer}>
      <GitHub isFetching={isFetching} setIsFetching={setIsFetching}/>
    </div>
  );
}

export default App;
