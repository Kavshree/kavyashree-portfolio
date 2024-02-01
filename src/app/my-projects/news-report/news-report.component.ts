import { Component } from '@angular/core';
import { NewsReportService } from './news-report.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-news-report',
  templateUrl: './news-report.component.html',
  styleUrls: ['./news-report.component.css']
})
export class NewsReportComponent {
  constructor(private service: NewsReportService){}

  ngOnInit() {
      this.getAllnews()
  }

  getAllnews() {
    this.service.getAllNews('','2024-02-01','').subscribe(res => {
      console.log("KAVYA", res)
    })
  }
  
}
