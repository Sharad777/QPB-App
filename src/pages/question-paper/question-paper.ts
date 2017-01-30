import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuestionPaperConfigModalPage } from '../question-paper-config-modal/question-paper-config-modal';
import { QuestionPaperConfigOptions } from '../../common/question-paper-config-options';
import { MasterDataProvider } from '../../providers/master-data-provider';
import { MasterDataResolver } from '../../providers/master-data-resolver';

@Component({
  selector: 'page-question-paper',
  templateUrl: 'question-paper.html'
})
export class QuestionPaperPage {
  public questionPaperConfigOptions: QuestionPaperConfigOptions;

  public showQuesPaperTemplate: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public masterDataProvider: MasterDataProvider, public masterDataResolver: MasterDataResolver) {
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
      setTimeout(() => {
        if (this.questionPaperConfigOptions !== {}) {
          this.initializeQuestionPaperTemplate();
        }
      }, 500);
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
  initializeQuestionPaperTemplate() {
    this.showQuesPaperTemplate = true;
  }

  /**
   * Returns the value against each of the master data object's id
   */
  getMasterDataValueById(masterDataType: string, id: number): string {
    return this.masterDataResolver.resolveMasterDataValueById(this.masterData[ masterDataType ], id);
  }
}
