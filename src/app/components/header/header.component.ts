import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public myCount: number = 0;
  public headerList = [
    {name:"Start", url:"/start"},
    { name: "Hjälp", url: "/help" },
    {name:"Om oss", url: "/about-us"},
    {name:"Info", url: "/info"}
  ]

  constructor() { }



  ngOnInit(): void {
  }

  onClicked() {
    alert("hi")
    this.myCount += 1;
  }

}
