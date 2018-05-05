import { OrdemServicoPage } from './../pages/ordem-servico/ordem-servico';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConfiguracaoPage } from './../pages/configuracao/configuracao';
import { PontoDigitalPage } from './../pages/ponto-digital/ponto-digital';
import { EmailPage } from './../pages/email/email';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImageProvider } from '../providers/image/image';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConfiguracaoPage,
    PontoDigitalPage,
  OrdemServicoPage,
  EmailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConfiguracaoPage,
    PontoDigitalPage,
    OrdemServicoPage,
    EmailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    ConfiguracaoPage,
    PontoDigitalPage,
    OrdemServicoPage,
    EmailPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider
  ]
})
export class AppModule {}
