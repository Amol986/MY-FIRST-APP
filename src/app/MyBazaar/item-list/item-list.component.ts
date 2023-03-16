import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  items:Array<any> = [
    {
    "Id":1,
    "itemName":"water bottel",
    "price":200,
    "MFG":"sura waters"
  },
  {
    "Id":2,
    "itemName":"water bottel",
    "price":300,
    "MFG":"sura waters"
  },
  {
    "Id":3,
    "itemName":"water bottel",
    "price":400,
    "MFG":"sura waters"
  },
  {
    "Id":4,
    "itemName":"water bottel",
    "price":500,
    "MFG":"sura waters"
  },
  {
    "Id":5,
    "itemName":"water bottel",
    "price":600,
    "MFG":"sura waters"
  },
  {
    "Id":6,
    "itemName":"water bottel",
    "price":700,
    "MFG":"sura waters"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
