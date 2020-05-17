import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateLeechers, updateSeeders, enterEditMode, leaveEditMode, startSavingTorrent, startDeletingTorrent} from './actions';

export function Torrent(props) {
    const torrent = props.torrent;
    const dispatch = useDispatch();
    const incLeechers = () => {
        dispatch(updateLeechers(torrent._id, 1));
    }
    const decLeechers = () => {
        dispatch(updateLeechers(torrent._id, -1));
    }
    const incSeeders = () => {
        dispatch(updateSeeders(torrent._id, 1));
    }
    const decSeeders = () => {
        dispatch(updateSeeders(torrent._id, -1));
    }

    const onEdit = () => {
        dispatch(enterEditMode(torrent));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(torrent));
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSave = () => {
        dispatch(startSavingTorrent(name, description, torrent._id));
    }

    const onDelete = () => {
        dispatch(startDeletingTorrent(torrent));
    }

    const host = 'https://torrentapi.duckdns.org:8442';

    if(torrent.isEditing){
        return (
            <tr className="torrent">
            <td className="torrent-left">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Change Torrent name"></input>
                <button onClick={onSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onDelete} className="delete-button">Delete</button>
            </td>
            <td>
                <span className="size">{torrent.filesize} Mb</span>
            </td>
            <td>
                <div className="leechers-full">
                    <div className="increments">
                        <button onClick={incLeechers}>+</button>
                        <button onClick={decLeechers}>-</button>
                    </div>
                    <span className="leechers">{torrent.leechers}</span>
                </div>
            </td>
            <td>
                <div className="seeders-full">
                    <div className="increments">
                        <button onClick={incSeeders}>+</button>
                        <button onClick={decSeeders}>-</button>
                    </div>
                    <span className="seeders">{torrent.seeders}</span>
                </div>
            </td>
            <td>
                <a href = {`${torrent.distribution.distributionWebsite}`} target="_blank" rel="noopener noreferrer">{torrent.distribution.distributionName}</a>
            </td>
            <td>
                <a href= {`${host}/api/torrentfiles/${torrent.filename}`} download>{torrent.name}.iso</a>
            </td>
            <td>
                <div className="authorDatePair">
                    <span className="uploaderName">{torrent.author}</span>
                    <span className="datePosted">{torrent.dateCreated.substring(0, 10)}</span>
                </div>
            </td>
            <td className="torrent-right">
                <div className="descriptionInput">
                    <label>Change Description:</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                {/* <input type="text" placeholder="Enter new Torrent name"></input> */}
            </td>
        </tr>
        );
    }
    else{
        return(
            <tr className="torrent">
                <td className="torrent-left">
                    <div className="nameButtonGroup">
                        <span className="name">{torrent.name}</span>
                        <img className = "logo" src = {`${torrent.distribution.distributionName}.png`} alt= {torrent.distribution.distributionName}></img>
                        <button onClick={onEdit}>Edit Torrent</button>
                    </div>
                </td>
                <td>
                    <span className="size">{torrent.filesize} Mb</span>
                </td>
                <td>
                    <div className="leechers-full">
                        <div className="increments">
                            <button onClick={incLeechers}>+</button>
                            <button onClick={decLeechers}>-</button>
                        </div>
                        <span className="leechers">{torrent.leechers}</span>
                    </div>
                </td>
                <td>
                    <div className="seeders-full">
                        <div className="increments">
                            <button onClick={incSeeders}>+</button>
                            <button onClick={decSeeders}>-</button>
                        </div>
                        <span className="seeders">{torrent.seeders}</span>
                    </div>
                </td>
                <td>
                <a href = {`${torrent.distribution.distributionWebsite}`} target="_blank" rel="noopener noreferrer">{torrent.distribution.distributionName}</a>
                </td>
                <td>
                    <a href= {`${host}/api/torrentfiles/${torrent.filename}`} download>{torrent.name}.iso</a>
                </td>
                <td>
                    <div className="authorDatePair">
                        <span className="uploaderName">{torrent.author}</span>
                        <span className="datePosted">{torrent.dateCreated.substring(0, 10)}</span>
                    </div>
                </td>
                <td className="torrent-right">
                    <span className="description">{torrent.description}</span>
    
                </td>
            </tr>
        );
    }
}