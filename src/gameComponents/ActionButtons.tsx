import { use } from "react";
import { FirestoreContext } from "../contexts/FirestoreContext";

const ActionButtons = () => {
  const { initSingleplayerGame } = use(FirestoreContext);

  const handleSinglePlayer = () => {
    initSingleplayerGame();
  }

  return (
    <div className="mt-10 mb-4 flex justify-center items-center">
      <button className="btn btn-primary" onClick={handleSinglePlayer}>Singleplayer</button>
      <button className="btn btn-secondary">Multiplayer</button>
    </div>
  );
};

export default ActionButtons;