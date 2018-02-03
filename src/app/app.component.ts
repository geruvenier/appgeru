import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title : string; 
  name  : string; 
  version   : string; 
  email : string; 
  websiteg  : string; 
  musica  : string[];
  showmusica: boolean;

constructor() {
  console.log('Constructor Works Fine!!!!');
  this.title  = 'app';
  this.name   ="Geru";
  this.version = "Version 1.00";
  this.email = "geruvenier@gmail.com";
  this.websiteg="http://www.google.com";
  this.musica = ["Prueba1","Prueba2","Prueba3"];
  this.showmusica = false;
  
}


toggleshowmusica() {
  this.showmusica= !this.showmusica;

}
newMusica(mmusica) {
  this.musica.push(mmusica.value);
  console.log (mmusica.value);
  mmusica.value="";
  return false;
}

}
