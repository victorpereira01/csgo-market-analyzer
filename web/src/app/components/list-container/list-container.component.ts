import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.css']
})

export class ListComponent implements OnInit {

    gridColumns = 5;

    constructor() { }

    ngOnInit(): void {

    }
}