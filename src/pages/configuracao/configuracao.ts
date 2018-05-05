import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';


/**
 * Generated class for the ConfiguracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {
 so: String;
 VS: String;
 ID: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, device: Device) {

    this.so = device.platform;
    this.VS = device.version;
    this.ID = device.uuid;
  }


}
