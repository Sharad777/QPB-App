import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuestionPaperConfigModalPage } from '../question-paper-config-modal/question-paper-config-modal';
import { QuestionPaperConfigOptions } from '../../common/question-paper-config-options';

/*
 Generated class for the QuestionPaper page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-question-paper',
  templateUrl: 'question-paper.html'
})
export class QuestionPaperPage {
  public questionPaperConfigOptions: QuestionPaperConfigOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.configureQuestionPaper();
  }

  /**
   * Presents a Modal with Configuration options for Question
   */
  configureQuestionPaper() {
    let modal = this.modalCtrl.create(QuestionPaperConfigModalPage, { configOptions: this.questionPaperConfigOptions });

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
