import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = [];
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// const firebaseNotes = {
//   notes : {
//     12 : {
//       body: 'This is my note',
//       title: 'First note'
//     },
//     13 : {
//       body: 'This is my second note',
//       title: 'Second note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   body: 'This is my note',
//   title: 'First note'
// }, {
//   id: '13',
//   body: 'This is my second note',
//   title: 'Second note'
// }];

// database.ref('expenses').push({
//   description: "Rent",
//   amount: 55,
//   note: '',
//   createdAt: 43823
// });

// database.ref().set({
//     name: "Sukh Singh",
//     location: {
//       address: "9911 Kiss Lane"
//     }
// }).then(() => {
//   console.log("Database successfully updated");
// }).catch((error) => {
//   console.log("Something went wrong", error);
// });

// database.ref('attributes/height').set('70');
// database.ref('attributes/weight').set('160');

// database.ref('name').remove();