import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { QuestionConfigModalPage } from '../question-config-modal/question-config-modal';
import { QuestionConfigOptions } from '../../common/question-config-options';
import { MasterDataProvider } from '../../providers/master-data-provider';
import { MasterDataResolver } from '../../providers/master-data-resolver';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage implements OnInit {

  public questionConfigOptions: QuestionConfigOptions;

  public hasOptions: boolean;

  public showQuesTemplate: boolean;

  public masterData: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public viewCtrl: ViewController, public masterDataProvider: MasterDataProvider, public masterDataResolver: MasterDataResolver) {
    this.hasOptions = false;
    this.showQuesTemplate = false;
  }

  ngOnInit() {
    this.masterDataProvider.getQuestionMasterData().subscribe(resp => {
      this.masterData = resp.json();
      this.configureQuestion();
    });
  }

  /**
   * Presents a Modal with Configuration options for Question
   */
  configureQuestion() {
    let modal = this.modalCtrl.create(QuestionConfigModalPage, {
      masterData: this.masterData,
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
  }

  /**
   * Returns the value against each of the master data object's id
   */
  getMasterDataValueById(masterDataType: string, id: number): string {
    return this.masterDataResolver.resolveMasterDataValueById(this.masterData[ masterDataType ], id);
  }

}
