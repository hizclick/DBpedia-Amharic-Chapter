import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us-container',
  templateUrl: './contact-us-container.component.html',
  styleUrls: ['./contact-us-container.component.scss']
})

export class ContactUsContainerComponent {


  images = [
    {title:'Search', path:'../../assets/img/DBpedia-Logo.png', alt:''},
    {title:'Search', path:'../../assets/img/GSOC_logo.png',alt:''},
    {title:'Search', path:'../../assets/img/university_Leipzig_logo.png', alt:''},
    {title:'Search', path:'../../assets/img/UPB_Logo_ENG_coloured_CMYK.png',alt:''},
    {title:'Search', path:'../../assets/img/leuphana_logo.png',alt:''},
    
  ]
}
