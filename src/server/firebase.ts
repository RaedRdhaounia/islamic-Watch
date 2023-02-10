// Import services from fire base
import {getAuth} from 'firebase/auth';
import firebaseConfig from '../config/firebase-config';

// fire base getter functions uses

export const auth = getAuth(firebaseConfig); // get auth state ...

// we can add firestore ... as services of the firebase
