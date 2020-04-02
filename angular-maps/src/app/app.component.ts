import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'server mappe';
  lat: number = 45.506738;
  lng: number =   9.190766;
  lati: number = 45.563314;
  lngt: number = 9.180794;

  latcane: number = 45.563316;
  lngcane: number = 9.18095;

  latardilla: number = 45.5633;
  lngardilla: number = 9.0500;

  latconiglio: number = 45.563319;
  lngconiglio: number = 9.0798;

   colore="yellow";
   giallo(){
     this.colore="yellow";
   }
   rosso(){
     this.colore="red";
   }
   verde(){
     this.colore="green";
   }
   icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
 ico =  {
    url:'./assets/img/coniglio.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
   iconi =  {
    url:'./assets/img/ardilla.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
   iconu =  {
    url:'./assets/img/golden-retriever.jpg',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  triangle: Array<Point> =
  [
    {lng:9.190766, lat:45.506738},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]
  rectangle: Array<Point> =
  [
   {lng:9.190766, lat:45.6},
    {lng:9.7, lat:45.6},
    {lng:9.7, lat:45.4},
    {lng:9.190766, lat:45.4},
  ]
 colore1="green";
   giallo1(){
     this.colore1="yellow";
   }
   rosso1(){
     this.colore1="red";
   }
   verde1(){
     this.colore1="green";
   }
}
