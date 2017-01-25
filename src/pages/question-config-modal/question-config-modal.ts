import { Component, Input } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionConfigOptions } from '../../common/question-config-options';
import { MasterdataProvider } from '../../providers/masterdata-provider';

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

  public question_types: Array<Object>;
  public standards: Array<Object>;
  public complexity_levels: Array<Object>;

  public configOptions: QuestionConfigOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public masterData: MasterdataProvider) {
  }

  ionViewDidLoad() {
    this.masterData.getQuestionMasterData().subscribe(resp => {
      let masterData = resp.json();
      this.complexity_levels = masterData.complexity_levels;
      this.question_types = masterData.question_types;
      this.standards = masterData.standards;
      let configOptions = this.navParams.data.configOptions;
      console.log(configOptions);
      if (configOptions) {
        this.marks = configOptions.marks;
        this.standard = configOptions.standard;
        this.quesType = configOptions.quesType;
        this.complexityLevel = configOptions.complexityLevel;
      }
    });
  }

  ok() {
    this.viewCtrl.dismiss(this.getConfig());
  }

  getConfig(): QuestionConfigOptions {
    return new QuestionConfigOptions(this.marks, this.complexityLevel, this.standard, this.quesType);
  }
}
