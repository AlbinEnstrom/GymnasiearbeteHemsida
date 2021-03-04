import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseAPIResponse } from '../models/HouseAPIResponse.model';

@Injectable({
  providedIn: 'root'
})
export class HouseAPIService {

  constructor(private http:HttpClient) { }
  SayHi(){
    alert("Din mamma")
  }
  getHouses(){
    return this.http.get<HouseAPIResponse>("/assets/data/houses.json")
  }

}
