import React from 'react';
import Title1 from '../../components/Common/Title1';
import CharacterBox from '../../components/BigScreen/lobbyScreen/CharacterBox';
import TimerBox from '../../components/BigScreen/lobbyScreen/TimerBox';
import QrCode from '../../components/Common/QRCode';

const LobbyPage = () => {
  return (
    <div className="lobby-container">
      <Title1 />
      <QrCode />
      <div className="character-container">
        <CharacterBox />
      </div>
      <TimerBox 

      />
      <div className="timer-seconds">40 sekunder</div>
    </div>
  );
};

export default LobbyPage;
