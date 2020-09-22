import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';

export default function useAuthListener() {
  const [user, setUser] = useState(localStorage.getItem('authUser'));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {

    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
        localStorage.setItem('authUser', JSON.stringify(authUser));
      } else {
        localStorage.removeItem('authUser');
      }
    })
    return () => listener();
  }, []);

  return { user };
}