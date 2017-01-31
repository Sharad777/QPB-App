import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MasterDataProvider {

  constructor(public http: Http) {
    console.log('Hello MasterdataProvider Provider');
  }

  getQuestionMasterData(): Observable<Response> {
    return this.http.get('./assets/data/question-master-data.json');
  }

  getQuestionPaperMasterData(): Observable<Response> {
    return this.http.get('./assets/data/question-paper-master-data.json');
  }

  getOptionTypes(): Observable<Response> {
    return this.http.get('./assets/data/option-types.json');
  }
}
