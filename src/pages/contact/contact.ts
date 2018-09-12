import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  prueba=[
    'hola','1','2','4'
  ];
  constructor(public navCtrl: NavController) {

  }

}
