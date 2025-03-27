import { useEffect, useState } from "react";

function App() {
  const noQuestions = [
    "Are you sure?",
    "Did you mean to press no?",
    "Cmon, try again.",
    "Oops!",
    "Let's restart."
  ];

  const yesFinalResponse = [
    "/assets/wolf STICKER by imoji (1).gif",
    "/assets/GIF by Riks grill.gif",
    "/assets/Cat Vibing Sticker.gif",
    "/assets/Cat Meme Sticker by Brime.gif",
    "/assets/Sticker ねこ Sticker by Japan (2).gif"
  ];
  
  const randomGifs = [
    "/assets/wolf STICKER by imoji.gif",
    "/assets/Angry Illustration Sticker by Batuhan Kindil.gif",
    "/assets/Sticker ねこ Sticker by Japan.gif",
    "/assets/Sticker ねこ Sticker by Japan (1).gif",
    "/assets/Happy Cats Sticker.gif"
  ];

  const [randomQuestion, setRandomQuestion] = useState(null);
  const [randomNoImage, setRandomNoImage] = useState(null);
  const [randomYesImage, setRandomYesImage] = useState(null);
  const [isYes, setIsYes] = useState(false);
  const [isNo, setIsNo] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  // Preload images
  useEffect(() => {
    preloadImages([...yesFinalResponse, ...randomGifs, "/assets/cat_dancing.gif"]);
  }, [randomGifs, yesFinalResponse]);

  const preloadImages = (imageArray) => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleNoClick = () => {
    const randomNoQuestionIndex = Math.floor(Math.random() * noQuestions.length);
    const randomNoGifIndex = Math.floor(Math.random() * randomGifs.length);
    setRandomQuestion(noQuestions[randomNoQuestionIndex]);
    setRandomNoImage(randomGifs[randomNoGifIndex]);
    setIsNo(true);
    setIsYes(false);
    setIsInitial(false);
  };

  const handleYesClick = () => {
    const randomYesGifIndex = Math.floor(Math.random() * yesFinalResponse.length);
    setRandomYesImage(yesFinalResponse[randomYesGifIndex]);
    setIsYes(true);
    setIsNo(false);
    setIsInitial(false);
  };

  return (
    <div className="overall-container">
      {isInitial ? (
        <>
          <img className="mariela" src="/assets/mariela.jpeg" alt="Mariela" />
          <h1>Are you Mariela?</h1>
          <h2>Codename: Alpha 🐺?</h2>
        </>
      ) : isNo ? (
        <>
          <img src={randomNoImage} alt="Random No Response" />
          <h1>{randomQuestion}</h1>
        </>
      ) : isYes ? (
        <>
          <img src={randomYesImage} alt="Random Yes Response" />
          <h1>Welcome to the pack 🐺</h1>
        </>
      ) : null}
      <div className="button-28">
        <button className="yes-button" role="button" onClick={handleYesClick}>Yes</button>
        <button className="no-button" role="button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}

export default App;