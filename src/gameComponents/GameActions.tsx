import { use, useState } from "react";
import { FirestoreContext } from "../contexts/FirestoreContext";
import GameBoard from "./GameBoard";

const GameActions = () => {
  const {
    initSingleplayerGame
  } = use(FirestoreContext);
  const [id, setId] = useState<string | null>(null);

  const handleSinglePlayer = () => {
    initSingleplayerGame() // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((gameId: any) => {
        setId(gameId);
        console.log("Game ID:", gameId);
      });
  };
  return <>
      <div className="mt-10 mb-4 flex justify-center items-center">
        <button className="btn btn-primary" onClick={handleSinglePlayer}>Singleplayer</button>
        <button className="btn btn-secondary">Multiplayer</button>
      </div>

      { id && <GameBoard id={id} /> }
    </>;
};

export default GameActions;