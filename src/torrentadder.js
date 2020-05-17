import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {startAddingTorrent} from './actions';
import axios from 'axios';

export function TorrentAdder() {
    const dispatch = useDispatch();
    //const [torrentfileName, setTorrentFileName] = useState('');
    const onAdd = () => {
        if(filesize.match(/^\d+$/)){
            const data = new FormData();
            data.append('torrentFile', file);
            axios.post("http://sellej.duckdns.org:3000/api/torrentfiles/upload", data, {})
            .then(res => {
                // console.log(res);
                if(!res.data.error)
                {
                    //console.log(res.data.filename);
                    // setTorrentFileName(res.data.filename);
                    // console.log(torrentfileName);
                    dispatch(startAddingTorrent(name, author, filesize, res.data.filename, distributor, description));
                    //startAddingTorrent w/ torrentFile's link
                }
                else{
                    alert("Must use a file with .torrent that has not been entered yet.");
                }
            })
        }
        else{
            alert("File size must contain only numbers");
        }
        
    }


    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [filesize, setFilesize] = useState('');
    const [file, setFile] = useState(null);
    
    const [distributor, setDistributor] = useState('Ubuntu');
    const [description, setDescription] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }
    const handleFilesizeChange = (event) => {
        setFilesize(event.target.value);
    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleDistributorChange = (event) => {
        setDistributor(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    return(
        <div className="torrentAdder">
            <h3>Add a New Torrent</h3>
            <div className="torrentAdder-left">
                <input className="torrentNameInput" type="text" onChange={handleNameChange} placeholder="Insert Torrent Name"></input>
                <input className="torrentAuthorInput" type="text" onChange={handleAuthorChange} placeholder="Insert Torrent's Author"></input>
                <input className="fileSizeInput" type="text" onChange={handleFilesizeChange} placeholder="Insert the File Size (in MB)"></input>
            </div>
            <div className="torrentAdder-right">
                <label>Add a Torrent File</label>
                <input id="inputFile" type="file" name="file" onChange={handleFileChange}></input>
                <select className="distributionSelector" onChange={handleDistributorChange}>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="CentOS">CentOS</option>
                    <option value="Get Fedora">Get Fedora</option>
                    <option value="Debian">Debian</option>
                    <option value="Linux Mint">Linux Mint</option>
                    <option value="Manjaro">Manjaro</option>
                </select>
                <input className="torrentDescInput" onChange={handleDescriptionChange} placeholder="Enter Torrent Description"></input>
            </div>
            <div className="torrentAdder-bottom">
                
                <button onClick={onAdd}>Publish Torrent</button>
                <button>Cancel</button>
            </div>
            
            
        </div>
    );
}