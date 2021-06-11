import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

// Get a RTDB instance
export const rtdb = firebase
    .initializeApp({databaseURL: 'https://radishchat.firebaseio.com'})
    .database()

// Get a Firestore instance
export const firestore = firebase
    .initializeApp({projectId: 'radishchat'})
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const {TimeStamp, GeoPoint} = firebase.firestore
export {TimeStamp, GeoPoint}
