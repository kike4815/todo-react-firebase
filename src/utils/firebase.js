import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyBI_VypqbAif0q6yDGaZ6emvpOhVOnUlSQ',
    authDomain: 'todoreact-b1bd1.firebaseapp.com',
    databaseURL: 'https://todoreact-b1bd1.firebaseio.com',
    projectId: 'todoreact-b1bd1',
    storageBucket: 'todoreact-b1bd1.appspot.com',
    messagingSenderId: '661275805394',
    appId: '1:661275805394:web:57070c55725c64a1830f0b'
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
