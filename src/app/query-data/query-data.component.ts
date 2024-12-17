import { Component } from '@angular/core';

@Component({
  selector: 'app-query-data',
  templateUrl: './query-data.component.html',
  styleUrls: ['./query-data.component.scss']
})
export class QueryDataComponent {
  openInNewTab(url: string):void{
    window.open(url, '_blank');
  }
}
