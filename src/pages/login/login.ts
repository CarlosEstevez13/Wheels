import { RegistroPage } from './../registro/registro';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

   loguear(){
    this.navCtrl.setRoot(TabsPage);
  }

  registro(){
    this.navCtrl.push(RegistroPage);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
