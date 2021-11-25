import React from "react";
import TableItem from './TableItem.js';

const MusicTable = ({songs}) => {

    console.log(songs);
    const SongsItems = Object.values(songs).map((song, index) => {
        return <TableItem song={song} id={index} />
    });

    

    return(
        <div>
            <table className="table">
                <thead>
                    <tr className="table-row">
                        <th><strong>song</strong></th>
                        {/* <th><strong>Artist</strong></th> */}
                        {/* <th><strong>Chart Position</strong></th> */}
                    </tr>
                </thead>
                <tbody>
                    {SongsItems}
                </tbody>
            </table>
        </div>
    );
};

export default MusicTable;
