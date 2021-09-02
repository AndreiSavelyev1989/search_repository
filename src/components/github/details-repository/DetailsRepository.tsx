import React, {useEffect, useState} from "react";
import {SearchUserType, UserType} from "../GitHub";
import axios from "axios";
import {Timer} from "../timer/Timer";
import {Preloader} from "../../preloader/Preloader";
import styles from "./DetailsRepository.module.css";

type PropsType = {
    selectedUser: SearchUserType | null
    isFetching: boolean
    setIsFetching: (value: boolean) => void

}

export const DetailsRepository: React.FC<PropsType> = ({selectedUser, setIsFetching, isFetching}) => {

    const [userDetails, setUserDetails] = useState<null | UserType>(null)

    useEffect(() => {
        console.log('sync details')
        setIsFetching(true)
        if (selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                    setIsFetching(false)
                })
        }
    }, [selectedUser])

    if(isFetching && !!userDetails){
        return <Preloader/>
    }

    return (
        <div className={styles.detailsBlock}>
            <h2>Details</h2>
            {
                userDetails && <div className={styles.details}>
                    <Timer setUserDetails={setUserDetails} selectedUser={selectedUser}/>
                    <h2>{userDetails.login}</h2>
                    <img src={userDetails.avatar_url} alt="avatar"/>
                    <div>Followers: {userDetails.followers}</div>
                </div>
            }
        </div>
    )
}