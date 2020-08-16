import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

    render() {
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
                <TrackList tracks={this.props.playlistTracks} />
            </div>
        );
    }
}

export default Playlist;