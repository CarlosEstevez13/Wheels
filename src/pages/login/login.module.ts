<<<<<<< HEAD

import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
=======
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
>>>>>>> e0c21405746172bb1363eb5f8669018b69531aef
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
    
}

