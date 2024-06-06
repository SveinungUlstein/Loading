import React from 'react';
import Title1 from '../../components/Common/Title1';
import CharacterBox from '../../components/BigScreen/lobbyScreen/CharacterBox';
import TimerBox from '../../components/BigScreen/lobbyScreen/TimerBox';
import QrCode from '../../components/Common/QRCode';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import useAvatarCounts from '../../hooks/useAvatarCounts';
import '../../styles/LobbyStyles/lobbyScreen.css';

const LobbyPage = () => {
  const avatarCounts = useAvatarCounts();

  return (
    <div className="lobby-container grid grid-cols-2 grid-rows-2 gap-4 h-screen p-8">
      <div className="col-span-1 flex justify-center items-center">
        <Title1 />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <QrCode />
      </div>
      <div className="col-span-1 flex justify-center items-top">
        <CharacterBox
          imageUrl="/src/images/3Characters.png"
          avatarNumber1={avatarCounts.avatar1}
          avatarNumber2={avatarCounts.avatar2}
          avatarNumber3={avatarCounts.avatar3}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="text-center mt-4"></div>
        <TimerBox timerImageUrl="/src/images/timer.png" />
        <div className="text-center mt-4 timer-seconds"></div>
      </div>
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/voting" />
      </div>
    </div>
  );
};

export default LobbyPage;
