import React, {useEffect, useState} from "react";
import {SearchUserType, UserType} from "../GitHub";

type PropsType = {
    setUserDetails: (details: null | UserType) => void
    selectedUser: null | SearchUserType
}
export const Timer: React.FC<PropsType> = ({setUserDetails, selectedUser}) => {
    const initialTimer = 10
    const [count, setCount] = useState<number>(initialTimer)

    useEffect(() => {
        const intId = setInterval(() => {
            setCount((prev: number) => prev - 1)
            console.log(count)
        }, 1000)
        return () => {
            clearInterval(intId)
        }
    }, [selectedUser])

    useEffect(() => {
        if (count < 1) {
            setUserDetails(null)
        }
    }, [count])

    useEffect(() => {
        setCount(initialTimer)
    }, [selectedUser])

    return (
        <div>
            {count}
        </div>
    )
}