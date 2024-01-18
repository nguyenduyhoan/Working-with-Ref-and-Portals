import { useState, useRef } from "react";

export default function Player() {
  const [inputPlayer, setInputPlayer] = useState(null);
  const playerName = useRef();

  function inputOnChange(event) {
    setInputPlayer(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>{inputPlayer ?? 'Welcome unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={inputOnChange}>Set Name</button>
      </p>
    </section>
  );
}
