import type { ReactNode } from "react";
import { FirestoreContext } from "./FirestoreContext";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.init";
import Swal from "sweetalert2";

const FirestoreProvider = ({children} : {children: ReactNode}) => {

  const initGame = async () => {
    try {
      const docRef = doc(db, "games", crypto.randomUUID());
      await setDoc(docRef, {
        board: Array(9).fill(null),
        turn: 'X',
        moves: 0,
        dissapeared: [],
        winner: null,
        players: {
          X: null,
          O: null,
        },
        createdAt: serverTimestamp(),
        status: 'waiting',
      });
      console.log("Game initialized with ID: ", docRef.id);
    } catch (error) {
      console.error("Error initializing game: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }

  }

  const initSingleplayerGame = async () => {
    try {
      const docRef = doc(db, "singlePlayerGames", crypto.randomUUID());
      await setDoc(docRef, {
        board: Array(9).fill(null),
        turn: 'X',
        moves: 0,
        dissapeared: [],
        winner: null,
        players: {
          X: 'Player1',
          O: 'Player2 (AI)',
        },
        createdAt: serverTimestamp(),
        status: 'waiting',
      });
      console.log("Singleplayer game initialized with ID: ", docRef.id);
      Swal.fire({
        icon: 'success',
        title: 'Game Initialized',
        text: 'You can now start playing against the AI!',
      });
    } catch (error) {
      console.error("Error initializing singleplayer game: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  const firestoreInfo = {
    initGame,
    initSingleplayerGame,
  }

  return (
    <FirestoreContext value={firestoreInfo}>
      {children}
    </FirestoreContext>
  );
};

export default FirestoreProvider;