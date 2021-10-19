import NavBar from './components/NavBar'
import AddUsers from './components/AddUsers'
import AllUsers from './components/AllUsers'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
// import { Switch } from '@mui/material'

export function Dashboard2(){
    return(
        <>
        <BrowserRouter>
        {/* <Switch> */}
            <NavBar />
            <h2>In new Dashboard</h2>
            <Route exact path = "/dashboard/allUser" component = {AllUsers} />
            <Route exact path = "/dashboard/addUser" component = {AddUsers} />
        {/* </Switch> */}
        </BrowserRouter>
        </>
    )
}