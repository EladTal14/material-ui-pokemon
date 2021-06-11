import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import {IUser} from "../../interfaces/user";
import {CollapsibleTable} from "../../components/Table";

export const MaterialShit = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        (async function () {
            const usersData = await getUsers('')
            setUsers(usersData)
        })()
    }, [])
    return (
        <div>
            {!users || !users.length ? <div>wait....</div> :
                <div>
                    <h1>users</h1>
                    <CollapsibleTable users={users}/>
                </div>
            }
        </div>);
};

