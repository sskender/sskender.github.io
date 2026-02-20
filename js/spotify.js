document.addEventListener("DOMContentLoaded", () => {
    const spotifyBadge = document.getElementById("spotify-badge");
    const songTitle = document.getElementById("spotify-song-title");
    const artistName = document.getElementById("spotify-artist-name");

    const fetchSpotifyData = async () => {
        try {
            const response = await fetch(
                "https://fu737dkvsrvo5axhjyjekhgr6e0kwwgl.lambda-url.eu-central-1.on.aws/",
            );
            const data = await response.json();

            if (data.is_playing) {
                songTitle.textContent = data.title;
                artistName.textContent = data.author;
                spotifyBadge.style.display = "flex";
                spotifyBadge.title = `Listening to: ${data.title} by ${data.author}`;
            } else {
                spotifyBadge.style.display = "none";
            }
        } catch (error) {
            spotifyBadge.style.display = "none";
        }
    };

    fetchSpotifyData();
    setInterval(fetchSpotifyData, 10000);
});
