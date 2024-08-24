import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationsRoutingModule } from './documentations-routing.module';
import {SharedModule} from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SparqlForBeginnersDocumentationComponent} from './documentations/sparql-for-beginners-documentation.component';
import { MatIconModule } from '@angular/material/icon';
import {HighlightService} from '../services/highlight.service';
import { DocumentationLayoutComponent } from './documentation-layout/documentation-layout.component'
import {QueryAmharicDbpediaDocumentationComponent} from './documentations/query-amharic-dbpedia-documentation'
import { RunningDIEFDocumentationComponent } from './documentations/running-dief-extractor-documentation';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    SparqlForBeginnersDocumentationComponent,
    QueryAmharicDbpediaDocumentationComponent,
    RunningDIEFDocumentationComponent,
    DocumentationLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    DocumentationsRoutingModule,
    MatListModule,
    MatIconModule,
    NgChartsModule
  ],
  providers: [HighlightService] 
})
export class DocumentationsModule { }



