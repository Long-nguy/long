// import firebase from "firebase/compat";
// import { db } from "./firebase";
import firebase, { db } from './firebase'

const addDocument = (collection, data) => {
    const query = db.collection(collection);
    query.add({
        ...data,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export default addDocument;