import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Parent() {
  const users = useSelector((state) => {
    //debugger;
    return state.user.users;
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent: i am recieving users: {users.length}</h1>
        <Child data = "I am child"/>
        <NonFamily />
      </header>
    </div>
  );
}

export default Parent;

function Child(props) {
  return (
  <>
    <h1>Child : {props.data}</h1>
    <GrandChild data = {props.data} />
  </>
  )
}

function deleteUserActionCreator(username){
  return {
    type: 'DELETE_USER',
    username,
  };
}

function GrandChild({data}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    //debugger;
    return state.user.users;
  })

  function deleteUser(username){
    dispatch(deleteUserActionCreator(username))
  }

  return(
    <>
    <h3>User List:</h3>
    <ul>
      {
      users.map((u, indx) => {
        return <li key={u.username}><span>{u.username}<button onClick={() => deleteUser(u.username)}>X</button></span></li>
      })
      }
    </ul>
    </>
  )
  
}

function NonFamily(){
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    //
    return state.user;
  })

  function addUser(){
    // dispatch({
    //   type: "ADD_USER",
    //   user:{
    //     username,
    //   }
    // })


    //api call to add reducer
    dispatch({
      type: 'SHOW_LOADER'
    })
    //api response
    setTimeout(() => {
      dispatch({
        type: 'HIDE_LOADER'
      })
      dispatch({
        type: 'ADD_USER',
        user:{
              username,
            }
      })
    }, 5000)
    
    

  }
  return(
    <>
      <h1>NonFamily: i am recieving users: {userData.length}</h1>
      <h1>Loading: {`${userData.showLoader}`}</h1>

      <input value = {username} onChange = {(e) => setUsername(e.currentTarget.value)}/>
      <button type="button" onClick = {addUser} >Add User</button>
    </>
  )
}

