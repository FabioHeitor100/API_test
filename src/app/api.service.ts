import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'b3061c31e2004d13b373afed1b3499fe';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  public getFootball(){
    return this.httpClient.get(`https://api-football-v1.p.rapidapi.com/v2/timezone`);
  }
  public getreal(){
    return this.httpClient.get(`https://api-football-v1.p.rapidapi.com/v2/seasons`);
  }

  testHTTPRequest(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2021-01-08", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b73088a13amshc5c3b9fda832259p11b845jsn367d9be9a21a",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        response.json().then(data => {console.log("futebol data!", data.api);
          console.log("futebol data!", data.api.fixtures[1]);
          console.log("awayTeam1", data.api.fixtures[1].awayTeam.team_name);

          fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/team/2994/last/10?timezone=Europe%2FLondon", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "b73088a13amshc5c3b9fda832259p11b845jsn367d9be9a21a",
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
          })
            .then(response => {
              response.json().then(data => {console.log("futebol data!", data.api);
                console.log("DATA DA TEAM|!",data.api);
              });
            })
            .catch(err => {
              console.error(err);
            });
        //for(let match of data.api.fixtures){
          //console.log("match", match);
        //}});
      })
      .catch(err => {
        console.error(err);
      });
  });
  }

  newRequest(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/h2h/212/242?timezone=Europe%2FLondon", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b73088a13amshc5c3b9fda832259p11b845jsn367d9be9a21a",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        response.json().then(data => {console.log("new data!", data.api);
          // for(let match of data.api.fixtures){
          //   console.log("match", match);
       // }
      });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getpredictions(){
    fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b73088a13amshc5c3b9fda832259p11b845jsn367d9be9a21a",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        response.json().then(data => {console.log("PREDICTION DATA!", data.api);
          // for(let match of data.api.fixtures){
          //   console.log("match", match);
          // }
        });
      })
      .catch(err => {
        console.error(err);
      });
  }



}

