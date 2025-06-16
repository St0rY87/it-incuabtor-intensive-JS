// DATA
const playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap God',
                isHot: true,
                imageSource: 'cardImage/trackList/alan-walker.jpg'
            },
            {
                artist: '50 cent',
                title: 'In da club',
                isHot: false,
                imageSource: 'cardImage/trackList/burak-yeter.jpg'
            }
        ]
    },
    {
        id: 2,
        title: 'Rap Hits 1990s',
        tracks: [
            {
                artist: 'Public Enemy',
                title: 'Fight the Power',
                isHot: true
            },

        ]
    },
]
// RENDER
const root = document.getElementById('root');
const playlistsElement = PlaylistsComponent(playlists)
root.append(playlistsElement)

function PlaylistsComponent(inputPlaylists) {
    const element = document.createElement('div');

    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        element.append(PlaylistComponent(playlist))
    }
    return element
}

// components
function PlaylistComponent(inputPlaylist) {

    const element = createElement('div', ['playlist']);

    //to do playlist title
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(inputPlaylist.title);

    element.append(playlistTitleElement)

    const tracksElement = document.createElement('ul');

    element.append(TracksComponent(inputPlaylist.tracks))

    return element

}

function TracksComponent(inputTracks) {
    const element = document.createElement('ul');

    for (let j = 0; j < inputTracks.length; j++) {
        const track = inputTracks[j];

        const trackElement = TrackComponent(track);

        element.append(trackElement)
    }

    return element;
}
function TrackComponent(inputTrack) {
    //create
    const element = document.createElement('li');

    //add data
    element.append(
        TrackImageComponent(inputTrack.imageSource),
        TrackTitleComponent(inputTrack));

    //return
    return element;
}
function TrackImageComponent(inputImageSource) {
    const element = document.createElement('img');
    element.src = inputImageSource;

    return element
}
function TrackTitleComponent(inputTrack) {
    return `${(inputTrack.isHot ? '🔥 ' : '') + inputTrack.artist} - ${inputTrack.title}`;
}

function createElement(tagName, classes = []) {
    const element = document.createElement(tagName);
    classes.forEach((c) => {
        element.classList.add(c)
    })

    return element;
}


