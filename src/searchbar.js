import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchBy} from './actions';

export function SearchBar() {

    // let input = useSelector(state => state.input);
    // let type = useSelector(state => state.input);
    const dispatch = useDispatch();
    
    //let value = '';
    //let type = 'name';

    const [value, setValue] = useState('');
    const [type, setType] = useState('name');
    const search = () => {
        dispatch(searchBy(type, value));
        //alert('A value was submitted: ' + value);
    }

    
    const handleChange = (event) => {
        setValue(event.target.value);
        // dispatch(searchBy(type, value));
        //value = event.target.value;
    }
    
    const handleChange2 = (event) => {
        setType(event.target.value);
        //type = event.target.value;
    }
    
    


    return(
        <div className="searchBar">
            <div className="searchBar-left">
                <span className="searchBarLabel">Search By: </span>
                <select className="searchBy" onChange={handleChange2}>
                    <option value="name">Torrent Name</option>
                    <option value="author">Torrent Author</option>
                    <option value="distributor">Distribution</option>
                </select>
            
            
                <input className="searchInput" type="text" onChange={handleChange} placeholder="Search Torrents..."></input>
                <button onClick={search}>Search</button>
            </div>
            
            
            
        </div>
    );
}