import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MasterData } from '../common/master-data';

@Injectable()
export class MasterDataResolver {

  constructor(public http: Http) {
    console.log('Hello MasterDataResolver Provider');
  }

  resolveMasterDataValueById(masterData: Array<MasterData>, id: number): string {
    let value;
    masterData.forEach((valObj)=> {
      if (valObj.id === id) {
        value = valObj.name;
      }
    });
    return value;
  }

}
