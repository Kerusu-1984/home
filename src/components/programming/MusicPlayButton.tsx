import React, { useRef, useState } from "react";
const MusicPlayButton = () => {
  const src = "/audio_play_test_music.mp3";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleClick = () => {
    if (audioRef.current === null) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <button onClick={handleClick} className="btn">
        {isPlaying ? (
          <div className="flex items-center text-center">
            <span className="material-symbols-outlined">stop</span>
            <p>stop</p>
          </div>
        ) : (
          <div className="flex items-center text-center">
            <span className="material-symbols-outlined">play_arrow</span>
            <p>play</p>
          </div>
        )}
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default MusicPlayButton;
