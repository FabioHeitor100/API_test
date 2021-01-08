import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.testHTTPRequest();
    this.apiService.newRequest();
    this.apiService.getpredictions();
    this.apiService.getNews().subscribe((data)=>{
      console.log("DATAAAA!!!!",data);

    });
    this.apiService.getFootball().subscribe((data)=>{
      console.log("Football!!!!",data);


    });
    // this.apiService.getreal().subscribe((data)=>{
    //   console.log("real!!!!",data);
    //
    // });
  }

}
