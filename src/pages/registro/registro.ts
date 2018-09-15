import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  uni = ['UIS', 'UTS', 'USTA', 'UPB','UCC'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

loguin(){
  this.navCtrl.setRoot(LoginPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
