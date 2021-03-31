import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SkinItem } from "../model/skin-item.model";

@Injectable({ providedIn: 'root' })
export class SkinItemService {

    apiUrl= 'http://steamcommunity.com/market/priceoverview/?appid=730&currency=7&market_hash_name=AK-47%20|%20Asiimov%20(Field-Tested)';

    constructor(
        private httpClient: HttpClient
    ) { }

    public getItem(): Observable<SkinItem> {
        console.log("DASDSA");
        
        this.httpClient.get<SkinItem>(this.apiUrl).subscribe((d: SkinItem) => {
            console.log(d);
            
        });
        console.log("DASDSA");

        return this.httpClient.get<any>(this.apiUrl);
    }
}