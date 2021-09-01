import {useEffect, useState} from "react";
import {SearchPanel} from "./search-panel/SearchPanel";
import {DetailsRepository} from "./details-repository/DetailsRepository";
import {RepositoriesList} from "./repositories-list/RepositoriesList";
import styles from "./GitHub.module.css";
import {Timer} from "./timer/Timer";

export type SearchUserType = {
    login: string
    id: number
}
export type SearchResult = {
    items: SearchUserType[]
}
export type UserType = {
    id: number
    login: string
    avatar_url: string
    followers: number
}

export const GitHub = () => {
    const initialTerm = 'it-kamasutra'
    const [selectedUser, setSelectedUser] = useState<null | SearchUserType>(null)
    const [finalSearch, setFinalSearch] = useState<string>(initialTerm)

    useEffect(() => {
        console.log("sync title")
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    return (
        <div className={styles.container}>
            <div className={styles.searchBlock}>
                <SearchPanel setFinalSearch={setFinalSearch} value={finalSearch} initialTerm={initialTerm}/>
                <RepositoriesList selectedUser={selectedUser}
                                  finalSearch={finalSearch}
                                  setSelectedUser={setSelectedUser}/>
            </div>
            <div className={styles.details}>
                <DetailsRepository selectedUser={selectedUser}/>
            </div>
        </div>
    )
}