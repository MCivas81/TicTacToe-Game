import { useState } from "react";
import { PlayerFormProps } from "../types/playerForm";

const PlayerForm: React.FC<PlayerFormProps> = ({ onFormSubmit }) => {
  const [nameX, setNameX] = useState<string>("");
  const [nameO, setNameO] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(nameX, nameO);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-5 max-w-xs sm:max-w-xl gap-2 mx-auto">
        <input
          type="text"
          placeholder="Giocatore X"
          value={nameX}
          onChange={(e) => setNameX(e.target.value)}
          className="sm:col-span-2 border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Giocatore O"
          value={nameO}
          onChange={(e) => setNameO(e.target.value)}
          className="sm:col-span-2 border p-2 rounded"
        />
        <button disabled={!nameX || !nameO} type="submit" className="btn col-span-1">
          Gioca
        </button>
      </form>
      <p className="mt-12 text-center text-xl">Inserisci i nomi e inizia a giocare!</p>
    </>
  );
};

export default PlayerForm;
