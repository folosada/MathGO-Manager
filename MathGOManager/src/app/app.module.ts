import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaEquipesPage } from '../pages/lista-equipes/lista-equipes';
import { EditTeamPage } from '../pages/edit-team/edit-team';
import { RankingPage } from '../pages/ranking/ranking';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { config } from '../providers/firebase/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaEquipesPage,
    RankingPage,
    EditTeamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaEquipesPage,
    RankingPage,
    EditTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
