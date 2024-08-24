import { Component, AfterViewInit,  OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';


@Component({
  selector: 'app-sparql-for-beginners-documentation',
  templateUrl: './sparql-for-beginners-documentation.html',
  styleUrls: ['../documentations.scss']
})
export class SparqlForBeginnersDocumentationComponent implements AfterViewInit, OnInit, OnDestroy{
  constructor(private highLightService: HighlightService, private renderer: Renderer2) {
    
  }
  private _styleElement: HTMLLinkElement  = this.renderer.createElement('link');
  private _scriptElement = this.renderer.createElement('script');

  private _highlighted: boolean = false;


  ngOnInit(): void {
  this._loadScript('../../../assets/scripts/prism.js');
    this._styleElement.rel = 'stylesheet';
    this._styleElement.href = "../../../assets/css/prism.css";
    this.renderer.appendChild(document.head, this._styleElement);
  }

  
  ngAfterViewInit(): void {
    if (!this._highlighted){
      this.highLightService.highlightAll();
      this._highlighted = true;
    }
  }
  ngOnDestroy(): void {
    if (this._styleElement) {
      this.renderer.removeChild(document.head, this._styleElement);
    }
  }

  private _loadScript(src: string): void {
    this._scriptElement = this.renderer.createElement('script');
    this._scriptElement.src = src;
    this._scriptElement.type = 'text/javascript';
    this._scriptElement.async = true;
    this.renderer.appendChild(document.body, this._scriptElement);
  }
}

