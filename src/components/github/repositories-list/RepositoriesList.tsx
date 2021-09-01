import styles from "../GitHub.module.css";
import React, {useEffect, useState} from "react";
import {SearchResult, SearchUserType} from "../GitHub";
import axios from "axios";
import {Preloader} from "../../preloader/Preloader";

type PropsType = {
    finalSearch: string
    selectedUser: SearchUserType | null
    setSelectedUser: (user: SearchUserType) => void
    isFetching: boolean
    setIsFetching: (value: boolean) => void
}
export const RepositoriesList: React.FC<PropsType> = ({
                                                          selectedUser,
                                                          setSelectedUser, finalSearch,
                                                          isFetching, setIsFetching
                                                      }) => {

    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        console.log('sync search')
        setIsFetching(true)
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${finalSearch}`)
            .then(res => {
                setUsers(res.data.items)
                setIsFetching(false)
            })
    }, [finalSearch])

    if(isFetching){
        return <Preloader/>
    }

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