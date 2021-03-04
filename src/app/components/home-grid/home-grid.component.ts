import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/models/HouseAPIResponse.model';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {
  @Input() houses: House[]

  public myList = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
