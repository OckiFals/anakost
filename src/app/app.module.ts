import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SpendingNewModule } from '../pages/spending-new/spending-new.module';
import { HistoryModule } from '../pages/history/history.module';
import { LabelsModule } from '../pages/labels/labels.module';
import { LabelNewModule } from '../pages/label-new/label-new.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { IonicStorageModule } from '@ionic/storage';

import { DbService } from '../services/db.service';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SpendingNewModule,
    HistoryModule,
    LabelsModule,
    LabelNewModule,
    SettingsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbService,
    NativeStorage
  ]
})
export class AppModule {}
