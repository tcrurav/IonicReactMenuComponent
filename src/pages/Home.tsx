import { IonContent, IonHeader, IonIcon, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';
import { menuOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
            <IonMenuToggle slot="end">
              <IonIcon icon={menuOutline} size="large" className="hambuger"></IonIcon>
            </IonMenuToggle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent fullscreen>
        
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
              <IonMenuToggle slot="end">
                <IonIcon icon={menuOutline} size="large" className="hambuger"></IonIcon>
              </IonMenuToggle>
            </IonToolbar>
          </IonHeader>
          <Menu />
          <ExploreContainer />
        </IonContent>
      </IonPage>

      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default Home;
