import { useState } from "react";
import Card from "./Card";
import programming from "./assets/programming.svg";
import meditation from "./assets/meditation.svg";
import time_managment from "./assets/time_managment.svg";

function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      content:
        "Un minim de 30 hores a la setmana. Si no en tens prou, haurás de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "bg-indigo-400 rounded-t-xl py-20",
      image: time_managment,
    },
    {
      title: "Programa projectes propi",
      content:
        "Mas valen 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivaciò i la implicaciò en el projecte ajudarà",
      bgColor: "bg-gray-400 rounded-t-xl py-20 px-5 ",
      image: programming,
    },
    {
      title: "Procura descansar",
      content:
        "Descansar bè i desconectar son vitals. D'aquesta manera reduiràs l'estrès i l'ansiétat.Milloraràs la teva concentraciò i consolidaràs el teu aprenenatge",
      bgColor: "bg-yellow-400 rounded-t-xl py-20 ",
      image: meditation,
    },
  ];
  const [step, setStep] = useState(0);
  const [animateToLeft, setAnimateToLeft] = useState(true);

  const currentCardData = tutorialData[step];

  function toStep(clickedStep) {
    setStep(clickedStep);
  }
  function nextStep() {
    setStep((prev) => {
      setAnimateToLeft(false);
      return prev + 1;
    });
  }

  function prevStep() {
    setStep((prev) => {
      setAnimateToLeft(true);
      return prev - 1;
    });
  }

  return (
    <div className="bg-slate-100 py-20">
      <Card
        image={currentCardData.image}
        bgColor={currentCardData.bgColor}
        title={currentCardData.title}
        content={currentCardData.content}
        nextStep={nextStep}
        prevStep={prevStep}
        showPrevButton={step > 0}
        showNextButton={step < tutorialData.length - 1}
        totalSteps={tutorialData.length}
        currentStep={step}
        toStep={toStep}
        animateToLeft={animateToLeft}
      />
    </div>
  );
}

export default App;