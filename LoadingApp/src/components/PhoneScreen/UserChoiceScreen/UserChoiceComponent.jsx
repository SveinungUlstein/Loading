import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useChoicesAndVotes from '../../../hooks/useChoiceAndVotes';
import '../../../styles/PhoneScreenStyles/UserChoiceStyles/Userchoice.css';

function UserChoiceComponent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isPortrait, setIsPortrait] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { choices, votes, error } = useChoicesAndVotes();
  const [userChoice, setUserChoice] = useState(null);
  const [prevCounts, setPrevCounts] = useState({});

  useEffect(() => {
    // Lock screen orientation to landscape
    const lockOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('landscape');
        } catch (error) {
          console.error('Failed to lock orientation:', error);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 5000);
        }
      } else {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    };

    // Handle orientation changes
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    lockOrientation();
    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);

  useEffect(() => {
    // Retrieve user's choice from local storage
    const storedChoice = localStorage.getItem('userChoice');
    if (storedChoice) {
      setUserChoice(JSON.parse(storedChoice));
    }

    // Set user choice based on URL parameter
    if (choices.length > 0 && id) {
      const selectedChoice = choices.find((c) => c.choiceId === parseInt(id));
      setUserChoice(selectedChoice || null);

      // Save user's choice to local storage
      if (selectedChoice) {
        localStorage.setItem('userChoice', JSON.stringify(selectedChoice));
      }
    }
  }, [choices, id]);

  useEffect(() => {
    // Update previous counts for axe and bow
    const bowChoice = choices.find((choice) => choice.choiceTxt === 'bue');
    const axeChoice = choices.find((choice) => choice.choiceTxt === 'øks');

    const voteCounts = votes.reduce((acc, vote) => {
      acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
      return acc;
    }, {});

    if (bowChoice && axeChoice) {
      const newCounts = {
        bue: voteCounts[bowChoice.choiceId] || 0,
        øks: voteCounts[axeChoice.choiceId] || 0
      };

      if (newCounts.bue !== prevCounts.bue || newCounts.øks !== prevCounts.øks) {
        setPrevCounts(newCounts);
      }
    }
  }, [votes, choices]);

  const getImageSource = (choice) => {
    if (!choice) return '';
    switch (choice.choiceTxt) {
      case 'øks':
        return 'src/images/Axe button.png';
      case 'bue':
        return 'src/images/PilOgBue.png';
      case 'tryllestav':
        return 'src/images/tryllestav.png';
      default:
        return `src/images/${choice.choiceTxt}.png`;
    }
  };

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!choices.length || !votes.length) {
    return <div>Loading...</div>;
  }

  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.length;
  const sortedChoices = choices.sort((a, b) => (voteCounts[b.choiceId] || 0) - (voteCounts[a.choiceId] || 0));
  const mostVotedChoice = sortedChoices[0] || { choiceTxt: 'Loading...', choiceId: 0 };

  return (
    <div className="landscape-mode bg-cream h-screen flex flex-col items-center">
      <h1 className="text-5xl font-vt323 text-mustard bg-brown mb-4 text-center w-4/5">TOTAL SCORE</h1>
      <div className="choice-container w-4/5">
        {/* Display the most voted choice */}
        <div className="choice-box flex items-center bg-white text-black border-2 border-black rounded-lg p-2 my-2 text-xs w-full justify-center">
          <img className="w-10 h-10 mr-2" src={getImageSource(mostVotedChoice)} alt={mostVotedChoice.choiceTxt} />
          <div className="text-center">
            <p>... beseiret trollet med {mostVotedChoice.choiceTxt}</p>
            <p>{voteCounts[mostVotedChoice.choiceId]} spillere valgte {mostVotedChoice.choiceTxt}</p>
          </div>
        </div>
        {/* Display the remaining choices */}
        {sortedChoices.slice(1).map((choice, index) => (
          <div key={index} className="choice-box flex items-center bg-white text-black border-2 border-black rounded-lg p-2 my-2 text-xs w-full justify-center">
            <img className="w-10 h-10 mr-2" src={getImageSource(choice)} alt={choice.choiceTxt} />
            <div className="text-center">
              <p>... med {choice.choiceTxt}</p>
              <p>{voteCounts[choice.choiceId]} spillere valgte {choice.choiceTxt}</p>
              {choice.choiceTxt === 'bue' && voteCounts[choice.choiceId] > prevCounts.bue && (
                <p>Du og {voteCounts[choice.choiceId] - 1} andre valgte dette!</p>
              )}
              {choice.choiceTxt === 'øks' && voteCounts[choice.choiceId] > prevCounts.øks && (
                <p>Du og {voteCounts[choice.choiceId] - 1} andre valgte dette!</p>
              )}
            </div>
          </div>
        ))}
        {/* Display the user's choice */}
        {userChoice && (
          <div className="mt-4 text-center">
            <p>Du og {voteCounts[userChoice.choiceId] - 1} andre spillere valgte {userChoice.choiceTxt}</p>
          </div>
        )}
      </div>
      {/* Next button */}
      <button className="next-button text-xl absolute bottom-4 right-4 bg-transparent border-none cursor-pointer" onClick={() => navigate('/phonerating')}>
        Next
      </button>
      {/* Orientation warning */}
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default UserChoiceComponent;
