import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { RegistroPage } from './registro';

@NgModule({
  declarations: [
    RegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPage),
  ],
})
export class RegistroPageModule {
  constructor (public navCtrl:NavController){
    
  }
}
