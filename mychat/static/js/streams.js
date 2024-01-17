const APP_ID = "65ca955fe4304ff48382163b1aa10a17"
const CHANNEL = 'main'
const TOKEN = '007eJxTYEj6lmmWw+auZ2kXkX3NiC/ZquSjxNSAbzJXtoS8+frrWKwCg5lpcqKlqWlaqomxgUlamomFsYWRoZlxkmFioqFBoqF56OzlqQ2BjAyFm44wMTJAIIjPwpCbmJnHwAAA9Moe5g=='
let UID;


const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
            <div id="username-wrapper"><span class="user-name">My name</span></div>
            <div class="video-player" id="user-${UID}"></div>
        </div>`

    document.getElementById('videos-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)



    }