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

    skinItem: SkinItem = new SkinItem();

    names: string[] = ["M4A4%20|%20Asiimov%20(Well-Worn)",
        "AK-47%20|%20Frontside%20Misty%20(Battle-Scarred)",
        "AWP%20|%20BOOM%20(Field-Tested)"];

    constructor(
        private api: SkinItemService
    ) { }

    ngOnInit() {
        this.items = [];
        this.getItem(this.names[0]);
        this.getItem(this.names[1]);
        this.getItem(this.names[2]);
    }

    getItem(itemName: string) {
        this.api.getItem(itemName).subscribe((data: SkinItem) => {
            this.skinItem = data;
            this.skinItem.name = this.formatCondition(itemName.split("%20").join(" "));
            console.log("++ " + this.skinItem.name);

            this.items.push(this.skinItem);
        });
    }

    formatCondition(itemName: string) {
        if(itemName.includes("(Well-Worn)")) {
            return itemName.replace("(Well-Worn)", "(WW)");
        } else if (itemName.includes("(Battle-Scarred)")) {
            return itemName.split("(Battle-Scarred)").join("(BS)");
        } else if (itemName.includes("(Field-Tested)")) {
            return itemName.replace("(Field-Tested)", "(FT)");
        } 
        
    }
}