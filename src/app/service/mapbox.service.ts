
import { Component,Injectable, ElementRef, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import mapboxgl from 'mapbox-gl';
export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  geometry: Geometry[];
  query: [];
}
export interface Feature {
  place_name: string;
  geometry: string;

}
export interface Geometry {
  coordinates: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  @ViewChild('map', { static: false }) mapNativeElementnativeElement: ElementRef;
  map;
  constructor(private http: HttpClient) {

  }

  run(lnglat){
    // -73.989,40.733.json?access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTF6Z2huMGx6czNtbnY2aWdwdWU5NiJ9._Dj2fBUZgCoryf1ehZTweQ;

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    // return this.http.get(url + lnglat.lng+','+lnglat.lat + '.json?types=address&access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTI0MGF0MGlnajNjbDMzMW9nMzJ6OSJ9._Dj2fBUZgCoryf1ehZTweQ')
    //   .pipe(map((res: MapboxOutput) => {
    //     return res.features;
    //   }))
      console.log( this.http.get(url + lnglat.lng+','+lnglat.lat + '.json?types=address&access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTI0MGF0MGlnajNjbDMzMW9nMzJ6OSJ9._Dj2fBUZgCoryf1ehZTweQ')
      .pipe(map((res: MapboxOutput) => {
        return res.features;
      })))
  }
  search_word(query: string) {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?types=address&access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTI0MGF0MGlnajNjbDMzMW9nMzJ6OSJ9.QgND5rJKyVYEmTjBJIrq3g')
      .pipe(map((res: MapboxOutput) => {
        return res.features;
      }))
  }

  geoloc(arrr){
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
 return this.http.get(url+ arrr[0] + "%2C%" + arrr[1] + ".json?access_token=pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTF6Z2huMGx6czNtbnY2aWdwdWU5NiJ9._Dj2fBUZgCoryf1ehZTweQ")

  }
}
