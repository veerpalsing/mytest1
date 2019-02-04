import { Component , OnInit} from '@angular/core';
import { AddModel } from './app.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  addDetails: AddModel = new AddModel();
  addList: Array<AddModel> = [];
  doneList:Array<AddModel>=[];
  inList:Array<AddModel>=[];


  constructor() { }
  ngOnInit() {
  }
  add() {
    this.addList.push(this.addDetails);
    this.addDetails = new AddModel();
  }
  clear() {
    this.addList = []; this.doneList= [];this.inList=[];
  }
 onChange(data){
    this.addDetails.list=data;
  }
   drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}



