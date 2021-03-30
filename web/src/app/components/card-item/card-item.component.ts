import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css']
})

export class CardItemComponent implements OnInit {

    itemName: string = '';

    constructor() { }

    ngOnInit(): void {

    }
}