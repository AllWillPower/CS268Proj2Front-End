import {Action} from "./actions";

const initialState = {
    isWaiting: false,
    torrents: [],
};

function reducer(state = initialState, action){
    switch(action.type) {
        case Action.LoadTorrents:
            return {
                ...state,
                isWaiting: false,
                torrents: action.payload,
            };
        case Action.FinishAddingTorrent:
            action.payload.key = action.payload._id;
            return {
                ...state,
                isWaiting: false,
                
                torrents: [action.payload, ...state.torrents],
            };
        case Action.UpdateTorrent:
            return {
                ...state,
                isWaiting: false,
                torrents: state.torrents.map(torrent =>{
                    if(torrent._id === action.payload._id){
                        return action.payload;
                    }
                    else{
                        return torrent;
                    }
                })
            };
        case Action.EnterEditMode:
            return {
                ...state,
                torrents: state.torrents.map(torrent =>{
                    if(torrent._id === action.payload._id){
                        return {...torrent, isEditing: true};
                    }
                    else{
                        return torrent;
                    }
                })
            };
        case Action.LeaveEditMode:
            return {
                ...state,
                torrents: state.torrents.map(torrent =>{
                    if(torrent._id === action.payload._id){
                        return {...torrent, isEditing: undefined};
                    }
                    else{
                        return torrent;
                    }
                })
            };
        case Action.FinishDeletingTorrent:
            return {
                ...state,
                isWaiting: false,
                torrents: state.torrents.filter(torrent => torrent._id !==action.payload._id),
            };
        case Action.StartWaiting:
            return {
                ...state,
                isWaiting: true,
            };
        default:
    return state;
    }
}

export default reducer;