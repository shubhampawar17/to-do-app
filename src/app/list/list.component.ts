import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() tasks:string[] = [];
  @Output() deleteTask = new EventEmitter<number>();
}
