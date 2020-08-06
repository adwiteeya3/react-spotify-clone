// https://developer.spotify.com/documentation.web-playback-sdk/quick-start/#

// where we actually send users to login to spotify
export const authEndpoint= "https://accounts.spotify.com/authorize";
//export const authEndpoint= "https://accounts.spotify.com/en/login/";

// after login, the below line redirects to spotify home page
const redirectUri = "http://localhost:3000/";
const clientId= "5a8366f1269a4237bb5fc0bd3e077f55";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const loginUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

