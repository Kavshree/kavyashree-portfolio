import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_KEY="b2165cc12cf045cdbb78052428796a79";

@Injectable({providedIn: "root"})
export class NewsReportService {
    constructor(private http: HttpClient){}
    
    getAllNews(query:string,fromDate:string,sortBy:string) {
        return this.http.get(`https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${API_KEY}`)
    }
}