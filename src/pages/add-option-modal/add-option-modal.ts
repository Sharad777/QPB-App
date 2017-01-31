import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-option-modal',
  templateUrl: 'add-option-modal.html'
})
export class AddOptionModalPage {

  @Input()
  public description: string;

  public type: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.description = this.navParams.data ? this.navParams.data.description : null;
    this.type = this.navParams.data ? this.navParams.data.type : 1;
  }

  ok() {
    this.viewCtrl.dismiss({ description: this.description });
  }

}
