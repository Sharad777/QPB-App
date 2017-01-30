import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionPaperConfigOptions } from '../../common/question-paper-config-options';

@Component({
  selector: 'page-question-paper-config-modal',
  templateUrl: 'question-paper-config-modal.html'
})
export class QuestionPaperConfigModalPage {

  @Input()
  public maximumMarks: number;

  @Input()
  public standard: number;

  @Input()
  public complexityLevel: number;

  public configOptions: QuestionPaperConfigOptions;

  public complexityLevels: Array<Object>;

  public standards: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

    let masterData = this.navParams.data.masterData;
    this.standards = masterData.standards;
    this.complexityLevels = masterData.complexity_levels;
    let configOptions = this.navParams.data.configOptions;
    if (configOptions) {
      this.maximumMarks = configOptions.maximumMarks;
      this.standard = configOptions.standard;
      this.complexityLevel = configOptions.complexityLevel;
    }
  }

  ok() {
    this.viewCtrl.dismiss(this.getConfig());
  }

  getConfig(): QuestionPaperConfigOptions {
    return new QuestionPaperConfigOptions(this.complexityLevel, this.maximumMarks, this.standard);
  }

}
