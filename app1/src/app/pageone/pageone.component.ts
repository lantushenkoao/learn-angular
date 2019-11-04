import { Component, OnInit } from '@angular/core';
import {Item} from '../dao/Item';
import {ItemService} from "../item-service/item.service";

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.listItems();
  }

}



