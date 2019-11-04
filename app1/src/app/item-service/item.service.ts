import { Injectable } from '@angular/core';
import {Item} from "../dao/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public listItems(): Item[]{
    return [
      new Item('a8708fae-4d0f-4434-b480-376500e1ebb4', 'Test 1'),
      new Item('a18cdce2-0b30-4dc2-b933-5da79e725e88', 'Test 2')
    ];
  }
}
