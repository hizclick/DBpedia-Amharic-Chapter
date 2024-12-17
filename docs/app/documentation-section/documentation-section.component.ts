import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation-section',
  templateUrl: './documentation-section.component.html',
  styleUrls: ['./documentation-section.component.scss']
})
export class DocumentationSectionComponent {
  constructor(private router: Router) {}
  
  menuClicked(val:string){
    console.log(val)
  }
  openDocumentations(){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/documentations'])
    );
    window.open(url, "_blank");
  }
}
