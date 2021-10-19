const initialState = {
    todos: [],
    showLoader: false
};


export const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos: [...state.todos, action.todo]
            };
        break;
        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter((u) => u.todoname !== action.todoname)
            };
        break;
        case 'SHOW_LOADER':
            return{
                ...state,
                showLoader: true
            };
        break;
        case 'HIDE_LOADER':
            return{
                ...state,
                showLoader: false
            };
        break;
        default:
            return state;
    }
};