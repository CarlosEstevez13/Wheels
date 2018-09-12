import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
      imagen: 'conductor1.png',
      nombre: 'Camilo Diaz',
      hora: '03:00pm',
      cupos: '3',
    },
    {
      destino: 'UIS',
      partida: 'Cabecera',
      fecha: '14 de sep',
      imagen: 'conductor2.ico',
      nombre: 'Andres Andrade',
      hora: '02:00pm',
      cupos: '2',
    },
    {
      destino: 'UIS',
      partida: 'Piedecuesta',
      fecha: '15 de sep',
      imagen: 'conductor3.jpeg',
      nombre: 'Mario Paez',
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
            this.navCtrl.parent.select(2);;
          }
        }
      ]
    });
    alert.present();
  }

}
