import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './config';
import 'firebase/compat/storage'
//import { initializeApp } from 'firebase/app'

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig);

        }
        this.db = app.firestore()
        this.storage = app.storage()
    }
}

const firebase = new Firebase();
export default firebase;