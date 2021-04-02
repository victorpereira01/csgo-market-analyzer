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

    defaultItems: string[] = ["M4A4%20|%20Asiimov%20(Well-Worn)",
        "AK-47%20|%20Frontside%20Misty%20(Battle-Scarred)",
        "AK-47%20|%20Wasteland%20Rebel%20(Field-Tested)",
        "USP-S%20|%20Kill%20Confirmed%20(Factory%20New)",
        "★%20StatTrak™%20M9%20Bayonet%20|%20Freehand%20(Factory%20New)",
        "★%20Butterfly%20Knife%20|%20Tiger%20Tooth%20(Minimal%20Wear)",
        "AK-47%20|%20Bloodsport%20(Field-Tested)",
        "AWP%20|%20BOOM%20(Field-Tested)",
        "M4A1-S%20|%20Master%20Piece%20(Minimal%20Wear)",
        "StatTrak™%20AWP%20|%20Hyper%20Beast%20(Factory%20New)"];

    constructor(
        private api: SkinItemService
    ) { }

    ngOnInit() {
        this.items = [];
        this.defaultItems.map((item) => {
            this.getItem(item);
        })
    }

    getItem(itemName: string) {
        this.api.getItem(itemName).subscribe((data: SkinItem) => {
            this.skinItem = data;
            this.skinItem.name = this.formatCondition(itemName.split("%20").join(" "));

            this.items.push(this.skinItem);
        });
    }

    formatCondition(itemName: string) {
        if (itemName.includes("(Well-Worn)")) {
            return itemName.replace("(Well-Worn)", "(WW)");
        } else if (itemName.includes("(Battle-Scarred)")) {
            return itemName.split("(Battle-Scarred)").join("(BS)");
        } else if (itemName.includes("(Field-Tested)")) {
            return itemName.replace("(Field-Tested)", "(FT)");
        } else if (itemName.includes("(Factory New)")) {
            return itemName.replace("(Factory New)", "(FN)");
        } else if(itemName.includes("(Minimal Wear)")) {
            return itemName.replace("(Minimal Wear)", "(MW)")
        }
    }
}