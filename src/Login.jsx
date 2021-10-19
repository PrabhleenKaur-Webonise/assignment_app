import { useCallback, useEffect, useReducer, useRef} from 'react';
import { appReducer } from './App.reducer';
import { Redirect, useHistory } from 'react-router';

const initialState = {email: '', password:'', enableSubmit: false};


export const Login = () => {

    const [state, dispatch] = useReducer(appReducer, initialState)
    const emailInput = useRef(null);
    const history = useHistory();

    useEffect(() => {
    dispatch({
        type: 'enableSubmit',
        enableSubmit: !!(state.email== "abc@mail.com" && state.password == "12345")
    });
    }, [state.email, state.password])


    function loginMe(){
      console.log("state: ", state);
      if (state.email === 'abc@mail.com' && state.password == "12345") {
        history.push('dashboard');
      }
      else{
        alert('INVALID CREDENTIALS');
      }
    }

    const isDisabled = useCallback(() => {
    return !(state.email  && state.password )
    }, [state.email, state.password]);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>EMAIL: </label>
          <input placeholder = "Enter abc@mail.com" ref = {emailInput} type='email' value={state.email} onChange={(evt) => dispatch({email: evt.currentTarget.value, type: 'email'})} /> 
        </div>
        
        <div>
          <label>PASSWORD: </label>
          <input placeholder = "Enter 12345" type='password' value={state.password} onChange={(evt) => dispatch({password: evt.currentTarget.value, type: 'password'})} />
        </div>

        <div>
        <button disabled={isDisabled()} onClick={loginMe}>LOGIN</button>  
        </div>

      </header>
    </div>
  );
}

