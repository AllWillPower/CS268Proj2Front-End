import React from 'react';

export function Labels() {
    return(
        // <div className="labels">
        //     <div className="labels-left">
        //         <span className="nameLabel">Torrent Name</span>
        //     </div>
        //     <div className="labels-right">
        //         <span className="sizeLabel">File Size</span>
        //         <span className="leechersLabel">Leechers</span>
        //         <span className="seedersLabel">Seeders</span>
        //         <span className="distributorLabel">Distribution</span>

        //         <span className="linkLabel">Download Link </span>
        //         <span className="uploaderNameLabel">Author</span>
        //         <span className="datePostedLabel">Date Posted</span>
                
        //     </div>
        // </div>
        <tr>
            <th>
                Torrent Name
            </th>
            <th>
                File Size
            </th>
            <th>
                Leechers
            </th>
            <th>
                Seeders
            </th>
            <th>
                Distribution
            </th>
            <th>
                Download Link
            </th>
            <th>
                Author/Date Posted
            </th>
            <th>
                Description
            </th>
        </tr>
    );
}