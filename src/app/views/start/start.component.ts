import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/HouseAPIResponse.model';
import { HouseAPIService } from 'src/app/services/house-API.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  public myHouses: House[];

  constructor(private houseApi:HouseAPIService) { }

  ngOnInit() {
    this.houseApi.getHouses().subscribe(result => {
      this.myHouses = result.houseList;
      console.log(result)
      result.houseList.forEach(house => {
        console.log(house)
      })
    })
  }

}
