import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viajes= [
    {
      destino: 'UIS',
      partida: 'San Francisco',
      fecha: '14 de sep',
      imagen: 'marty.jpeg',
      nombre: 'Marty Mcfly',
      hora: '03:00pm',
      cupos: '3',
    },
    {
      destino: 'UIS',
      partida: 'Cabecera',
      fecha: '14 de sep',
      imagen: 'marty.jpeg',
      nombre: 'Forest Gump',
      hora: '02:00pm',
      cupos: '2',
    },
    {
      destino: 'UIS',
      partida: 'Piedecuesta',
      fecha: '15 de sep',
      imagen: 'marty.jpeg',
      nombre: 'Jenny Scatch',
      hora: '01:00pm',
      cupos: '3',
    }
  ];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmacion de Cupo',
      message: 'Desear unirte a este viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clickeado');
          }
        },
        {
          text: 'Unirse',
          handler: () => {
            console.log('Unirse clickeado');
            this.navCtrl.setRoot(ContactPage);
          }
        }
      ]
    });
    alert.present();
  }

}
