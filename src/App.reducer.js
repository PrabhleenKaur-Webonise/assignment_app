export function appReducer (state, payload){
    switch(payload.type){
      case 'email':
        return {...state, email: payload.email};
        break;
      case 'password':
        return {...state, password: payload.password};
        break;
      case 'enableSubmit':
        return {...state, enableSubmit: payload.enableSubmit};
         break;
      default:
        return state;
    }
    //return modify state
  }
  