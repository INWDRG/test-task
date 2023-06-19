import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type selfType = {
 [key: string]: string
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
 constructor(private http: HttpClient) { }

 info:selfType =  {
  Abyssinian:'abys',
  'American Shorthair':'asho',
  'American Wirehair':'awir',
  Bengal:'beng',
  Birman:'birm',
  Bombay:'bomb',
  Chausie:'chau',
  Korat:'kora',
  Manx:'manx',
  Nebelung:'nebe',
  Ocicat:'ocic',
  Oriental:'orie',
  Persian:'pers',
  Radgol:'ragd',
  Savannah:'sava',
  Somali:'soma',
  Toyger:'toyg'
 }

 getData(breed:string){
  const abbr = this.info[breed as keyof selfType]
  const link = 'https://api.thecatapi.com/v1/images/search?limit=10&mime_types=&order=Random&size=small&page=0&breed_ids='+abbr+'&sub_id=demo-1d8a5f'
  return this.http.get(link)
 }


}
