// https://developer.spotify.com/documentation.web-playback-sdk/quick-start/#

// where we actually send users to login to spotify
export const authEndpoint= "https://accounts.spotify.com/authorize";

// after login, the below line redirects to spotify home page
const redirectUri= "http://localhost:3000/"
const clientId= "5db405b7ba2945a19af1b7d78ff9fac8"

const scope= [
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;

