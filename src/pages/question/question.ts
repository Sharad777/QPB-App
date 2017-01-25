import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { QuestionConfigModalPage } from '../question-config-modal/question-config-modal';
import { QuestionConfigOptions } from '../../common/question-config-options';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage implements OnInit {

  public questionConfigOptions: QuestionConfigOptions;

  public hasOptions: boolean;

  public showQuesTemplate: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
    this.hasOptions = false;
    this.showQuesTemplate = false;
  }

  ngOnInit() {
    this.configureQuestion();
  }

  /**
   * Presents a Modal with Configuration options for Question
   */
  configureQuestion() {
    let modal = this.modalCtrl.create(QuestionConfigModalPage, {
      configOptions: this.questionConfigOptions
    });

    modal.onDidDismiss(data => {
      this.questionConfigOptions = data;
      console.log(data);
      if (this.questionConfigOptions !== {}) {
        this.initializeQuestionTemplate();
      }
    });

    modal.present();
  }

  /**
   * Take the user to the Home Page
   */
  goToHome() {
    this.navCtrl.popToRoot();
  }

  /**
   * Shows the Template in UI to create a new question based on the config options
   */
  initializeQuestionTemplate() {
    this.showQuesTemplate = true;
    switch (this.questionConfigOptions.quesType) {
      case 1:
        this.hasOptions = false;
        break;
      default:
        this.hasOptions = false;
        break;
    }
  }
}
