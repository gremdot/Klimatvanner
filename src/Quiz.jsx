import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  // Frågedata: 15 frågor anpassade för barn i åldern 13-15 år
  const questions = [
    {
      question: 'Vad är den största orsaken till klimatförändringar?',
      options: ['Fossila bränslen', 'Vindkraft', 'Solenergi', 'Skogsplantering'],
      correctAnswer: 'Fossila bränslen',
    },
    {
      question: 'Vilken gas bidrar mest till växthuseffekten?',
      options: ['Syre', 'Koldioxid', 'Kväve', 'Helium'],
      correctAnswer: 'Koldioxid',
    },
    {
      question: 'Vilket land har flest solpaneler i världen?',
      options: ['Sverige', 'Kina', 'USA', 'Indien'],
      correctAnswer: 'Kina',
    },
    {
      question: 'Hur många procent av jorden är täckt av vatten?',
      options: ['50%', '60%', '70%', '80%'],
      correctAnswer: '70%',
    },
    {
      question: 'Vad kan du göra för att minska matsvinnet hemma?',
      options: [
        'Köpa mer mat än du behöver',
        'Äta upp rester',
        'Kasta mat som går att äta',
        'Köpa mat varje dag',
      ],
      correctAnswer: 'Äta upp rester',
    },
    {
      question: 'Vilken energikälla är förnybar?',
      options: ['Kol', 'Oljekraft', 'Vindkraft', 'Naturgas'],
      correctAnswer: 'Vindkraft',
    },
    {
      question: 'Hur kan vi minska användningen av plast?',
      options: [
        'Använda plastpåsar',
        'Köpa återanvändbara påsar',
        'Slänga plast i naturen',
        'Kasta plast i soporna',
      ],
      correctAnswer: 'Köpa återanvändbara påsar',
    },
    {
      question: 'Vad är en följd av smältande glaciärer?',
      options: [
        'Ökad havsnivå',
        'Mer is på polerna',
        'Mindre vatten i haven',
        'Kallare klimat',
      ],
      correctAnswer: 'Ökad havsnivå',
    },
    {
      question: 'Vilket av följande är en växthusgas?',
      options: ['Syre', 'Metan', 'Kväve', 'Väte'],
      correctAnswer: 'Metan',
    },
    {
      question: 'Hur kan du minska din klimatpåverkan?',
      options: [
        'Använda cykel istället för bil',
        'Låta lampor vara tända hela natten',
        'Flyga ofta',
        'Kasta mat i soporna',
      ],
      correctAnswer: 'Använda cykel istället för bil',
    },
    {
      question: 'Vad betyder hållbar utveckling?',
      options: [
        'Att förbruka jordens resurser snabbt',
        'Att ta hänsyn till miljö, ekonomi och samhälle',
        'Att bara tänka på pengar',
        'Att ignorera klimatförändringar',
      ],
      correctAnswer: 'Att ta hänsyn till miljö, ekonomi och samhälle',
    },
    {
      question: 'Vad är Earth Hour?',
      options: [
        'En global miljörörelse',
        'En timme för shopping',
        'En musikfestival',
        'En TV-show',
      ],
      correctAnswer: 'En global miljörörelse',
    },
    {
      question: 'Vad är en viktig del av att återvinna?',
      options: [
        'Slänga allt i samma soptunna',
        'Sortera material som papper och plast',
        'Bränna alla sopor',
        'Lämna allt på gatan',
      ],
      correctAnswer: 'Sortera material som papper och plast',
    },
    {
      question: 'Vad är målet med Parisavtalet?',
      options: [
        'Att minska koldioxidutsläpp',
        'Att bygga fler fabriker',
        'Att öka oljeproduktionen',
        'Att minska användning av solenergi',
      ],
      correctAnswer: 'Att minska koldioxidutsläpp',
    },
    {
      question: 'Vad är en följd av avskogning?',
      options: [
        'Mer syre i luften',
        'Mindre djurliv',
        'Mindre kolutsläpp',
        'Fler träd planteras',
      ],
      correctAnswer: 'Mindre djurliv',
    },
  ];

  // State för quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]); // Lagrar användarens svar och status
  const [showDetails, setShowDetails] = useState(false); // För att visa detaljerad resultat

  // Hantera svar
  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;

    // Uppdatera svarens status
    setAnswers([
      ...answers,
      {
        question: questions[currentQuestion].question,
        selectedAnswer: selectedOption,
        correctAnswer: questions[currentQuestion].correctAnswer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); // Visa resultat om quizet är klart
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        // Resultatskärm
        <div className="result">
          <h2>Resultat</h2>
          <p>
            Du fick {score} av {questions.length} rätt!
          </p>
          {/* Visa detaljerad feedback */}
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Stäng' : 'Visa vilka frågor du hade fel på'}
          </button>
          {showDetails && (
            <div className="details">
              {answers.map((answer, index) => (
                <div key={index} className="answer-detail">
                  <p>
                    <strong>Fråga:</strong> {answer.question}
                  </p>
                  <p>
                    <strong>Ditt svar:</strong> {answer.selectedAnswer}{' '}
                    {answer.isCorrect ? '✔️' : '❌'}
                  </p>
                  {!answer.isCorrect && (
                    <p>
                      <strong>Korrekt svar:</strong> {answer.correctAnswer}
                    </p>
                  )}
                  <hr />
                </div>
              ))}
            </div>
          )}
          <button onClick={() => window.location.reload()}>Gör quiz igen</button>
        </div>
      ) : (
        // Frågeskärm
        <div className="question-card">
          <h2>Fråga {currentQuestion + 1} av {questions.length}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;