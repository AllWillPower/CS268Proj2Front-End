

export const Action = Object.freeze({
    LoadTorrents: 'LoadTorrents',
    FinishAddingTorrent: 'FinishAddingTorrent',
    UpdateTorrent: 'UpdateTorrent',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
    FinishDeletingTorrent: 'FinishDeletingTorrent',
    StartWaiting: 'StartWaiting'
});

export function startWaiting(torrents){
    return {
        type: Action.StartWaiting,
    };
}

export function loadTorrents(torrents){
    return {
        type: Action.LoadTorrents,
        payload: torrents,
    };
}

export function finishAddingTorrent(torrent){
    // console.log("Loading torrents");
    return {
        type: Action.FinishAddingTorrent,
        payload: torrent,
    };
}


export function updateTorrent(torrent){
    // console.log("Loading torrents");
    return {
        type: Action.UpdateTorrent,
        payload: torrent,
    };
}

export function enterEditMode(torrent){
    return {
        type: Action.EnterEditMode,
        payload: torrent,
    };
}

export function leaveEditMode(torrent){
    return {
        type: Action.LeaveEditMode,
        payload: torrent,
    };
}

export function finishDeletingTorrent(torrent){
    return {
        type: Action.FinishDeletingTorrent,
        payload: torrent,
    };
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);

    }
    return response;
}

// const host = 'http://sellej.duckdns.org:3000';
const host = 'http://157.245.142.207:3000'

export function loadAllTorrents(){
    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/api/torrents`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
                dispatch(loadTorrents(data));
                //console.log(data);
           // }
        })
        // .then(function(){console.log('Request succeeded')})
        .catch(e => console.error(e));
    };
}

export function searchBy(type, input){
    return dispatch => {

        if(input === ""){
            dispatch(loadAllTorrents());
        }
        else{
            dispatch(startWaiting());
            fetch(`${host}/api/torrents/${type}/${input}`)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
            // if(data.ok){
                dispatch(loadTorrents(data));
           // }
            })
        // .then(function(){console.log('Request succeeded')})
        .catch(e => console.error(e));
        }

        
    };
}

export function startAddingTorrent(name, author, filesize, filename, distributor, description){
    let distributionWebsite = '';
    if(distributor === 'Ubuntu'){
        distributionWebsite = 'https://ubuntu.com/';
    }
    else if(distributor === 'CentOS'){
        distributionWebsite = 'https://www.centos.org/';
    }
    else if(distributor === 'Get Fedora'){
        distributionWebsite = 'https://getfedora.org/';
    }
    else if(distributor === 'Debian'){
        distributionWebsite = 'https://www.debian.org/';
    }
    else if(distributor === 'Linux Mint'){
        distributionWebsite = 'https://www.linuxmint.com/';
    }
    else if(distributor === 'Manjaro'){
        distributionWebsite = 'https://manjaro.org/';
    }
    const torrent = {name: name, author: author, filesize: filesize, filename: filename, distribution:{distributionName: distributor, distributionWebsite: distributionWebsite}, description: description};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(torrent),
    }
    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/api/torrents`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
                dispatch(finishAddingTorrent(data));
           // }
        })
        // .then(function(){console.log('Request succeeded')})
        .catch(e => console.error(e));
    };
}

export function updateLeechers(torrentID, i){

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    }
    if(i === 1){
        //console.log(torrentID);
        return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/api/torrents/${torrentID}/leech`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
                // torrent.id = data.id;
                // dispatch(finishAddingTorrent(torrent))
                //console.log(data);
                dispatch(updateTorrent(data));
           // }
        })
        .catch(e => console.error(e));
        }
    }
    else{
        return dispatch => {
            dispatch(startWaiting());
            fetch(`${host}/api/torrents/${torrentID}/unleech`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                // if(data.ok){
                    // torrent.id = data.id;
                    // dispatch(finishAddingTorrent(torrent))
                    //console.log(data);
                    dispatch(updateTorrent(data));
               // }
            })
            .catch(e => console.error(e));
        }
    }
}

export function updateSeeders(torrentID, i){

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    }

    if(i === 1){
        return dispatch => {
            dispatch(startWaiting());
            fetch(`${host}/api/torrents/${torrentID}/seed`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                // if(data.ok){
                    // torrent.id = data.id;
                    // dispatch(finishAddingTorrent(torrent))
                    //console.log(data);
                    dispatch(updateTorrent(data));
               // }
            })
            .catch(e => console.error(e));
        }
    }
    else{
        return dispatch => {
            dispatch(startWaiting());
            fetch(`${host}/api/torrents/${torrentID}/unseed`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                // if(data.ok){
                    // torrent.id = data.id;
                    // dispatch(finishAddingTorrent(torrent))
                    //console.log(data);
                    dispatch(updateTorrent(data));
               // }
            })
            .catch(e => console.error(e));
        }
    }
}

export function startSavingTorrent(name, description, torrentID){
    
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, description: description}),
    }
    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/api/torrents/${torrentID}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
                // console.log(data);
                dispatch(updateTorrent(data));
                
                //console.log(data);
           // }
        })
        // .then(function(){console.log('Request succeeded')})
        .catch(e => console.error(e));
    };
}


export function startDeletingTorrent(torrent){
    const options = {
        method: 'DELETE',
    };
    return dispatch => {
        dispatch(startWaiting());
        fetch(`${host}/api/torrents/${torrent.filename}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
           // }
        })
        .catch(e => console.error(e));




        fetch(`${host}/api/torrents/${torrent._id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            // if(data.ok){
                dispatch(finishDeletingTorrent(torrent));
           // }
        })
        .catch(e => console.error(e));
    };
}