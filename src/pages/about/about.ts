import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  image: string =null;
  valido=false;
  constructor(public navCtrl: NavController, private camera:Camera) {

  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.valido=true;
      this.image = `data:image/jpeg;base64,${imageData}`;
      
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
