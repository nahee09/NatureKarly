import { initializeApp } from 'firebase/app';

const {
  VITE_API_KEY = 'AIzaSyAnhLCbF8MOOTpVeeYCNbDac0JKAr2R4-o',
  VITE_AUTH_DOMAIN = 'naturekarly-68027.firebaseapp.com',
  VITE_PROJECT_ID = 'naturekarly-68027',
  VITE_MESSAGE_SENDER_ID = '401010153733',
  VITE_STORAGE_BUCKET = 'naturekarly-68027.appspot.com',
  VITE_APP_ID = '1:401010153733:web:0d96a2e4e012091255ff6c',
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_MESSAGE_SENDER_ID,
  messagingSenderId: VITE_STORAGE_BUCKET,
  appId: VITE_APP_ID,
};

// Initialize Firebase
// export app 
// const firebaseApp = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);

// export default firebaseApp;
