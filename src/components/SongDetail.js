import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({songs}) => {
if(!songs){
    return <div>Select a Song</div>
}
return <div>{songs.title}{songs.duration}</div>
};

const mapStateToProps = state => {
   return {songs: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);