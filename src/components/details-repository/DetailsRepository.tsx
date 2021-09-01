import React, {useEffect, useState} from "react";
import {SearchUserType, UserType} from "../GitHub";
import axios from "axios";

type PropsType = {
    selectedUser: SearchUserType | null
}

export const DetailsRepository: React.FC<PropsType> = ({selectedUser}) => {

    const [userDetails, setUserDetails] = useState<null | UserType>(null)

    useEffect(() => {
        console.log('sync details')
        if (selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => setUserDetails(res.data))
        }
    }, [selectedUser])

    return (
        <div>
            <div>Details</div>
            {
                userDetails && <div>
                    <div>{userDetails.login}</div>
                    <img src={userDetails.avatar_url} alt="avatar"/>
                    <div>Followers: {userDetails.followers}</div>
                </div>
            }
        </div>
    )
}