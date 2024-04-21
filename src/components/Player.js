import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIsEditing((wasEditing) => !wasEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function setName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            onChange={setName}
            value={playerName}
            required
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {isEditing === true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
