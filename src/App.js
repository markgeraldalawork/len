import React, { useState, useEffect } from "react";
import "./App.css";
import Confetti from "react-confetti";

function App() {
  const anniversaryDate = new Date("2023-08-15"); // CHANGE THIS
  const today = new Date();
  const daysTogether = Math.floor(
    (today - anniversaryDate) / (1000 * 60 * 60 * 24)
  );

  const [darkMode, setDarkMode] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
  ];

  useEffect(() => {
    if (playMusic) {
      document.getElementById("bg-music").play();
    } else {
      document.getElementById("bg-music").pause();
    }
  }, [playMusic]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Confetti numberOfPieces={150} recycle={false} />

      <audio id="bg-music" loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="controls">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Day Mode" : "🌙 Night Mode"}
        </button>
        <button onClick={() => setPlayMusic(!playMusic)}>
          {playMusic ? "🔇 Stop Music" : "🎵 Play Music"}
        </button>
      </div>

      <header className="hero">
        <h1 className="title">Julienne Lab Guab 💕</h1>
        <p>We’ve been in love for</p>
        <h2 className="days">{daysTogether} Days 💖</h2>
      </header>

      <section className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </section>

      <section className="love-letter-section">
        <button className="letter-btn" onClick={() => setShowLetter(!showLetter)}>
          💌 Open Love Letter
        </button>

        {showLetter && (
          <div className="love-letter">
            <h2>Happy Anniversary My Love 💖</h2>
            <p>
              From the moment you came into my life,
              everything became brighter.
              You are my safe place, my happiness,
              and my forever person.
              I promise to love you in every lifetime.
              Always & forever. 💕
            </p>
          </div>
        )}
      </section>

      <footer>
        <p>Forever & Always — Us 💞</p>
      </footer>
    </div>
  );
}

export default App;