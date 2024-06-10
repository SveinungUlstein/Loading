import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useChoice from '../../../hooks/PhoneScreen/useChoice';
import '../../../styles/PhoneScreenStyles/UserChoiceStyles/Userchoice.css';

const PictureComponent = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-12 h-12 mr-4" />
);

function UserChoiceComponent() {
  const navigate = useNavigate();
  const [isPortrait, setIsPortrait] = useState(false);
  const [votes, setVotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false); 
  const { getVotesByUserId, loading, error } = useChoice();

  useEffect(() => {
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

    const handleOrientationChange = () => {
      if (window.innerHeight > window.innerWidth) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
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
    const fetchVotes = async () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        try {
          const userVotes = await getVotesByUserId(userId);
          setVotes(userVotes);
        } catch (error) {
          console.error('Error retrieving votes:', error);
        }
      }
    };

    fetchVotes();
  }, [getVotesByUserId]);

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg font-vt323 p-4 landscape-mode">
      <div className="choice-container">
        <div className="choice-header">DINE VALG</div>
        {loading && <p>Loading votes...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && votes.length > 0 ? (
          votes.map((vote) => (
            <div key={vote.voteId} className="flex items-center bg-white p-4 border-2 border-black rounded-lg mb-4">
              <PictureComponent src="/path/to/your/image/pilOgBue.png" alt="Character" />
              <div>
                <p>Hvordan valgte du å bekjempe trollet?</p>
                <p>Du og 13 andre valgte pil og buen</p>
              </div>
            </div>
          ))
        ) : (
          <p>No votes found.</p>
        )}
      </div>
      <button
        className="next-button"
        onClick={() => navigate('/phonerating')}
      >
        Next
      </button>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default UserChoiceComponent;
