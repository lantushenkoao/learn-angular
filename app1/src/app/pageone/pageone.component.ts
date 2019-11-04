import { Component, OnInit } from '@angular/core';
import {Item} from '../dao/Item';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent implements OnInit {
  items: Item[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      new Item('a8708fae-4d0f-4434-b480-376500e1ebb4', 'Test item 1'),
      new Item('a18cdce2-0b30-4dc2-b933-5da79e725e88', 'Test item 2')
    ];
  }

}



