import React from 'react'
import {IonRow,IonCol,IonCardContent,IonCard} from "@ionic/react"

const BmiResult: React.FC<{calcBMI: number}> = ({calcBMI}) => {
    return (
       <IonRow>
        <IonCol>
          <IonCard>
           <IonCardContent>
               <h2 className="ion-text-center">Your Body Mass Index </h2>
              <h3 className="ion-text-center"> {calcBMI.toFixed(2)}</h3>
           </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    )
}

export default BmiResult
