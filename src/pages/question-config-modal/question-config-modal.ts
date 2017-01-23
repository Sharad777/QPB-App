import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
 Generated class for the QuestionConfigModal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-question-config-modal',
  templateUrl: 'question-config-modal.html'
})
export class QuestionConfigModalPage {

  @Input()
  public marks: number;

  @Input()
  public standard: number;

  @Input()
  public quesType: number;

  @Input()
  public complexityLevel: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionConfigModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ok() {
    this.viewCtrl.dismiss({
      marks: this.marks,
      standard: this.standard,
      quesType: this.quesType,
      complexityLevel: this.complexityLevel
    });
  }
}
