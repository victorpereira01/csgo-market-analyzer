import { Component, Input, OnInit } from '@angular/core';
import { SkinItem } from 'src/app/shared/model/skin-item.model';

@Component({
    selector: 'card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css']
})

export class CardItemComponent implements OnInit {

    @Input() item: SkinItem;

    constructor() { }

    ngOnInit(): void {

    }
}