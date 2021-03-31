import { Component, OnInit } from '@angular/core';
import { SkinItem } from 'src/app/shared/model/skin-item.model';
import { SkinItemService } from 'src/app/shared/service/skin-item.service';

@Component({
    selector: 'list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.css']
})

export class ListComponent implements OnInit {

    items: SkinItem[];

    skinItem: SkinItem;

    gridColumns = 5;

    constructor(
        private api: SkinItemService
    ) { }

    ngOnInit(): void {
        this.getItem();
        
        this.items = [];
        this.items.push(this.skinItem);
    }

    getItem() {
        this.api.getItem().subscribe((data: SkinItem) => {
            this.skinItem = data;
        });
    }
}