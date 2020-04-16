import React from 'react'
import {IonRow,IonCol,IonButton,IonIcon} from "@ionic/react"
import {calculatorOutline,refreshOutline} from "ionicons/icons"

const BmiControls: React.FC<{calculateBMI: () => void; resetInputs: () => void } > = ({calculateBMI,resetInputs}) => {
    return (
        <>
        <IonCol className="ion-text-left">
          <IonButton fill="outline" onClick={calculateBMI}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton fill="outline" onClick={resetInputs}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
     </>
    )
}

export default BmiControls
