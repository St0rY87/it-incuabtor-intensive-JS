// DATA
const playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
        tracks: [
            {
                artist: 'Eminem',
                title: 'Rap God',
                isHot: true
            },
            {
                artist: '50 cent',
                title: 'In da club',
                isHot: false
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

for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    const playlistElement = document.createElement('div');

    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlist.title);

    playlistElement.append(playlistTitleElement)

    const tracksElement = document.createElement('ul');

    for (let j = 0; j < playlist.tracks.length; j++) {
        const track = playlist.tracks[j];

        const trackElement = document.createElement('li');
        trackElement.append(track.title)

        tracksElement.append(trackElement)
    }

    playlistElement.append(tracksElement)

    root.append(playlistElement)

}

