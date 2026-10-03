import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const firebaseConfig = {
  apiKey: "AIzaSyDh8WQHGpqauflHVS9vy1QecWQ8W62HRYs",
  authDomain: "projetoweb-7098d.firebaseapp.com",
  databaseURL: "https://projetoweb-7098d-default-rtdb.firebaseio.com",
  projectId: "projetoweb-7098d",
  storageBucket: "projetoweb-7098d.firebasestorage.app",
  messagingSenderId: "555754622028",
  appId: "1:555754622028:web:699ca405b568d89b01b8e9"
};
 
const app = initializeApp(firebaseConfig);
 
const persistence =
  Platform.OS === 'web'
    ? browserLocalPersistence
    : getReactNativePersistence(AsyncStorage);
 
const auth = initializeAuth(app, { persistence });
const database = getDatabase(app);
 
export { auth, database };