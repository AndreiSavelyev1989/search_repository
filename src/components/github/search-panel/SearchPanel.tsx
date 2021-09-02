import React, {useEffect, useState} from "react";
import styles from "./SearchPanel.module.css";

type PropsType = {
    value: string
    setFinalSearch: (term: string) => void
    initialTerm: string
}

export const SearchPanel: React.FC<PropsType>  = ({setFinalSearch, value, initialTerm}) => {

    const [tempSearch, setTempSearch] = useState<string>(value)

    useEffect(() => {
        setTempSearch(value)
    }, [value])

    return (
        <div className={styles.searchBlock}>
            <h2>Search panel</h2>
            <div className={styles.searchTools}>
                <input
                    onChange={(e) => setTempSearch(e.currentTarget.value)}
                    value={tempSearch}
                    type="text"/>
                <button onClick={() => setFinalSearch(tempSearch)}>find</button>
                <button onClick={() => setFinalSearch(initialTerm)}>reset</button>
            </div>
        </div>
    )
}