import { useState } from "react";

function App() {
  const noQuestions = [
    "Are you sure?",
    "Did you mean to press no?",
    "Cmon, try again.",
    "Oops!",
    "Let's restart."
  ];

  const [randomQuestion, setRandomQuestion] = useState(null);
  const [randomNoImage, setRandomNoImage] = useState(null);
  const [randomYesImage, setRandomYesImage] = useState(null);
  const [isYes, setIsYes] = useState(false);
  const [isNo, setIsNo] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const yesFinalResponse = [
    "/assets/Clap Smile GIF by SZA.gif",
    "/assets/Cats Happy Cat GIF.gif",
    "/assets/Cat Love GIF.gif",
    "/assets/Dance Dance Wait GIF.gif"
  ];

  const randomGifs = [
    "/assets/Angry Cat GIF.gif",
    "/assets/angry cat GIF (1).gif",
    "/assets/Sad Kitten GIF.gif",
    "/assets/come on please GIF by SZA.gif"
  ];

  // Handles the no action: gets a random question and replaces it with the header
  const handleNoClick = () => {
    const randomNoQuestionIndex = Math.floor(Math.random() * noQuestions.length);
    const randomNoGifIndex = Math.floor(Math.random() * randomGifs.length);
    setRandomQuestion(noQuestions[randomNoQuestionIndex]);
    setRandomNoImage(randomGifs[randomNoGifIndex]);
    setIsNo(true);
    setIsYes(false);
    setIsInitial(false);
  };

  // Handles the yes button click and changes the text
  const handleYesClick = () => {
    const randomYesGif = Math.floor(Math.random() * yesFinalResponse.length);
    setRandomYesImage(yesFinalResponse[randomYesGif]);
    setIsYes(true);
    setIsNo(false);
    setIsInitial(false);
  };

  return (
    <>
      <div className="overall-container">
        {isInitial ? (
          <>
            <img src="/assets/cat_dancing.gif" alt="Cat Dancing" />
            <h1>Are you free next Saturday?</h1>
          </>
        ) : isNo ? (
          <>
            <img src={randomNoImage} alt="Random No Response" />
            <h1>{randomQuestion}</h1>
          </>
        ) : isYes ? (
          <>
            <img src={randomYesImage} alt="Random Yes Response" />
            <h1>Yay! See you then!</h1>
          </>
        ) : null}
        <div className="button-28">
          <button role="button" onClick={handleYesClick}>Yes</button>
          <button role="button" onClick={handleNoClick}>No</button>
        </div>
      </div>
    </>
  );
}

export default App;