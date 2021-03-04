import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/models/HouseAPIResponse.model';
import { HouseAPIService } from 'src/app/services/house-API.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

houseId: number;
house: House;

  constructor(
    private route: ActivatedRoute,
    private houseApi: HouseAPIService
  ) { }

  ngOnInit(): void {
  this.route.queryParams.subscribe(params=> {
    this.houseId = params['house_id']
    console.log(this.houseId)

    this.houseApi.getHouses().subscribe(result =>{
      let houseSearchResult = result.houseList.find(h => h.id == this.houseId);
      if (houseSearchResult != undefined) {
        this.house = houseSearchResult;
        console.log(this.house)
      } else {
        // error
      }

    })
  })

  }

}
