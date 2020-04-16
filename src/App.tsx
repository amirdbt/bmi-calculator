import React,{useRef,useState} from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert
} from "@ionic/react";
import BmiControls from "./components/BmiControls"
import MbiResult from "./components/BmiResult"
import InputControls from "./components/InputControls"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const weightInput = useRef<HTMLIonInputElement>(null)
  const heightInput = useRef<HTMLIonInputElement>(null)

  const [calcBMI, setCalbmi] = useState<number>()
  const [show, setShow] = useState(false)
  const [claclUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg')

  const calculateBMI =() =>{
     const enteredWeight = weightInput.current!.value
      const enteredheight = heightInput.current!.value

      if(!enteredheight || !enteredWeight || +enteredWeight <= 0 || +enteredheight <=0)
      {
        setShow(true)
        return
      }
      const weightConvertionFactor = claclUnits === 'ftlbs' ? 2.2 : 1
      const heightConvertionFactor = claclUnits === 'ftlbs' ? 3.28 : 1

      const weight = +enteredWeight / weightConvertionFactor
      const height = +enteredheight / heightConvertionFactor

      const bmi = weight / (height * height)

      setCalbmi(bmi)
      setTimeout(()=>{
        setCalbmi()
      },3000)
  }

  const selectCaclUnitHandler =(selectedValue: 'mkg'| 'ftlbs')=>{
    setCalcUnits(selectedValue)
  }


  const resetInputs =() =>{
    weightInput.current!.value =''
    heightInput.current!.value =''
  }

return (
  <>
  <IonAlert isOpen={show} message={"There was an error"} onDidDismiss={()=> setShow(false)} buttons={['Ok']} />
  <IonApp>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
              <InputControls selectedValue={claclUnits} onSelectValue={selectCaclUnitHandler} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Height ({claclUnits === 'mkg' ? 'meters' : 'feet'})</IonLabel>
              <IonInput type="number" ref={heightInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Weight ({claclUnits === 'mkg' ? 'kg' : 'lbs'})</IonLabel>
              <IonInput type="number" ref={weightInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
         <BmiControls calculateBMI={calculateBMI} resetInputs={resetInputs}  />
        </IonRow>
      { calcBMI && ( <MbiResult calcBMI={calcBMI} />)}
      </IonGrid>
    </IonContent>
  </IonApp>
  </>
)
};

export default App;
