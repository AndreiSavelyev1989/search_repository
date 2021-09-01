import styles from "../GitHub.module.css";
import React, {useEffect, useState} from "react";
import {SearchResult, SearchUserType} from "../GitHub";
import axios from "axios";

type PropsType = {
    finalSearch: string
    selectedUser: SearchUserType | null
    setSelectedUser: (user: SearchUserType) => void
}
export const RepositoriesList: React.FC<PropsType> = ({selectedUser, setSelectedUser, finalSearch}) => {

    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        console.log('sync search')
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${finalSearch}`)
            .then(res => setUsers(res.data.items))
    }, [finalSearch])

    return (
        <ul>
            {users
                .map(el => <li
                    key={el.id}
                    className={selectedUser === el ? styles.selected : ''}
                    onClick={() => setSelectedUser(el)}>{el.login}</li>)}
        </ul>
    )
}