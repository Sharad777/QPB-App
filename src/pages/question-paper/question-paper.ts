import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuestionPaperConfigModalPage } from '../question-paper-config-modal/question-paper-config-modal';
import { QuestionPaperConfigOptions } from '../../common/question-paper-config-options';
import { MasterDataProvider } from '../../providers/master-data-provider';

@Component({
  selector: 'page-question-paper',
  templateUrl: 'question-paper.html'
})
export class QuestionPaperPage {
  public questionPaperConfigOptions: QuestionPaperConfigOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public masterDataProvider: MasterDataProvider) {
  }

  public masterData: Object;

  ionViewDidLoad() {
    this.masterDataProvider.getQuestionPaperMasterData().subscribe(resp => {
      this.masterData = resp.json();
      this.configureQuestionPaper();
    });
  }

  /**
   * Presents a Modal with Configuration options for Question
   */
  configureQuestionPaper() {
    let modal = this.modalCtrl.create(QuestionPaperConfigModalPage, {
      masterData: this.masterData,
      configOptions: this.questionPaperConfigOptions
    });

    modal.onDidDismiss(data => {
      this.questionPaperConfigOptions = data;
      console.log(this.questionPaperConfigOptions);
    });

    modal.present();
  }

  /**
   * Take the user to the Home Page
   */
  goToHome() {
    this.navCtrl.popToRoot();
  }
}
