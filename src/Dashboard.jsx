import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export function Dashboard(){
  const todos = useSelector((state) => {
    // debugger;
    return state.todo.todos;
  })

  return (
    <div className="App">
      <header className="App-header">
          <Child />
          <NonFamily />
        </header>
     </div>
);
}

function deleteTodoActionCreator(todoname){
  return {
    type: 'DELETE_TODO',
    todoname,
  };
}

function Child() {
  const [todoname, setTodoname] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    //debugger;
    return state.todo.todos;
  })

  function deleteTodo(todoname){
    dispatch(deleteTodoActionCreator(todoname))
  }

  return(
    <>
    <h1>ToDo List:</h1>
    <ol>
      {todos.map((u, indx) => {
        return <li key={u.todoname}><p><span>{u.todoname}   <button onClick={() => deleteTodo(u.todoname)}>  X  </button></span></p></li>
      })
      }
    </ol>
    </>
  );
  
}

function NonFamily(){
  const [todoname, setTodoname] = useState('');
  const dispatch = useDispatch();
  const todoData = useSelector((state) => {
    // debugger;
    return state.todo;
  })


  function addTodo(){
    
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
        type: 'ADD_TODO',
        todo:{
              todoname,
            }
      })
    }, 3000)

  }

  return(
    <>
      {todoData.showLoader && <span><i>Adding...</i></span>}
      <input value = {todoname} onChange = {(e) => setTodoname(e.currentTarget.value)}/>
      <p>
        <button type="button" onClick = {addTodo} >Add Todo</button>
      </p>
    </>
  )
}