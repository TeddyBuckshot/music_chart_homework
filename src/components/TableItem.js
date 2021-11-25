import React from "react";

const TableItem = ({song, id}) => {

    return(
        <tr key={id}>
            <td>
            {song.entry[0].title.label}
            {song.entry[0].im}
            </td>
            {/* <td>{song.name.official}</td> */}
            {/* <td>{country.population}</td> */}
        </tr>
    );
}

export default TableItem;