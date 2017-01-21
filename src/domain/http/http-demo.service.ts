import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as Rx from 'rxjs';
import * as Api from 'angular2-in-memory-web-api'

export interface IDemoData{
    title:string;
    name:string;
}

@Injectable()
export class HttpDemoService {
    private heroesUrl = 'app/heroes';  // URL to web API

    constructor(private http: Http){

    }

    getDemoData():Promise<Array<IDemoData>>{
        let promise:Promise<Array<IDemoData>> = new Promise<Array<IDemoData>>((resolve,reject)=>{
            setTimeout(() => {  
                    resolve([{title:'one',name:'oneName'}]);
            }, 2000);  
        });

        return promise;
    }

     getHeroes (): Rx.Observable<Array<any>> {
        return this.http.get(this.heroesUrl)
                        .map((res: Response) => {
 
                            let body = res.json();
                            return body.data || { };
                        })
                        .catch((error: Response | any) => {                        
                            return Rx.Observable.throw("error din observable");
                        });
  }
}

export class InMemHeroService implements Api.InMemoryDbService {
  createDb() {
    let heroes = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    return {heroes};
  }
}