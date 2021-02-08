import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyCgf9ajuNjwTjLhYyTGvsKuknzFzMpB8XU",
  authDomain: "pokemons-e5140.firebaseapp.com",
  databaseURL: "https://pokemons-e5140-default-rtdb.firebaseio.com",
  projectId: "pokemons-e5140",
  storageBucket: "pokemons-e5140.appspot.com",
  messagingSenderId: "71054706726",
  appId: "1:71054706726:web:23151a4ee0c33a0d013ee7"
});

export const fire = firebase;
export const database = fire.database();

export default database;