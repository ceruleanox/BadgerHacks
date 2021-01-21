const APIController = (function() {
    
    const clientId = config.CLIENT_ID;
    const clientSecret = config.CLIENT_SECRET;

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

        const _getTracks = async (token, tracksEndPoint) => {
          const limit = 10;

          const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
          });

          const data = await result.json();
          return data.items;
        };

        const _getTrack = async (token, trackEndPoint) => {
          const result = await fetch(`${trackEndPoint}`, {
            method: "GET",
            headers: { Authorization: "Bearer " + token },
          });

          const data = await result.json();
          return data;
        };

    return {
      getToken() {
        return _getToken();
      },
      getTracks(token, tracksEndPoint) {
        return _getTracks(token, tracksEndPoint);
      },
      getTrack(token, trackEndPoint) {
        return _getTrack(token, trackEndPoint);
      }
    };
})();

const UIController = (function() {

    const DOMElements = {
        buttonUpload: '#btn_upload',
        songTrack: '#song_track'
    }

    // define html selectors for DOM objects above
    return {
        inputField() {
            submit: document.querySelector(DOMElements.buttonUpload),
            songTrack
        }
    }

})