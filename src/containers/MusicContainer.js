import React, {useState, useEffect} from "react";
import MusicTable from '../components/MusicTable.js';


const MusicContainer = () => {

    const [songs, setSongs] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState(null);
    // let [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getSongs();
      }, [])

    const getSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(response => response.json())
            .then(songs => setSongs(songs));
    }

    return (
        <div className='music-container'>
            <MusicTable songs={songs} />

        </div>
    )
};

export default MusicContainer;