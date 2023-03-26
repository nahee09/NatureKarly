import { initializeApp } from 'firebase/app';

// const {
//   VITE_API_KEY,
//   VITE_AUTH_DOMAIN,
//   VITE_PROJECT_ID,
//   VITE_MESSAGE_SENDER_ID,
//   VITE_STORAGE_BUCKET,
//   VITE_APP_ID,
// } = import.meta.env;

// const firebaseConfig = {
//   apiKey: VITE_API_KEY,
//   authDomain: VITE_AUTH_DOMAIN,
//   projectId: VITE_PROJECT_ID,
//   storageBucket: VITE_STORAGE_BUCKET,
//   messagingSenderId: VITE_MESSAGE_SENDER_ID,
//   appId: VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAnhLCbF8MOOTpVeeYCNbDac0JKAr2R4-o',
  authDomain: 'naturekarly-68027.firebaseapp.com',
  projectId: 'naturekarly-68027',
  storageBucket: 'naturekarly-68027.appspot.com',
  messagingSenderId: '401010153733',
  appId: '1:401010153733:web:0d96a2e4e012091255ff6c',
};

export const app = initializeApp(firebaseConfig);
