import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Aniversário do Taiada', duration: '4:30'},
        { title: 'Macarena', duration: '2:05'},
        { title: 'Paulera', duration: '5:02'},
        { title: 'Robocop Gay', duration: '2:25'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})