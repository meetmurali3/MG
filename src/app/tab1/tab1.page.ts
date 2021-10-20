import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  //variables such a title and items
  title = "Grocery";

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public alertCtrl: AlertController,
              public dataService: GroceriesServiceService,
              public inputDialogService: InputDialogService) {

  }

   /***
   * This function returns the list of items
   * This calls dataservice getItems()
   */
   loadItems () {
    return this.dataService.getItems();
  }

  /***
   * This function adds the new grocery item to the list
   */
  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }

/***
   * This function removes the selected item from the list of items
   * splice() is used to remove item from the list of items
   */  
  removeItem(item, index){
    console.log("Removing item - ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
    this.dataService.removeItem(index);
  }


  /***
   * This function edits the selected item from the list of items
   */  
 editItem(item, index){
  console.log("Editing item - ", item, index)
  const toast = this.toastCtrl.create({
    message: 'Editing Item - ' + index + " ...",
    duration: 2000
  }).then((toastData) => {
    console.log(toastData);
    toastData.present();
  });
  this.inputDialogService.showPrompt(item, index);
} 
  
}
