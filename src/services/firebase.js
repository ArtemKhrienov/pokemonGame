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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  };

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  };

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  };

  addPokemon = (pokemon, cb) => {
    const key = this.database.ref().child('pokemons').push().key;
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  updatePokemon = async (key, pokemon) => {
    await this.database.ref(`pokemons/${key}`).set(pokemon);
  };
}

export default Firebase;