import { Table, TableCell, TableBody, TableHead, TableRow } from "@mui/material";
import { useEffect, useState} from "react";
import { getUsers } from "../api/users";

const AllUsers = () => {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();

    }, [])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }


    return(
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Todo</TableCell>
                        
                    </TableRow>
                    {/* <TableRow>TODO</TableRow> */}
                </TableHead>
                <TableBody>
                {users.map((user) => (
                    <TableRow >
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </>
    );
}

export default AllUsers;