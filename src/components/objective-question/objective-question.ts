import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular/index';
import { AddOptionModalPage } from '../../pages/add-option-modal/add-option-modal';
import { Option } from '../../common/option';
import { MasterData } from '../../common/master-data';
import { MasterDataProvider } from '../../providers/master-data-provider';

@Component({
  selector: 'objective-question',
  templateUrl: 'objective-question.html'
})
export class ObjectiveQuestionComponent {

  @Input()
  public description: string;

  public options: Array<Option>;

  @Input()
  public optionType: number;

  public optionTypes: Array<MasterData>;

  public enableAddOption: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public masterDataProvider: MasterDataProvider) {
    this.options = [];
    this.masterDataProvider.getOptionTypes().subscribe(resp => {
      this.optionTypes = resp.json() ? resp.json().option_types : [];
      this.enableAddOption = false;
    });
  }

  addOption(): void {
    let modal = this.modalCtrl.create(AddOptionModalPage, {
      type: this.optionType
    });

    modal.onDidDismiss(data=> {
      console.log(data);
      this.options.push(new Option(data.description));
    });

    modal.present();
  }

  editOption(description: string): void {
    let modal = this.modalCtrl.create(AddOptionModalPage, {
      description: description
    });

    modal.onDidDismiss(data=> {
      console.log(data);
      for (let opt of this.options) {
        if (opt.description === description) {
          opt.description = data.description;
        }
      }
    });

    modal.present();
  }

  removeOption(description: string): void {
    this.options = this.options.filter((opt)=> {
      return opt.description !== description
    });
  }

  enableAddOptions() {
    this.enableAddOption = true;
  }
}
