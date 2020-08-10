export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payloag]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
    
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };        
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }    
            
        default:
            return state;
    }
}


export default reducer;