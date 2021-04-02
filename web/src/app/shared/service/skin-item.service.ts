import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SkinItem } from "../model/skin-item.model";

@Injectable({ providedIn: 'root' })
export class SkinItemService {

    apiUrl= 'http://steamcommunity.com/market/priceoverview/?appid=730&currency=7&market_hash_name=';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getItem(itemName: string): Observable<SkinItem> {
        return this.httpClient.get<SkinItem>(this.apiUrl + itemName);
    }
}