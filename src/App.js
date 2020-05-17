import React, {useEffect} from 'react';
import './App.css';

import {Torrent} from './torrent';
import {Header} from './header';
import {Labels} from './labels';
import {SearchBar} from './searchbar';
import {TorrentAdder} from './torrentadder';
import {useSelector, useDispatch} from 'react-redux';
import {loadAllTorrents} from './actions';

function App() {

  const torrents = useSelector(state => state.torrents);
  const dispatch = useDispatch();

  const isWaiting = useSelector(state => state.isWaiting);

  useEffect(() => {
    // dispatch(loadTorrents([
    //   {id: 1, name: "test-torrent", logoSource: "logo512.png", distributor: "Google", size: 10, downloadLink: "testing.txt", leechers: "4", seeders: "8", uploaderName: "Tester", datePosted: "Now"},
    //   {id: 2, name: "test-torrent", logoSource: "logo512.png", distributor: "Google", size: 10, downloadLink: "testing.txt", leechers: "4", seeders: "8", uploaderName: "Tester", datePosted: "Now"}
    // ]));
    dispatch(loadAllTorrents());
  }, [dispatch]);
  
  return (
    
    <div id="torrents-root">
      <Header />
      <SearchBar />
      <TorrentAdder />
      {isWaiting && <div className="spinner" />}      
      <table>
        <tbody>
          <Labels />
          {torrents.map(torrent => <Torrent key ={torrent._id} torrent={torrent} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
