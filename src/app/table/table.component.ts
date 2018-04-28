import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	TitleTable = "Title of header table";
	id : number;
	name : string;

	hero:Hero = {
		id : 1 ,
		name : 'Mrityunjay'
	}

  constructor() { }

  ngOnInit() {
  }

}
