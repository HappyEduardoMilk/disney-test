import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  items = [
    {
      name: 'water bottle',
      description: 'A bottle with purified water.',
      price: 10,
      discount: 0.1,
    },
    {
      name: 'soda can',
      description: 'An aluminium can with orange soda.',
      price: 13,
      discount: 0.2,
    },
    {
      name: 'coffee cup',
      description: 'A cup with black coffee.',
      price: 14,
      discount: 0.3,
    },
  ];

  model = new Item('', '', 0, 0);

  addItem() {
    const newItem = this.model;
    this.items.push(newItem);
  };

  constructor() { }

  ngOnInit() {
  }

}
